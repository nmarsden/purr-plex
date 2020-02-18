import React from 'react';
import styles from './GameHeader.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';

function GameHeader() {
  const gameDimensions = useGameDimensions();
  const headerHeight = gameDimensions.headerHeight;
  const inlineStyles = {
    height: `${headerHeight}px`
  };

  return (
    <div className={styles.header} style={inlineStyles}></div>
  );
}

export default GameHeader;
