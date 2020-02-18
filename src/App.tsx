import React, { useState } from 'react';
import GameDimensionsProvider from './components/gameDimensionsProvider/GameDimensionsProvider';
import GameHeader from './components/gameHeader/GameHeader';
import Grid from './components/grid/Grid';
import DraggablePiece from './components/draggablePiece/DraggablePiece';
import Piece, { pickRandomShape } from './components/piece/Piece';

interface PieceData {
  gridX: number,
  gridY: number,
  shape: string
}

function App() {
  const [pieces, setPieces] = useState<PieceData[]>([]);
  const [nextShape, setNextShape] = useState<string>('1B');

  const updateNextShape = () => {
    setNextShape(pickRandomShape());
  };

  const onPieceDragStop = ({ isInsideGrid, gridX, gridY, shape }:any) => {
    if (isInsideGrid) {
      setPieces([...pieces, { gridX, gridY, shape }]);
      updateNextShape();
    }
  };

  return (
    <GameDimensionsProvider>
      <div>
        <GameHeader/>
        <Grid>
          {pieces.map( (p, i) => <Piece key={i} x={p.gridX} y={p.gridY} shape={p.shape}/>)}
        </Grid>
        <DraggablePiece shape={nextShape} onDragStop={onPieceDragStop}/>
      </div>
    </GameDimensionsProvider>
  );
}

export default App;
