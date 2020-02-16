import React, { FunctionComponent } from 'react';
import styles from './Piece.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';

const Piece: FunctionComponent<any> = ({ x, y }) => {
  const gameDimensions = useGameDimensions();
  const cellSize = gameDimensions.cellSize;
  const posX = cellSize * x;
  const posY = cellSize * y;
  const inlineStyles = {
    width: `${cellSize}px`,
    height: `${cellSize}px`,
    left: `${posX}px`,
    top: `${posY}px`,
  };

  return (
    <div style={inlineStyles}
         className={styles.piece}>
    </div>
  );
};

export default Piece;
