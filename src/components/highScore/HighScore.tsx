import React, { FunctionComponent } from 'react';
import styles from './HighScore.module.scss';
import { ReactComponent as CupSvg } from './cup.svg';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';

const HighScore: FunctionComponent<any> = ({ highScore }) => {
  const { windowWidth, gridTop, gridLeft, gridSize, cellSize } = useGameDimensions();
  const containerHeight = Math.floor(cellSize * 0.75);
  const containerTop = Math.floor(gridTop - containerHeight);
  const containerRight = Math.floor(windowWidth - (gridLeft + gridSize));
  const containerInlineStyles = {
    top: `${containerTop}px`,
    right: `${containerRight}px`,
    height: `${containerHeight}px`,
    width: `${gridSize}px`,
  };
  const cupSize = Math.floor(cellSize * 0.4);
  const cupInlineStyles = {
    height: `${cupSize}px`,
    width: `${cupSize}px`
  };
  const fontSize = Math.floor(cellSize * 0.5);
  const valueInlineStyles = {
    height: `${fontSize}px`,
    fontSize: `${fontSize}px`,
    lineHeight: `${fontSize}px`
  };

  return (
    <div className={styles.container} style={containerInlineStyles}>
      <CupSvg className={styles.cup} style={cupInlineStyles}>{highScore}</CupSvg>
      <div className={styles.highScore} style={valueInlineStyles}>{highScore}</div>
    </div>
  );
};

export default HighScore;
