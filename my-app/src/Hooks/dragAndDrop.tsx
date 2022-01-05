import { RefObject, useEffect, useState } from "react";
import { Position } from "../types";

export const useDragAndDrop = (
  elementRef: RefObject<HTMLDivElement>,
  initPosition: Position,
  onMoveStart: () => void,
  onMoveEnd: () => void,
  enabled?: boolean
) => {
  const [position, setPosition] = useState<Position>(initPosition);

  let startDragX = 0;
  let startDragY = 0;

  useEffect(() => {
    if (elementRef.current)
      elementRef.current.addEventListener("mousedown", dragHandler);
    return () => {
      if (elementRef.current)
        elementRef.current.removeEventListener("mousedown", dragHandler);
    };
  });

  const dragHandler = (e: MouseEvent) => {
    startDragX = e.clientX;
    startDragY = e.clientY;

    document.addEventListener("mousedown", onMoveInit);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStop);
  };

  const onMoveInit = () => {
    onMoveStart();
  };

  const onMove = (e: MouseEvent) => {
    const newX = position.x - startDragX + e.clientX;
    const newY = position.y - startDragY + e.clientY;
    enabled && setPosition({ x: newX, y: newY });
  };

  const onStop = () => {
    startDragX = 0;
    startDragY = 0;

    onMoveEnd();
    document.removeEventListener("mousedown", onMoveInit);
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onStop);
  };

  return position;
};