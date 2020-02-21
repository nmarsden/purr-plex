import React, { useState } from 'react';
import GameDimensionsProvider from './components/gameDimensionsProvider/GameDimensionsProvider';
import GameHeader from './components/gameHeader/GameHeader';
import Grid from './components/grid/Grid';
import DraggablePiece from './components/draggablePiece/DraggablePiece';
import {
  calculatePlaceable,
  getCompletedGridPositions,
  pickRandomShape,
  PieceData,
  removeCompleted,
} from './components/piece/Piece';

const initialShape = pickRandomShape();
const initialPlacedPieces:PieceData[] = [];

// FOR TESTING (replace above code with this)
// const initialShape = '3B_I_1';
// const initialPlacedPieces:PieceData[] = [
//   { gridX: 2, gridY: 1, shape: '2B_I_2' },
//   { gridX: 2, gridY: 3, shape: '3B_I_2' },
//   { gridX: 2, gridY: 6, shape: '3B_I_2' }
// ];

let placeable:boolean[][] = calculatePlaceable(initialShape, []);

function App() {
  const [placedPieces, setPlacedPieces] = useState<PieceData[]>(initialPlacedPieces);
  const [hoverPiece, setHoverPiece] = useState<PieceData | null>();
  const [completedBlocks, setCompletedBlocks] = useState<PieceData[]>([]);
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
      const placedPiece = { gridX, gridY, shape };
      let newPlacedPieces = [...placedPieces, placedPiece];

      const completedGridPositions = getCompletedGridPositions(placedPiece, newPlacedPieces);
      if (completedGridPositions.length > 0) {
        // TODO have removeCompleted also return completedPieces instead of using a '1B' for each completedGridPositions
        newPlacedPieces = removeCompleted(newPlacedPieces, completedGridPositions);
        setCompletedBlocks(completedGridPositions.map(p => { return { gridX:p.x, gridY:p.y, shape:'1B' }}));
        window.setTimeout(() => { setCompletedBlocks([])}, 500);
      }

      setPlacedPieces(newPlacedPieces);
      updateNextShape(newPlacedPieces);
    }
    setHoverPiece(null);
  };

  return (
    <GameDimensionsProvider>
      <div>
        <GameHeader/>
        <Grid placedPieces={placedPieces} hoverPiece={hoverPiece} completedBlocks={completedBlocks}/>
        <DraggablePiece shape={nextShape} onDrag={onPieceDrag} onDragStop={onPieceDragStop}/>
      </div>
    </GameDimensionsProvider>
  );
}

export default App;
