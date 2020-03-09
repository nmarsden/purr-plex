import React from 'react';
import Block from '../components/block/Block';
import ThemeProvider from "../components/themeProvider/ThemeProvider";

export default {
  title: 'Block',
  component: Block,
};

const blockTypes = ['1a', '1b', '1c', '1d', '2a', '2b', '2c', '2d', '2e', '2f', '3a', '3b', '3c', '3d', '4a'];
const padding = 20;
const blockSize = 100;
const cellSize = blockSize + padding;
const cellsPerRow = 5;

const toGridPos = ( idx:number ) => {
  const gridX = padding + (Math.floor(idx % cellsPerRow) * cellSize);
  const gridY = padding + (Math.floor(idx / cellsPerRow) * cellSize);
  return { gridX, gridY };
};

const allBlocks = ( dynamicProps:any ) => (
  <ThemeProvider>
    {blockTypes.map((blockType, idx) => {
      const { gridX, gridY } = toGridPos(idx);
      return <Block x={gridX} y={gridY} size={blockSize} blockType={blockType} {...dynamicProps}/>
    })}
  </ThemeProvider>
);


export const Standard = () => allBlocks( {} );
export const Dragging = () => allBlocks( { "isDragging": true } );
export const Muted = () => allBlocks( { "isMuted": true } );
export const Completable = () => allBlocks( { "isCompletable": true } );
