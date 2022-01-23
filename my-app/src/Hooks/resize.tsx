import React, { useEffect } from "react";
import store from "../store/store";
import { SelectionType } from "../types";

type MousePositionType = {
    x: number,
    y: number
};

type DifType = {
    x: number,
    y: number
};

type ElementPositionType = {
    x: number,
    y: number,
    thirdPointX?: number,
    thirdPointY?: number
};

export const useResizeElement = (ref: React.RefObject<any>, setDif: Function, getSelection: any, resizeElement: any, addToHistory: any) => {
    let dif: DifType = {
        x: 0,
        y: 0
    };

    let startPosition: MousePositionType = {
        x: 0,
        y: 0
    };

    useEffect(() => {
        if (ref && ref.current) {
            ref.current.addEventListener("mousedown", onMouseDown);
        }
    }, []);

    const onMouseDown = (e: MouseEvent) => {
        console.log('onMouseDown!!!');
        setDif({ x: 0, y: 0 });

        startPosition = {
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
        const newDif = {x: dif.x / 2, y: dif.y/ 2};

        store.dispatch(resizeElement(selection, newDif));
        store.dispatch(addToHistory(store.getState().presentation, store.getState().selection));

        console.log(dif);

        setDif({x: 0, y: 0});
        dif = {x: 0, y: 0};
    }

    const onMouseMove = (e: MouseEvent) => {
        dif = { x: e.pageX - startPosition.x, y: e.pageY - startPosition.y };

        // if (modelPos.thirdPointX !== undefined && modelPos.thirdPointY !== undefined) {
        //     newPos = { x: modelPos.x + delta.x, y: modelPos.y + delta.y, thirdPointX: modelPos.thirdPointX + delta.x, thirdPointY: modelPos.thirdPointY + delta.y };
        // } else {
        //     newPos = { x: modelPos.x + delta.x, y: modelPos.y + delta.y };
        // }

        setDif(dif);
    }
}