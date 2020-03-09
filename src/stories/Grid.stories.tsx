import React from 'react';
import Grid from '../components/grid/Grid';
import ThemeProvider from "../components/themeProvider/ThemeProvider";
import GameDimensionsProvider from "../components/gameDimensionsProvider/GameDimensionsProvider";
import { PieceData } from '../components/piece/Piece';

export default {
  title: 'Grid',
  component: Grid,
};

const renderGrid = ({ placedPieces }:{ placedPieces:PieceData[] }) => (
  <GameDimensionsProvider>
    <ThemeProvider>
        <Grid placedPieces={placedPieces}/>
    </ThemeProvider>
  </GameDimensionsProvider>
);

export const Standard = () => renderGrid({ placedPieces: [] });
export const PlacedPieces = () => renderGrid({ placedPieces: [
    { gridX: 1, gridY: 0, shape: '4B_T_1' },
    { gridX: 0, gridY: 1, shape: '4B_I_2' },
    { gridX: 1, gridY: 2, shape: '3B_I_2' }
  ]});
