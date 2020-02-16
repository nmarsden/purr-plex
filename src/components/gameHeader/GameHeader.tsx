import React from 'react';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';

function GameHeader() {
  const gameDimensions = useGameDimensions();
  const headerHeight = gameDimensions.headerHeight;
  const inlineStyles = {
    height: `${headerHeight}px`
  };

  return (
    <div style={inlineStyles}></div>
  );
}

export default GameHeader;
