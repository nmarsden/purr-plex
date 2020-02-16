import React, { ReactNode, useEffect, useState } from 'react';
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
  const cellSize = useCellSize();
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
    <div className={styles.container}>
      {rows}
    </div>
  );
}

function getWindowDimensions() {
  const { clientWidth: width, clientHeight: height } = window.document.documentElement;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function useCellSize() {
  const { height, width } = useWindowDimensions();
  return Math.floor( Math.min( height / 9, width / 9) );
}

export default Grid;
