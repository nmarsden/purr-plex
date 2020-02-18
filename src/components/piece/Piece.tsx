import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './Piece.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';

let cx = classNames.bind(styles);

const SHAPES = [
  '1B',
  '2B_I_1',
  '2B_I_2',
  '3B_I_1',
  '3B_I_2',
  '3B_L_1',
  '3B_L_2',
  '3B_L_3',
  '3B_L_4',
  '4B_O',
  '4B_L_1',
  '4B_L_2',
  '4B_L_3',
  '4B_L_4',
  '4B_J_1',
  '4B_J_2',
  '4B_J_3',
  '4B_J_4',
  '4B_Z_1',
  '4B_Z_2',
  '4B_S_1',
  '4B_S_2',
  '4B_T_1',
  '4B_T_2',
  '4B_T_3',
  '4B_T_4',
  '4B_I_1',
  '4B_I_2',
];

const Piece: FunctionComponent<any> = ({ x, y, shape, isDragging }) => {
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
    isDragging: isDragging,
    shape1B: shape === '1B',
    shape2BI1: shape === '2B_I_1'
  });

  return (
    <div style={inlineStyles}
         className={className}>
    </div>
  );
};

export default Piece;
export const pickRandomShape = () => { return SHAPES[Math.floor(Math.random() * 2)] };
