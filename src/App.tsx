import React, { useState } from 'react';
import GameDimensionsProvider from './components/gameDimensionsProvider/GameDimensionsProvider';
import GameHeader from './components/gameHeader/GameHeader';
import Grid from './components/grid/Grid';
import DraggablePiece from './components/draggablePiece/DraggablePiece';
import Piece from './components/piece/Piece';

function App() {
  interface PieceData {
    x: number,
    y: number
  }

  const [pieces, setPieces] = useState<PieceData[]>([]);

  const onPieceDragStop = ({ isInsideGrid, gridX, gridY }:any) => {
    if (isInsideGrid) {
      setPieces([...pieces, { x:gridX, y:gridY }]);
    }
  };

  return (
    <GameDimensionsProvider>
      <div>
        <GameHeader/>
        <Grid>
          {pieces.map( (p, i) => <Piece key={i} x={p.x} y={p.y} />)}
          <DraggablePiece onDragStop={onPieceDragStop}/>
        </Grid>
      </div>
    </GameDimensionsProvider>
  );
}

export default App;
