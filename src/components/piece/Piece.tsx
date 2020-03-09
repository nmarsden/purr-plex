import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './Piece.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';
import Block from '../block/Block';

type BlockType = '1a' | '1b' | '1c'| '1d' | '2a' | '2b' | '2c'| '2d'| '2e' | '2f' | '3a' | '3b' | '3c' | '3d' | '4a';

export const shapeTypes = ['1B',
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
  '4B_I_2'] as const;
type ShapeType = typeof shapeTypes[number];

interface BlockOffset {
  x: number,
  y: number
}

interface BlockData {
  offset:BlockOffset,
  type:BlockType
}

// SHAPES: each shape has an associated array of BlockOffset which is ordered by x ascending and then y ascending
const SHAPES:Map<string, Array<BlockData>> = new Map([
  ['1B',      [{offset:{x:0,y:0},type:'4a'}]],
  ['2B_I_1',  [{offset:{x:0,y:0},type:'3c'}, {offset:{x:1,y:0},type:'3a'}]],
  ['2B_I_2',  [{offset:{x:0,y:0},type:'3d'}, {offset:{x:0,y:1},type:'3b'}]],
  ['3B_I_1',  [{offset:{x:0,y:0},type:'3c'}, {offset:{x:1,y:0},type:'2e'}, {offset:{x:2,y:0},type:'3a'}]],
  ['3B_I_2',  [{offset:{x:0,y:0},type:'3d'}, {offset:{x:0,y:1},type:'2f'}, {offset:{x:0,y:2},type:'3b'}]],
  ['3B_L_1',  [{offset:{x:0,y:1},type:'3c'}, {offset:{x:1,y:0},type:'3d'}, {offset:{x:1,y:1},type:'2b'}]],
  ['3B_L_2',  [{offset:{x:0,y:0},type:'3c'}, {offset:{x:1,y:0},type:'2a'}, {offset:{x:1,y:1},type:'3b'}]],
  ['3B_L_3',  [{offset:{x:0,y:0},type:'2d'}, {offset:{x:0,y:1},type:'3b'}, {offset:{x:1,y:0},type:'3a'}]],
  ['3B_L_4',  [{offset:{x:0,y:0},type:'3d'}, {offset:{x:0,y:1},type:'2c'}, {offset:{x:1,y:1},type:'3a'}]],
  ['4B_O',    [{offset:{x:0,y:0},type:'2d'}, {offset:{x:0,y:1},type:'2c'}, {offset:{x:1,y:0},type:'2a'}, {offset:{x:1,y:1},type:'2b'}]],
  ['4B_L_1',  [{offset:{x:0,y:1},type:'3c'}, {offset:{x:1,y:1},type:'2e'}, {offset:{x:2,y:0},type:'3d'}, {offset:{x:2,y:1},type:'2b'}]],
  ['4B_L_2',  [{offset:{x:0,y:0},type:'3c'}, {offset:{x:1,y:0},type:'2a'}, {offset:{x:1,y:1},type:'2f'}, {offset:{x:1,y:2},type:'3b'}]],
  ['4B_L_3',  [{offset:{x:0,y:0},type:'2d'}, {offset:{x:0,y:1},type:'3b'}, {offset:{x:1,y:0},type:'2e'}, {offset:{x:2,y:0},type:'3a'}]],
  ['4B_L_4',  [{offset:{x:0,y:0},type:'3d'}, {offset:{x:0,y:1},type:'2f'}, {offset:{x:0,y:2},type:'2c'}, {offset:{x:1,y:2},type:'3a'}]],
  ['4B_J_1',  [{offset:{x:0,y:0},type:'3c'}, {offset:{x:1,y:0},type:'2e'}, {offset:{x:2,y:0},type:'2a'}, {offset:{x:2,y:1},type:'3b'}]],
  ['4B_J_2',  [{offset:{x:0,y:2},type:'3c'}, {offset:{x:1,y:0},type:'3d'}, {offset:{x:1,y:1},type:'2f'}, {offset:{x:1,y:2},type:'2b'}]],
  ['4B_J_3',  [{offset:{x:0,y:0},type:'3d'}, {offset:{x:0,y:1},type:'2c'}, {offset:{x:1,y:1},type:'2e'}, {offset:{x:2,y:1},type:'3a'}]],
  ['4B_J_4',  [{offset:{x:0,y:0},type:'2d'}, {offset:{x:0,y:1},type:'2f'}, {offset:{x:0,y:2},type:'3b'}, {offset:{x:1,y:0},type:'3a'}]],
  ['4B_Z_1',  [{offset:{x:0,y:1},type:'2d'}, {offset:{x:0,y:2},type:'3b'}, {offset:{x:1,y:0},type:'3d'}, {offset:{x:1,y:1},type:'2b'}]],
  ['4B_Z_2',  [{offset:{x:0,y:0},type:'3c'}, {offset:{x:1,y:0},type:'2a'}, {offset:{x:1,y:1},type:'2c'}, {offset:{x:2,y:1},type:'3a'}]],
  ['4B_S_1',  [{offset:{x:0,y:0},type:'3d'}, {offset:{x:0,y:1},type:'2c'}, {offset:{x:1,y:1},type:'2a'}, {offset:{x:1,y:2},type:'3b'}]],
  ['4B_S_2',  [{offset:{x:0,y:1},type:'3c'}, {offset:{x:1,y:0},type:'2d'}, {offset:{x:1,y:1},type:'2b'}, {offset:{x:2,y:0},type:'3a'}]],
  ['4B_T_1',  [{offset:{x:0,y:1},type:'3c'}, {offset:{x:1,y:0},type:'3d'}, {offset:{x:1,y:1},type:'1c'}, {offset:{x:2,y:1},type:'3a'}]],
  ['4B_T_2',  [{offset:{x:0,y:1},type:'3c'}, {offset:{x:1,y:0},type:'3d'}, {offset:{x:1,y:1},type:'1b'}, {offset:{x:1,y:2},type:'3b'}]],
  ['4B_T_3',  [{offset:{x:0,y:0},type:'3c'}, {offset:{x:1,y:0},type:'1a'}, {offset:{x:1,y:1},type:'3b'}, {offset:{x:2,y:0},type:'3a'}]],
  ['4B_T_4',  [{offset:{x:0,y:0},type:'3d'}, {offset:{x:0,y:1},type:'1d'}, {offset:{x:0,y:2},type:'3b'}, {offset:{x:1,y:1},type:'3a'}]],
  ['4B_I_1',  [{offset:{x:0,y:0},type:'3c'}, {offset:{x:1,y:0},type:'2e'}, {offset:{x:2,y:0},type:'2e'}, {offset:{x:3,y:0},type:'3a'}]],
  ['4B_I_2',  [{offset:{x:0,y:0},type:'3d'}, {offset:{x:0,y:1},type:'2f'}, {offset:{x:0,y:2},type:'2f'}, {offset:{x:0,y:3},type:'3b'}]],
]);

