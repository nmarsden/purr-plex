import React, { createContext, useContext, useState, useEffect, FunctionComponent } from 'react'

const GameDimensionsCtx = createContext<any>(null);

function getWindowDimensions() {
  const { clientWidth: width, clientHeight: height } = window.document.documentElement;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const GameDimensionsProvider: FunctionComponent<any> = ({ children }) => {
  const { width, height } = useWindowDimensions();

  const gridSideMargin = width / 18;
  const gridTopMargin = height / 18;
  const gridBottomMargin = height / 3;

  const gridWidth =  width - (gridSideMargin * 2);
  const gridHeight =  height - (gridTopMargin + gridBottomMargin);

  const cellWidth = Math.floor( gridWidth / 9 );
  const cellHeight = Math.floor( gridHeight / 9 );

  const cellSize = Math.min( cellWidth, cellHeight );
  const gridSize = cellSize * 9;
  const headerHeight = Math.floor( (height - gridSize) * 0.4 );
  const footerHeight = Math.floor( (height - gridSize) * 0.6 );

  const gameDimensions = {
    cellSize,
    gridSize,
    headerHeight,
    footerHeight
  };

  return (
    <GameDimensionsCtx.Provider value={gameDimensions}>
      { children }
    </GameDimensionsCtx.Provider>
  )
};

export default GameDimensionsProvider;
export const useGameDimensions = () => useContext(GameDimensionsCtx);