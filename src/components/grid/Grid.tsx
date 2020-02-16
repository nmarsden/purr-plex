import React, { FunctionComponent, ReactNode } from 'react';
import styles from './Grid.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';

const Grid: FunctionComponent<any> = ({ children }) => {
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
  const cellStyles = {
    width: `${cellSize}px`,
    height: `${cellSize}px`
  };

  const rows = cellTypes.map( (cellType, rowIndex) => {
    const cells: Array<ReactNode> = [];
    cellType.split('').forEach( (ch, colIndex) =>  {
      cells.push(<div key={colIndex}
                      style={cellStyles}
                      className={ch === 'O' ? styles.cell : styles.shadedCell}>
                 </div>)
    });
    return <div key={rowIndex} className={styles.row}>{cells}</div>;
  } );

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {rows}
        { children }
      </div>
    </div>
  );
};

export default Grid;
