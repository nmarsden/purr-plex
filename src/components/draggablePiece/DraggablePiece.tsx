import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DraggablePiece.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';
import Draggable, { DraggableData, DraggableEvent, DraggableEventHandler } from "react-draggable";
import Piece, { shapeDimensions } from '../piece/Piece';

let cx = classNames.bind(styles);

const DraggablePiece: FunctionComponent<any> = ({ shape, onDrag, onDragStop, isDisabled }) => {
  const gameDimensions = useGameDimensions();
  const shapeDims = shapeDimensions(shape, gameDimensions.cellSize);
  const smallShapeDims = shapeDimensions(shape, gameDimensions.cellSize / 2);
  const initialPosition = {
    x: (shapeDims.width - smallShapeDims.width) / 2,
    y: (shapeDims.height - smallShapeDims.height) / 2
  };
  const [isPreDragging, setIsPreDragging] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const dragStartYOffset = -(gameDimensions.cellSize * 2);

  if (!isDragging && position.x !== initialPosition.x && position.y !== initialPosition.y) {
    setPosition(initialPosition);
  }

  let containerInlineStyles = {
    left: `${gameDimensions.draggableLeft - (shapeDims.width / 2)}px`,
    top: `${gameDimensions.draggableTop - (shapeDims.height / 2)}px`
  };

  let pieceContainerClassName = cx({
    isPreDragging: isPreDragging,
  });

  const toGridDragData = (data: DraggableData) => {
    const pieceRect = data.node.getBoundingClientRect();

    const halfCellSize = gameDimensions.cellSize / 2;
    const gridX = Math.floor( (pieceRect.left + halfCellSize - gameDimensions.gridLeft) / gameDimensions.cellSize );
    const gridY = Math.floor( (pieceRect.top + halfCellSize - gameDimensions.gridTop) / gameDimensions.cellSize );
    const isInsideGrid = gridX >= 0 && gridX <=8 && gridY >=0 && gridY <= 8;

    return { isInsideGrid, gridX, gridY, shape };
  };

  const handleStart = () => {
    setIsPreDragging(true);
    setPosition({x:0,y:dragStartYOffset});
    setIsDragging(true);
  };
  const handleDrag: DraggableEventHandler = (e: DraggableEvent, data: DraggableData) => {
    setIsPreDragging(false);
    onDrag(toGridDragData(data));
  };
  const handleStop: DraggableEventHandler = (e: DraggableEvent, data: DraggableData) => {
    const gridDragData = toGridDragData(data);

    setPosition(initialPosition);
    setIsDragging(false);

    onDragStop(gridDragData);
  };

  return (
    <div style={containerInlineStyles} className={styles.container}>
      <Draggable position={position}
                 onStart={handleStart}
                 onDrag={handleDrag}
                 onStop={handleStop}
                 disabled={isDisabled}>
        <div className={pieceContainerClassName}>
          <Piece x={0} y={0} shape={shape} isDraggable={true} isPreDragging={isPreDragging} isDragging={isDragging} isMuted={isDisabled}/>
        </div>
      </Draggable>
    </div>
  );
};

export default DraggablePiece;
