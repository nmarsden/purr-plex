import React from 'react';
import Logo from '../components/logo/Logo';
import ThemeProvider from "../components/themeProvider/ThemeProvider";
import GameDimensionsProvider from "../components/gameDimensionsProvider/GameDimensionsProvider";

export default {
  title: 'Logo',
  component: Logo,
};

export const Standard = () => (
  <GameDimensionsProvider>
    <ThemeProvider>
        <Logo/>
    </ThemeProvider>
  </GameDimensionsProvider>
);