import React, { FunctionComponent } from 'react';
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
  return blockOffsets.map(o => <Block x={x+(o.x * size)} y={y+(o.y * size)} size={size} isDragging={isDragging}/>);
};

const Piece: FunctionComponent<any> = ({ x, y, shape, isDragging }) => {
  const gameDimensions = useGameDimensions();
  const cellSize = gameDimensions.cellSize;
  const blocks = shapeToBlocks(cellSize * x, cellSize * y, cellSize, shape, isDragging);

  return (
		<div>
      {blocks}
		</div>
);
};

export default Piece;
export const pickRandomShape = ():string => { return Array.from(SHAPES.keys())[Math.floor(Math.random() * SHAPES.size)] };
