import React, { FunctionComponent, MouseEvent } from 'react';
import styles from './ThemeModal.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';
import { Theme, useTheme } from '../themeProvider/ThemeProvider';
import { ReactComponent as CatSvg } from '../block/cat.svg';

interface ThemeChosenHandler  {
  (theme: Theme): void;
}

interface ThemeModalProps {
  isOpen: boolean,
  onThemeChosen: ThemeChosenHandler,
  onClose: Function
}

const ThemeModal: FunctionComponent<any> = ({ isOpen, onClose }:ThemeModalProps) => {
  const theme = useTheme();

  const { cellSize, gridTop, gridLeft, gridSize, windowWidth } = useGameDimensions();
  const containerTop = Math.floor(gridTop - cellSize);
  const containerRight = Math.floor(windowWidth - (gridLeft + gridSize + (cellSize * 0.5)));
  const containerPadding = Math.floor(cellSize * 0.4);
  const borderRadius = Math.floor(cellSize * 0.2);
  const shadowBlur = Math.floor(cellSize * 1.2);
  const shadowSpread = -Math.floor(cellSize * 0.2);
  const containerInlineStyles = {
    top: `${containerTop}px`,
    right: `${containerRight}px`,
    padding: `${containerPadding}px`,
    boxShadow: `0 0 ${shadowBlur}px ${shadowSpread}px black`,
    borderRadius: `${borderRadius}px`
  };
  const arrowSize = Math.floor(cellSize * 0.4);
  const arrowInlineStyles = {
    right: `${Math.floor(cellSize * 0.5)}px`,
    borderWidth: `${arrowSize}px`,
    marginLeft: `${arrowSize}px`
  };
  const fontSize = Math.floor(cellSize * 0.5);
  const headerHeight = Math.floor(fontSize * 1.2);
  const headerInlineStyles = {
    height: `${headerHeight}px`,
    fontSize: `${fontSize}px`,
    lineHeight: `${fontSize}px`
  };

  const buttonInlineStyles = (isSelected:boolean) => {
    return {
      height: `${cellSize}px`,
      width: `${cellSize}px`,
      borderRadius: `${Math.floor(cellSize * 0.5)}px`,
      margin: `${Math.floor(cellSize * 0.2)}px`,
      boxShadow: isSelected ? `0 0 0 ${Math.floor(cellSize * 0.05)}px black` : `none`
    };
  };

  const catInlineStyles = {
    width: `100%`,
    height: `100%`,
    padding: `20%`
  };

  const chooseTheme = (chosenTheme: Theme) => {
    return (event: MouseEvent) => {
      theme.setValue(chosenTheme);
    }
  };

  const closeModal = (event: MouseEvent) => {
    onClose();
  };

  return (
    isOpen ?
    <>
      <div className={styles.modalBackdrop} onClick={closeModal}> </div>
      <div className={styles.container} style={containerInlineStyles}>
        <div className={styles.arrow} style={arrowInlineStyles}> </div>
        <div className={styles.header} style={headerInlineStyles}>Choose Theme</div>
        <div className={styles.body}>
          <div className={styles.buttonPlain} style={buttonInlineStyles(theme.value === 'plain')} onClick={chooseTheme('plain')}> </div>
          <div className={styles.buttonCat} style={buttonInlineStyles(theme.value === 'cat')} onClick={chooseTheme('cat')}>
            <CatSvg style={catInlineStyles}> </CatSvg>
          </div>
        </div>
      </div>
    </> : <></>
  );
};

export default ThemeModal;
