import React, { useState } from 'react';
import GameDimensionsProvider from './components/gameDimensionsProvider/GameDimensionsProvider';
import GameHeader from './components/gameHeader/GameHeader';
import Grid from './components/grid/Grid';
import DraggablePiece from './components/draggablePiece/DraggablePiece';
import Piece from './components/piece/Piece';

interface PieceData {
  gridX: number,
  gridY: number
}

function App() {
  const [pieces, setPieces] = useState<PieceData[]>([]);

  const onPieceDragStop = ({ isInsideGrid, gridX, gridY }:any) => {
    if (isInsideGrid) {
      setPieces([...pieces, { gridX, gridY }]);
    }
  };

  return (
    <GameDimensionsProvider>
      <div>
        <GameHeader/>
        <Grid>
          {pieces.map( (p, i) => <Piece key={i} x={p.gridX} y={p.gridY} />)}
        </Grid>
        <DraggablePiece onDragStop={onPieceDragStop}/>
      </div>
    </GameDimensionsProvider>
  );
}

export default App;
