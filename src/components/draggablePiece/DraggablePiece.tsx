import React, { FunctionComponent, useState } from 'react';
import styles from './DraggablePiece.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';
import Draggable, { DraggableData, DraggableEvent, DraggableEventHandler } from "react-draggable";
import Piece, { shapeDimensions } from '../piece/Piece';

const DraggablePiece: FunctionComponent<any> = ({ shape, onDrag, onDragStop }) => {
  const gameDimensions = useGameDimensions();
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({x:0,y:0});
  const dragStartYOffset = -(gameDimensions.cellSize * 2);

  let containerInlineStyles = {
    left: `${gameDimensions.draggableLeft - (shapeDimensions(shape, gameDimensions.cellSize).width / 2)}px`,
    top: `${gameDimensions.draggableTop - (shapeDimensions(shape, gameDimensions.cellSize).height / 2)}px`
  };

  const toGridDragData = (data: DraggableData) => {
    const pieceRect = data.node.getBoundingClientRect();

    const halfCellSize = gameDimensions.cellSize / 2;
    const gridX = Math.floor( (pieceRect.left + halfCellSize - gameDimensions.gridLeft) / gameDimensions.cellSize );
    const gridY = Math.floor( (pieceRect.top + halfCellSize - gameDimensions.gridTop) / gameDimensions.cellSize );
    const isInsideGrid = gridX >= 0 && gridX <=8 && gridY >=0 && gridY <= 8;

    return { isInsideGrid, gridX, gridY, shape };
  };

  const handleStart = () => {
    setPosition({x:0,y:dragStartYOffset});
    setIsDragging(true);
  };
  const handleDrag: DraggableEventHandler = (e: DraggableEvent, data: DraggableData) => {
    onDrag(toGridDragData(data));
  };
  const handleStop: DraggableEventHandler = (e: DraggableEvent, data: DraggableData) => {
    const gridDragData = toGridDragData(data);

    setPosition({x:0,y:0});
    setIsDragging(false);

    onDragStop(gridDragData);
  };

  return (
    <div style={containerInlineStyles} className={styles.container}>
      <Draggable position={position}
                 onStart={handleStart}
                 onDrag={handleDrag}
                 onStop={handleStop}>
        <div>
          <Piece x={0} y={0} shape={shape} isDraggable={true} isDragging={isDragging}/>
        </div>
      </Draggable>
    </div>
  );
};

export default DraggablePiece;
