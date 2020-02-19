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

const shapeToBlocks = (x:number, y:number, size:number, shape:string, isDragging:boolean, isMuted:boolean) => {
  const blockOffsets:Array<BlockOffset> = SHAPES.get(shape) || [];
  return blockOffsets.map( (o, i) =>
    <Block key={i}
           x={x+(o.x * size)}
           y={y+(o.y * size)}
           size={size}
           isDragging={isDragging}
           isMuted={isMuted}
    />);
};

const shapeToGridPositions = (gridX:number, gridY:number, shape:string):Array<GridPos> => {
  const blockOffsets:Array<BlockOffset> = SHAPES.get(shape) || [];
  return blockOffsets.map(o => { return { x: gridX + o.x, y: gridY + o.y } });
};

const initMultiDim = (value:boolean):boolean[][] => {
  let multiDim = [];
  for (let gridX=0; gridX<9; gridX++) {
    let arr:boolean[] = [];
    multiDim.push(arr);
    for (let gridY=0; gridY<9; gridY++) {
      arr.push(value);
    }
  }
  return multiDim;
};

const calculateOccupied = (placedPieces:PieceData[]):boolean[][] => {
  let occupied = initMultiDim(false);
  placedPieces.forEach(pp => {
    shapeToGridPositions(pp.gridX, pp.gridY, pp.shape).forEach(gridPos => {
      occupied[gridPos.x][gridPos.y] = true;
    })
  });
  return occupied;
};

let cx = classNames.bind(styles);

const Piece: FunctionComponent<any> = ({ x, y, shape, isDraggable, isDragging, isMuted }) => {
  const gameDimensions = useGameDimensions();
  const cellSize = gameDimensions.cellSize;
  const blocks = shapeToBlocks(cellSize * x, cellSize * y, cellSize, shape, isDragging, isMuted);

  const shapeDims = shapeDimensions(shape, cellSize);
  let inlineStyles = {
    width: `${shapeDims.width}px`,
    height: `${shapeDims.height}px`
  };
  let containerClassName = cx({
    container: true
  });
  let pieceClassName = cx({
    piece: true,
    isDraggable: isDraggable,
    isDragging: isDragging,
  });

  return (
    <div style={inlineStyles} className={containerClassName}>
      <div style={inlineStyles} className={pieceClassName}>
        {blocks}
      </div>
    </div>
);
};

export default Piece;

export interface GridPos {
  x: number,
  y: number
}

export interface PieceData {
  gridX: number,
  gridY: number,
  shape: string
}

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

export const calculatePlaceable = (shape:string, placedPieces:PieceData[]):boolean[][] => {
  const occupied:boolean[][] = calculateOccupied(placedPieces);
  let placeable:boolean[][] = initMultiDim(false);

  for (let gridX=0; gridX<9; gridX++) {
    for (let gridY=0; gridY<9; gridY++) {

      let isPlaceable = true;
      shapeToGridPositions(gridX, gridY, shape).forEach(gridPos => {
        isPlaceable = isPlaceable && gridPos.x < 9 && gridPos.y < 9 && !occupied[gridPos.x][gridPos.y];
      });
      placeable[gridX][gridY] = isPlaceable;
    }
  }
  return placeable;
};
