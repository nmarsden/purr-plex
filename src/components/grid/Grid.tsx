import React, { ReactNode } from 'react';
import styles from './Grid.module.scss';

function Grid() {
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

  const rows = cellTypes.map( (cellType, rowIndex) => {
    const cells: Array<ReactNode> = [];
    cellType.split('').forEach( (ch, colIndex) =>  cells.push(<div key={colIndex} className={ch === 'O' ? styles.cell : styles.shadedCell}></div>));
    return <div key={rowIndex} className={styles.row}>{cells}</div>;
  } );

  return (
    <div className={styles.container}>
      {rows}
    </div>
  );
}

export default Grid;
