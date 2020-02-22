import React, { FunctionComponent } from 'react';
import styles from './Score.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';

const Score: FunctionComponent<any> = ({ value }) => {
  const gameDimensions = useGameDimensions();
  const headerHeight = gameDimensions.headerHeight;
  const cellSize = gameDimensions.cellSize;
  const containerInlineStyles = {
    height: `${headerHeight}px`,
  };
  const valueInlineStyles = {
    height: `${cellSize*2}px`,
    fontSize: `${cellSize}px`
  };

  return (
    <div className={styles.container} style={containerInlineStyles}>
      <div style={valueInlineStyles}>{value}</div>
    </div>
  );
};

export default Score;
