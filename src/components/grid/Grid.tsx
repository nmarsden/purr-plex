import React, { FunctionComponent, ReactNode } from 'react';
import styles from './Grid.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';
import Piece, { PieceData } from '../piece/Piece';

const Grid: FunctionComponent<any> = ({ placedPieces, hoverPiece }) => {
  const cellTypes = [
    'OOOXXXOOO',
    'OOOXXXOOO',
    'OOOXXXOOO',
    'XXXOOOXXX',
    'XXXOOOXXX',
    'XXXOOOXXX',
    'OOOXXXOOO',
    'OOOXXXOOO',
    'OOOXXXOOO'
  ];
  const gameDimensions = useGameDimensions();
  const cellSize = gameDimensions.cellSize;
  const gridInlineStyles = {
    left: `${gameDimensions.gridLeft}px`,
    top: `${gameDimensions.gridTop}px`
  };
  const cellInlineStyles = {
    width: `${cellSize}px`,
    height: `${cellSize}px`
  };

  const rows = cellTypes.map( (cellType, rowIndex) => {
    const cells: Array<ReactNode> = [];
    cellType.split('').forEach( (ch, colIndex) =>  {
      cells.push(<div key={colIndex}
                      style={cellInlineStyles}
                      className={ch === 'O' ? styles.cell : styles.shadedCell}>
                 </div>)
    });
    return <div key={rowIndex} className={styles.row}>{cells}</div>;
  } );

  return (
    <div style={gridInlineStyles}
         className={styles.grid}>
      {rows}
      {placedPieces.map( (p:PieceData, i:number) => <Piece key={i} x={p.gridX} y={p.gridY} shape={p.shape}/>)}
      {hoverPiece && <Piece key={999} x={hoverPiece.gridX} y={hoverPiece.gridY} shape={hoverPiece.shape} isMuted={true}/>}
    </div>
  );
};

export default Grid;
