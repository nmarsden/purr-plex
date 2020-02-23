import React, { FunctionComponent } from 'react';
import styles from './PointsMessage.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';

export interface PointsMessageData {
  gridX?: number,
  gridY?: number,
  points?: number,
  isCombo?: boolean,
  isShown: boolean
}

const PointsMessage: FunctionComponent<any> = ({ pointsMessageData }) => {
  const gameDimensions = useGameDimensions();
  const cellSize = gameDimensions.cellSize;
  const halfCellSize = gameDimensions.cellSize / 2;
  const containerSize = cellSize * 3;
  const containerTop = Math.floor(gameDimensions.gridTop + (pointsMessageData.gridY * cellSize) + halfCellSize - (containerSize/2));
  const containerLeft = Math.floor(gameDimensions.gridLeft + (pointsMessageData.gridX * cellSize) + halfCellSize - (containerSize/2));
  const containerInlineStyles = {
    top: `${containerTop}px`,
    left: `${containerLeft}px`,
    width: `${containerSize}px`,
    height: `${containerSize}px`,
  };
  const pointsHeight = Math.floor(0.75 * cellSize);
  const pointsInlineStyles = {
    height: `${pointsHeight}px`,
    fontSize: `${pointsHeight}px`,
    lineHeight: `${pointsHeight}px`
  };

  return (
    <div className={styles.container} style={containerInlineStyles}>
      {pointsMessageData.isShown ?
        <div className={styles.points}
             style={pointsInlineStyles}>
          {pointsMessageData.isCombo ? <div>COMBO</div> : <></>}
          <div>+{pointsMessageData.points}</div>
        </div>
        :
        <></>
      }
    </div>
  );
};

export default PointsMessage;
