import React from 'react';
import Piece, { shapeTypes } from '../components/piece/Piece';
import ThemeProvider from "../components/themeProvider/ThemeProvider";
import GameDimensionsProvider from "../components/gameDimensionsProvider/GameDimensionsProvider";

export default {
  title: 'Piece',
  component: Piece,
};

const pos = (idx:number): { x:number, y:number } => {
  const shapePerRow = 7;
  let x = 1 + Math.floor((idx % shapePerRow) * 4.5);
  let y = 1 + Math.floor(idx / shapePerRow) * 4;
  return {x, y};
};

export const Standard = () => (
  <GameDimensionsProvider>
    <ThemeProvider>
      {
        shapeTypes.map((shape, idx) => <Piece key={idx} x={pos(idx).x} y={pos(idx).y} shape={shape}/>)
      }
    </ThemeProvider>
  </GameDimensionsProvider>
);