import React, { useState } from 'react';
import GameDimensionsProvider from './components/gameDimensionsProvider/GameDimensionsProvider';
import GameHeader from './components/gameHeader/GameHeader';
import Grid from './components/grid/Grid';
import DraggablePiece from './components/draggablePiece/DraggablePiece';
import { calculatePlaceable, pickRandomShape, PieceData } from './components/piece/Piece';

const initialShape = pickRandomShape();

let placeable:boolean[][] = calculatePlaceable(initialShape, []);

function App() {
  const [placedPieces, setPlacedPieces] = useState<PieceData[]>([]);
  const [hoverPiece, setHoverPiece] = useState<PieceData | null>();
  const [nextShape, setNextShape] = useState<string>(initialShape);

  const isPlaceable = (isInsideGrid:boolean, gridX:number, gridY:number): boolean => {
    return isInsideGrid && placeable[gridX][gridY];
  };

  const updateNextShape = (placedPieces:PieceData[]) => {
    const shape = pickRandomShape();
    setNextShape(shape);
    placeable = calculatePlaceable(shape, placedPieces);
  };

  const onPieceDrag = ({ isInsideGrid, gridX, gridY, shape }:any) => {
    if (isPlaceable(isInsideGrid, gridX, gridY)) {
      setHoverPiece({ gridX, gridY, shape });
    } else {
      setHoverPiece(null);
    }
  };
  const onPieceDragStop = ({ isInsideGrid, gridX, gridY, shape }:any) => {
    if (isPlaceable(isInsideGrid, gridX, gridY)) {
      const newPlacedPieces = [...placedPieces, { gridX, gridY, shape }];
      setPlacedPieces(newPlacedPieces);
      updateNextShape(newPlacedPieces);
    }
    setHoverPiece(null);
  };

  return (
    <GameDimensionsProvider>
      <div>
        <GameHeader/>
        <Grid placedPieces={placedPieces} hoverPiece={hoverPiece}/>
        <DraggablePiece shape={nextShape} onDrag={onPieceDrag} onDragStop={onPieceDragStop}/>
      </div>
    </GameDimensionsProvider>
  );
}

export default App;
