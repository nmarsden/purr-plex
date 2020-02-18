import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './Piece.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';

let cx = classNames.bind(styles);

const Piece: FunctionComponent<any> = ({ x, y, isDragging }) => {
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

  let className = cx({
    piece: true,
    isDragging: isDragging
  });

  return (
    <div style={inlineStyles}
         className={className}>
    </div>
  );
};

export default Piece;
