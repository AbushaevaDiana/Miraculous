import React, { useEffect } from "react";
import store from "../store/store";

type MousePositionType = {
    x: number,
    y: number
};

type DeltaType = {
    x: number,
    y: number
};

type ElementPositionType = {
    x: number,
    y: number,
    thirdPointX?: number,
    thirdPointY?: number
};

export const useDragAndDrop = (ref: React.RefObject<any>, setDelta: Function, getSelection: any, moveElement: any, addToHistory: any) => {
    let delta: DeltaType = {
        x: 0,
        y: 0
    };

    let startPos: MousePositionType = {
        x: 0,
        y: 0
    };

    useEffect(() => {
        if (ref && ref.current) {
            ref.current.addEventListener("mousedown", onMouseDown);
        }
    }, []);

    const onMouseDown = (e: MouseEvent) => {
        setDelta({ x: 0, y: 0 });

        startPos = {
            x: e.pageX,
            y: e.pageY
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    }

    const onMouseUp = (e: MouseEvent) => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);


        const selection = getSelection();
        const newDelta = {x: delta.x / 2, y: delta.y/ 2};

        store.dispatch(moveElement(selection, newDelta));
        store.dispatch(addToHistory(store.getState().presentation, store.getState().selection));


        setDelta({x: 0, y: 0});
        delta = {x: 0, y: 0};
    }

    const onMouseMove = (e: MouseEvent) => {
        delta = { x: e.pageX - startPos.x, y: e.pageY - startPos.y };

        setDelta(delta);
    }
}