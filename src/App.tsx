import React from 'react';
import GameDimensionsProvider from './components/gameDimensionsProvider/GameDimensionsProvider';
import GameHeader from './components/gameHeader/GameHeader';
import Grid from './components/grid/Grid';
import Piece from './components/piece/Piece';

function App() {
  return (
    <GameDimensionsProvider>
      <div>
        <GameHeader />
        <Grid>
          <Piece x={2} y={3} />
          <Piece x={6} y={1} />
          <Piece x={5} y={5} />
        </Grid>
      </div>
    </GameDimensionsProvider>
  );
}

export default App;