const shapeToBlocks = (x:number, y:number, size:number, shape:string, isPreDragging:boolean, isDragging:boolean, isMuted:boolean, isCompletable:boolean) => {
  const blockData:BlockData[] = SHAPES.get(shape) || [];
  return blockData.map( (b, i) =>
    <Block key={i}
           x={x+(b.offset.x * size)}
           y={y+(b.offset.y * size)}
           size={size}
           blockType={isDragging ? '4a' : b.type}
           isPreDragging={isPreDragging}
           isDragging={isDragging}
           isMuted={isMuted}
           isCompletable={isCompletable}
    />);
};

export const shapeToGridPositions = (gridX:number, gridY:number, shape:string):Array<GridPos> => {
  const blockData:BlockData[] = SHAPES.get(shape) || [];
  return blockData.map(b => { return { x: gridX + b.offset.x, y: gridY + b.offset.y } });
};

const getGridPositions3x3 = (gridPos:GridPos):GridPos[] => {
  const gridPositions:GridPos[] = [];
  const leftGridPos3x3 = Math.floor(gridPos.x / 3) * 3;
  const topGridPos3x3 = Math.floor(gridPos.y / 3) * 3;
  for (let xOffset=0; xOffset<3; xOffset++) {
    for (let yOffset=0; yOffset<3; yOffset++) {
      gridPositions.push({ x:leftGridPos3x3 + xOffset, y: topGridPos3x3 + yOffset });
    }
  }
  return gridPositions;
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

const Piece: FunctionComponent<any> = ({ x, y, shape, isDraggable, isPreDragging, isDragging, isMuted, isCompletable, isCompleted }) => {
  const gameDimensions = useGameDimensions();
  const cellSize = gameDimensions.cellSize;
  const blockSize = (isDraggable && !isDragging) ? Math.floor(cellSize/2) : cellSize;
  const blocks = shapeToBlocks(cellSize * x, cellSize * y, blockSize, shape, isPreDragging, isDragging, isMuted, isCompletable);

  const shapeDims = shapeDimensions(shape, cellSize);
  let inlineStyles = {
    width: `${shapeDims.width}px`,
    height: `${shapeDims.height}px`
  };
  let containerClassName = cx({
    container: true,
    isCompleted: isCompleted
  });
  let pieceClassName = cx({
    piece: true,
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

// FOR TESTING (replace above code with this)
// export const pickRandomShape = ():string => { return '3B_I_1' };

export const shapeDimensions = (shape:string, blockSize:number) => {
  const blockData:BlockData[] = SHAPES.get(shape) || [];
  const blockOffsets:BlockOffset[] = blockData.map(b => b.offset);

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

export interface Placeable {
  gridFlags:boolean[][],
  isAnyPos:boolean
}

export const calculatePlaceable = (shape:string, placedPieces:PieceData[]):Placeable => {
  const occupied:boolean[][] = calculateOccupied(placedPieces);
  let gridFlags:boolean[][] = initMultiDim(false);
  let isAnyPos = false;

  for (let gridX=0; gridX<9; gridX++) {
    for (let gridY=0; gridY<9; gridY++) {

      let isPlaceable = true;
      shapeToGridPositions(gridX, gridY, shape).forEach(gridPos => {
        isPlaceable = isPlaceable && gridPos.x < 9 && gridPos.y < 9 && !occupied[gridPos.x][gridPos.y];
      });
      gridFlags[gridX][gridY] = isPlaceable;
      if (isPlaceable) {
        isAnyPos = true;
      }
    }
  }
  return { gridFlags, isAnyPos };
};

export interface CalcCompletedResult {
  completedGridPositions:GridPos[],
  completedRegionCount:number,
  completedRegionCenter:GridPos,
  placedBlocksKeptCount:number
}

export const calcCompleted = (newPlacedPiece:PieceData, placedPieces: PieceData[]): CalcCompletedResult => {

  const completedGridPositions:GridPos[] = [];
  const indices:number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const occupied:boolean[][] = calculateOccupied([...placedPieces, newPlacedPiece]);
  const completedColumnIndex:number[] = [];
  const completedRowIndex:number[] = [];
  const completed3x3Index:number[] = [];
  let completedRegionCount = 0;
  const placedPieceGridPositions:GridPos[] = shapeToGridPositions(newPlacedPiece.gridX, newPlacedPiece.gridY, newPlacedPiece.shape);

  const calcCompletedRegionCenter = (completedGridPositions:GridPos[]):GridPos => {
    const xPositions = completedGridPositions.map(p => p.x);
    const yPositions = completedGridPositions.map(p => p.y);
    const minX = Math.min(...xPositions);
    const maxX = Math.max(...xPositions);
    const minY = Math.min(...yPositions);
    const maxY = Math.max(...yPositions);

    return { x: Math.floor(minX + (maxX - minX)/2), y: Math.floor(minY + (maxY - minY)/2) };
  };

  const getIndex3x3 = (topLeftGridPos:GridPos):number => {
    const row3x3 = Math.floor((topLeftGridPos.y + 1) / 3);
    const col3x3 = Math.floor((topLeftGridPos.x + 1) / 3);
    return (3 * col3x3) + row3x3;
  };

  placedPieceGridPositions.forEach(gridPos => {
    // Check for completed column
    if (!completedColumnIndex.includes(gridPos.x) && occupied[gridPos.x].every(o => o)) {
      const completedColumn:GridPos[] = indices.map(i => { return { x:gridPos.x, y:i }; });
      completedGridPositions.push(...completedColumn);
      completedRegionCount++;
      completedColumnIndex.push(gridPos.x);
    }
    // Check for completed row
    if (!completedRowIndex.includes(gridPos.y) && indices.every(i => occupied[i][gridPos.y])) {
      const completedRow:GridPos[] = indices.map(i => { return { x:i, y:gridPos.y }; });
      completedGridPositions.push(...completedRow);
      completedRegionCount++;
      completedRowIndex.push(gridPos.y);
    }
    // Check for completed 3x3
    const gridPositions3x3 = getGridPositions3x3(gridPos);
    const index3x3 = getIndex3x3(gridPositions3x3[0]);
    if (!completed3x3Index.includes(index3x3) && gridPositions3x3.every(({x, y}) => occupied[x][y])) {
      completedGridPositions.push(...gridPositions3x3);
      completedRegionCount++;
      completed3x3Index.push(index3x3);
    }
  });

  // Calc placedBlocksKeptCount
  const placedBlocksKept:GridPos[] = placedPieceGridPositions.filter(gridPos => !completedGridPositions.some(c => c.x === gridPos.x && c.y === gridPos.y));
  const placedBlocksKeptCount = placedBlocksKept.length;

  // Calc completedRegionCenter
  const completedRegionCenter = calcCompletedRegionCenter(completedGridPositions);

  return {
    completedGridPositions,
    completedRegionCount,
    completedRegionCenter,
    placedBlocksKeptCount
  };
};

const toBlockOffsets = (gridX: number, gridY: number, gridPositions: BlockOffset[]) => {
  return gridPositions.map(pos => { return { x: (pos.x - gridX), y: (pos.y - gridY) } });
};

const hasNeighbours = (blockOffsets:BlockOffset[], index:number):boolean => {
  const target = blockOffsets[index];
  return blockOffsets.some((offset) => (offset.x === target.x && offset.y === target.y+1) ||
                                       (offset.x === target.x && offset.y === target.y-1) ||
                                       (offset.y === target.y && offset.x === target.x+1) ||
                                       (offset.y === target.y && offset.x === target.x-1));
};

const removeCompletedBlockOffsets = (pieceBlockOffsets: BlockOffset[], completedBlockOffsets:BlockOffset[]):BlockOffset[] => {
  return pieceBlockOffsets.filter(blockOffset => !completedBlockOffsets.some(c => c.x === blockOffset.x && c.y === blockOffset.y));
};

const groupBlockOffsetsByNeighbours = (blockOffsets:BlockOffset[]):BlockOffset[][] => {
  const result:BlockOffset[][] = [];
  // Any blockOffset without neighbours is its own group
  // Note: This strategy takes advantage of knowing that we are dealing with at most 3 block offsets, so there will be
  // at most only be one group of blocks with neighbours, and any other groups will be single blocks without neighbours.
  const blockOffsetsWithNeighbours:BlockOffset[] = [];
  for (let i=0; i<blockOffsets.length; i++) {
    if (hasNeighbours(blockOffsets, i)) {
      blockOffsetsWithNeighbours.push(blockOffsets[i]);
    } else {
      result.push([blockOffsets[i]])
    }
  }
  if (blockOffsetsWithNeighbours.length > 0) {
    result.push(blockOffsetsWithNeighbours);
  }
  return result;
};

const isEqual = (blockOffsets1: BlockOffset[], blockOffsets2: BlockOffset[]): boolean => {
  return (blockOffsets1.length === blockOffsets2.length) &&
         blockOffsets1.every((o, i) => (o.x === blockOffsets2[i].x) && (o.y === blockOffsets2[i].y));
};

const copyBlockOffsets = (blockOffsets:BlockOffset[]):BlockOffset[] => {
  return blockOffsets.map(o => { return { x:o.x, y:o.y } });
};

const compareXThenY = (o1:BlockOffset, o2:BlockOffset):number => {
  if (o1.x < o2.x) {
    return -1;
  }
  if (o1.x > o2.x) {
    return 1;
  }
  // o1.x equals o2.x
  if (o1.y < o2.y) {
    return -1;
  }
  return 0;
};

const sortBlockOffsets = (blockOffsets:BlockOffset[]):BlockOffset[] => {
  return copyBlockOffsets(blockOffsets).sort(compareXThenY);
};

const findShape = (blockOffsets: BlockOffset[]):string => {
  const sortedBlockOffsets:BlockOffset[] = sortBlockOffsets(blockOffsets);

  for(let shape of Array.from( SHAPES.keys()) ) {
    const blockData:BlockData[] = SHAPES.get(shape) || [];
    const blockOffsets:BlockOffset[] = blockData.map(b => b.offset);

    if (isEqual(sortedBlockOffsets, blockOffsets)) {
      return shape;
    }
  }
  return 'UNKNOWN';
};

const createPiece = (gridX:number, gridY:number, blockOffsets:BlockOffset[]):PieceData => {
  const minX = Math.min(...blockOffsets.map(o => o.x));
  const minY = Math.min(...blockOffsets.map(o => o.y));
  const newPiece:PieceData = {
    gridX: gridX + minX,
    gridY: gridY + minY,
    shape: findShape(blockOffsets.map(o => { return { x: o.x - minX, y: o.y - minY } }))
  };
  return newPiece;
};

const calcSmallerPieces = (placedPiece: PieceData, completedGridPositions: GridPos[]):PieceData[] => {
  const smallerPieces:PieceData[] = [];
  const blockData:BlockData[] = SHAPES.get(placedPiece.shape) || [];
  const pieceBlockOffsets:BlockOffset[] = blockData.map(b => b.offset);

  const completedBlockOffsets:BlockOffset[] = toBlockOffsets(placedPiece.gridX, placedPiece.gridY, completedGridPositions);
  const remainingBlockOffsets:BlockOffset[] = removeCompletedBlockOffsets(pieceBlockOffsets, completedBlockOffsets);
  const groupedBlockOffsets:BlockOffset[][] = groupBlockOffsetsByNeighbours(remainingBlockOffsets);
  groupedBlockOffsets.forEach(blockOffsets => {
    const newPiece:PieceData = createPiece(placedPiece.gridX, placedPiece.gridY, blockOffsets);
    smallerPieces.push(newPiece);
  });

  return smallerPieces;
};

export const removeCompleted = (newPlacedPiece: PieceData, placedPieces: PieceData[], completed:GridPos[]):PieceData[] => {
  const newPlacedPieces:PieceData[] = [];

  [...placedPieces, newPlacedPiece].forEach(placedPiece => {
    const gridPositions:GridPos[] = shapeToGridPositions(placedPiece.gridX, placedPiece.gridY, placedPiece.shape);
    const completedGridPositions = gridPositions.filter(gridPos => completed.some(c => c.x === gridPos.x && c.y === gridPos.y));

    if (completedGridPositions.length === 0) {
      // keep piece as is
      newPlacedPieces.push(placedPiece);
    } else if (completedGridPositions.length !== gridPositions.length) {
      // keep piece as one or more smaller pieces
      const smallerPieces:PieceData[] = calcSmallerPieces(placedPiece, completedGridPositions);
      newPlacedPieces.push(...smallerPieces);
    }
  });
  return newPlacedPieces;
};
