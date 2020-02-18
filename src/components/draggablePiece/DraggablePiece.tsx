import React, { FunctionComponent, useState } from 'react';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';
import Draggable, { DraggableData, DraggableEvent, DraggableEventHandler } from "react-draggable";
import Piece from '../piece/Piece';

const DraggablePiece: FunctionComponent<any> = ({ onDragStop }) => {
  const gameDimensions = useGameDimensions();
  const [isDragging, setIsDragging] = useState(false);
  const pieceOffsetGridX = 4;
  const pieceOffsetGridY = 1;
  const pieceOffsetX = pieceOffsetGridX * gameDimensions.cellSize;
  const pieceOffsetY = pieceOffsetGridY * gameDimensions.cellSize;
  const halfCellSize = gameDimensions.cellSize / 2;

  const handleStart = () => {
    setIsDragging(true);
  };
  const handleDrag = () => {
    // console.log('dragging');
  };
  const handleStop: DraggableEventHandler = (e: DraggableEvent, data: DraggableData) => {
    const pieceRect = data.node.getBoundingClientRect();

    const gridX = Math.floor( (pieceOffsetX + pieceRect.left + halfCellSize - gameDimensions.gridLeft) / gameDimensions.cellSize );
    const gridY = Math.floor( (pieceOffsetY + pieceRect.top + halfCellSize - gameDimensions.gridTop) / gameDimensions.cellSize );
    const isInsideGrid = gridX >= 0 && gridX <=8 && gridY >=0 && gridY <= 8;
    // console.log(gridX, gridY);

    setIsDragging(false);

    onDragStop({ isInsideGrid, gridX, gridY });
  };

  return (
    // TODO control position (see example)
    <Draggable onStart={handleStart}
               onDrag={handleDrag}
               onStop={handleStop}>
      <div>
        <Piece x={pieceOffsetGridX} y={pieceOffsetGridY} isDragging={isDragging}/>
      </div>
    </Draggable>
  );
};

export default DraggablePiece;
