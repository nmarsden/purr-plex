import React, { FunctionComponent } from 'react';
import styles from './ThemeButton.module.scss';
import { ReactComponent as PaletteSvg } from './palette.svg';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';

const ThemeButton: FunctionComponent<any> = ({ onClick }) => {
  const { windowWidth, gridTop, gridLeft, gridSize, cellSize } = useGameDimensions();
  const top = Math.floor(gridTop - cellSize * 2.2);
  const right = Math.floor(windowWidth - (gridLeft + gridSize));
  const size = Math.floor(cellSize * 0.8);
  const inlineStyles = {
    top: `${top}px`,
    right: `${right}px`,
    height: `${size}px`,
    width: `${size}px`
  };

  return (
		<PaletteSvg className={styles.palette} style={inlineStyles} onClick={onClick}> </PaletteSvg>
  );
};

export default ThemeButton;
