import React, { useEffect } from "react";
import store from "../store/store";
import { SelectionType } from "../types";

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

    // let modelPos: ElementPositionType = {
    //     x: 0,
    //     y: 0,
    //     thirdPointX: 0,
    //     thirdPointY: 0
    // };

    // let newPos: ElementPositionType = {
    //     x: 0,
    //     y: 0,
    //     thirdPointX: 0,
    //     thirdPointY: 0
    // };

    useEffect(() => {
        console.log('onMousemove зашел');
        if (ref && ref.current) {
            console.log('onmousedown condition')
            ref.current.addEventListener("mousedown", onMouseDown);
        }
    }, []);

    const onMouseDown = (e: MouseEvent) => {
        console.log('onMouseDown!!!');
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

        // modelPos = newPos;

        const selection = getSelection();
        console.log(selection);
        const newDelta = {x: delta.x / 2, y: delta.y/ 2};

        store.dispatch(moveElement(selection, newDelta));
        store.dispatch(addToHistory(store.getState().presentation, store.getState().selection));

        console.log(delta);

        setDelta({x: 0, y: 0});
        delta = {x: 0, y: 0};
    }

    const onMouseMove = (e: MouseEvent) => {
        delta = { x: e.pageX - startPos.x, y: e.pageY - startPos.y };

        // if (modelPos.thirdPointX !== undefined && modelPos.thirdPointY !== undefined) {
        //     newPos = { x: modelPos.x + delta.x, y: modelPos.y + delta.y, thirdPointX: modelPos.thirdPointX + delta.x, thirdPointY: modelPos.thirdPointY + delta.y };
        // } else {
        //     newPos = { x: modelPos.x + delta.x, y: modelPos.y + delta.y };
        // }

        setDelta(delta);
    }
}