import React, { FunctionComponent } from 'react';
import styles from './NewGameButton.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';

const NewGameButton: FunctionComponent<any> = ({ isShown, onClick }) => {
  const gameDimensions = useGameDimensions();
  const cellSize = gameDimensions.cellSize;
  const containerLeft = gameDimensions.newGameButtonLeft;
  const containerTop = gameDimensions.newGameButtonTop;
  const containerHeight = cellSize;
  const containerWidth = gameDimensions.gridSize;
  const containerInlineStyles = {
    top: `${containerTop}px`,
    left: `${containerLeft}px`,
    height: `${containerHeight}px`,
    width: `${containerWidth}px`,
  };
  const fontSize = cellSize * 0.8;
  const buttonHeight = cellSize*1.2;
  const buttonWidth = cellSize*5;
  const borderRadius = Math.floor(buttonHeight * 0.1);
  const buttonInlineStyles = {
    height: `${buttonHeight}px`,
    width: `${buttonWidth}px`,
    borderRadius: `${borderRadius}px`,
    fontSize: `${fontSize}px`,
    lineHeight: `${buttonHeight}px`
  };

  return (
    <div className={styles.container} style={containerInlineStyles}>
      {isShown ? <div className={styles.button} style={buttonInlineStyles} onClick={onClick}>New Game</div> : <></>}
    </div>
  );
};

export default NewGameButton;
