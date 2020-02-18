import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './Piece.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';
import Block from '../block/Block';

interface BlockOffset {
  x: number,
  y: number
}
const SHAPES:Map<string, Array<BlockOffset>> = new Map([
  ['1B',      [{x:0,y:0}]],
  ['2B_I_1',  [{x:0,y:0}, {x:1,y:0}]],
  ['2B_I_2',  [{x:0,y:0}, {x:0,y:1}]],
  ['3B_I_1',  [{x:0,y:0}, {x:1,y:0}, {x:2,y:0}]],
  ['3B_I_2',  [{x:0,y:0}, {x:0,y:1}, {x:0,y:2}]],
  ['3B_L_1',  [{x:1,y:0}, {x:1,y:1}, {x:0,y:1}]],
  ['3B_L_2',  [{x:0,y:0}, {x:1,y:0}, {x:1,y:1}]],
  ['3B_L_3',  [{x:0,y:0}, {x:1,y:0}, {x:0,y:1}]],
  ['3B_L_4',  [{x:0,y:0}, {x:0,y:1}, {x:1,y:1}]],
  ['4B_O',    [{x:0,y:0}, {x:1,y:0}, {x:1,y:1}, {x:0,y:1}]],
  ['4B_L_1',  [{x:0,y:1}, {x:1,y:1}, {x:2,y:1}, {x:2,y:0}]],
  ['4B_L_2',  [{x:0,y:0}, {x:1,y:0}, {x:1,y:1}, {x:1,y:2}]],
  ['4B_L_3',  [{x:0,y:1}, {x:0,y:0}, {x:1,y:0}, {x:2,y:0}]],
  ['4B_L_4',  [{x:0,y:0}, {x:0,y:1}, {x:0,y:2}, {x:1,y:2}]],
  ['4B_J_1',  [{x:0,y:0}, {x:1,y:0}, {x:2,y:0}, {x:2,y:1}]],
  ['4B_J_2',  [{x:0,y:2}, {x:1,y:2}, {x:1,y:1}, {x:1,y:0}]],
  ['4B_J_3',  [{x:0,y:0}, {x:0,y:1}, {x:1,y:1}, {x:2,y:1}]],
  ['4B_J_4',  [{x:0,y:2}, {x:0,y:1}, {x:0,y:0}, {x:1,y:0}]],
  ['4B_Z_1',  [{x:0,y:2}, {x:0,y:1}, {x:1,y:1}, {x:1,y:0}]],
  ['4B_Z_2',  [{x:0,y:0}, {x:1,y:0}, {x:1,y:1}, {x:2,y:1}]],
  ['4B_S_1',  [{x:0,y:0}, {x:0,y:1}, {x:1,y:1}, {x:1,y:2}]],
  ['4B_S_2',  [{x:0,y:1}, {x:1,y:1}, {x:1,y:0}, {x:2,y:0}]],
  ['4B_T_1',  [{x:0,y:1}, {x:1,y:1}, {x:1,y:2}, {x:1,y:0}]],
  ['4B_T_2',  [{x:0,y:1}, {x:1,y:0}, {x:1,y:1}, {x:1,y:2}]],
  ['4B_T_3',  [{x:0,y:0}, {x:1,y:0}, {x:2,y:0}, {x:1,y:1}]],
  ['4B_T_4',  [{x:0,y:0}, {x:0,y:1}, {x:0,y:2}, {x:1,y:1}]],
  ['4B_I_1',  [{x:0,y:0}, {x:1,y:0}, {x:2,y:0}, {x:3,y:0}]],
  ['4B_I_2',  [{x:0,y:0}, {x:0,y:1}, {x:0,y:2}, {x:0,y:3}]],
]);

const shapeToBlocks = (x:number, y:number, size:number, shape:string, isDragging:boolean) => {
  const blockOffsets:Array<BlockOffset> = SHAPES.get(shape) || [];
  return blockOffsets.map( (o, i) => <Block key={i} x={x+(o.x * size)} y={y+(o.y * size)} size={size} isDragging={isDragging}/>);
};

let cx = classNames.bind(styles);

const Piece: FunctionComponent<any> = ({ x, y, shape, isDraggable, isDragging }) => {
  const gameDimensions = useGameDimensions();
  const cellSize = gameDimensions.cellSize;
  const blocks = shapeToBlocks(cellSize * x, cellSize * y, cellSize, shape, isDragging);

  const shapeDims = shapeDimensions(shape, cellSize);
  let inlineStyles = {
    width: `${shapeDims.width}px`,
    height: `${shapeDims.height}px`
  };
  let className = cx({
    piece: true,
    isDraggable: isDraggable,
    isDragging: isDragging,
  });

  return (
		<div style={inlineStyles} className={className}>
      {blocks}
		</div>
);
};

export default Piece;

export const pickRandomShape = ():string => { return Array.from(SHAPES.keys())[Math.floor(Math.random() * SHAPES.size)] };

export const shapeDimensions = (shape:string, blockSize:number) => {
  const blockOffsets:Array<BlockOffset> = SHAPES.get(shape) || [];
  let minX = blockOffsets[0].x;
  let minY = blockOffsets[0].y;
  let maxX = blockOffsets[0].x;
  let maxY = blockOffsets[0].y;

  for (let i = 1, len=blockOffsets.length; i < len; i++) {
    let x = blockOffsets[i].x;
    let y = blockOffsets[i].y;
    minX = (x < minX) ? x : minX;
    minY = (y < minY) ? y : minY;
    maxX = (x > maxX) ? x : maxX;
    maxY = (y > maxY) ? y : maxY;
  }
  const width = (maxX - minX + 1) * blockSize;
  const height = (maxY - minY + 1) * blockSize;
  return { width, height };
};
