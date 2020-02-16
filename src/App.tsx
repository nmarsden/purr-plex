import React from 'react';
import Grid from './components/grid/Grid';
import GameDimensionsProvider from './components/gameDimensionsProvider/GameDimensionsProvider';
import GameHeader from './components/gameHeader/GameHeader';

function App() {
  return (
    <GameDimensionsProvider>
      <div>
        <GameHeader />
        <Grid />
      </div>
    </GameDimensionsProvider>
  );
}

export default App;
