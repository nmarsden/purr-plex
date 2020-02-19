import React, { useState } from 'react';
import GameDimensionsProvider from './components/gameDimensionsProvider/GameDimensionsProvider';
import GameHeader from './components/gameHeader/GameHeader';
import Grid from './components/grid/Grid';
import DraggablePiece from './components/draggablePiece/DraggablePiece';
import { pickRandomShape, PieceData } from './components/piece/Piece';

function App() {
  const [placedPieces, setPlacedPieces] = useState<PieceData[]>([]);
  const [hoverPiece, setHoverPiece] = useState<PieceData | null>();
  const [nextShape, setNextShape] = useState<string>(pickRandomShape());

  const updateNextShape = () => {
    setNextShape(pickRandomShape());
  };

  const onPieceDrag = ({ isInsideGrid, gridX, gridY, shape }:any) => {
    if (isInsideGrid) {
      setHoverPiece({ gridX, gridY, shape });
    } else {
      setHoverPiece(null);
    }
  };
  const onPieceDragStop = ({ isInsideGrid, gridX, gridY, shape }:any) => {
    if (isInsideGrid) {
      setPlacedPieces([...placedPieces, { gridX, gridY, shape }]);
      updateNextShape();
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
