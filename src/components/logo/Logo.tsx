import React, { FunctionComponent } from 'react';
import styles from './Logo.module.scss';
import { useGameDimensions } from '../gameDimensionsProvider/GameDimensionsProvider';
import Piece from '../piece/Piece';

const Logo: FunctionComponent<any> = () => {
  const gameDimensions = useGameDimensions();
  const cellSize = gameDimensions.cellSize;
  const logoSize = Math.floor(cellSize * 9);
  const logoBorderSize = 10;
  const containerWidth = Math.floor(logoSize * 1.5);
  const earSize = Math.floor(cellSize * 3);
  const eyeSize = Math.floor(cellSize * 2);
  const noseSize = Math.floor(cellSize);
  const mouthSize = Math.floor(cellSize * 1.5);
  const whiskerSize = Math.floor(cellSize * 5.5);

  let containerInlineStyles = {
    width: `${containerWidth}px`,
    height: `${logoSize}px`
  };

  let piecesContainerInlineStyles = {
    width: `${logoSize * 1.5}px`,
    height: `${logoSize * 1.2}px`,
    top: `${logoSize * 0.1}px`
  };

  let piecesInlineStyles = {
    width: `${logoSize + logoBorderSize*2}px`,
    height: `${logoSize + logoBorderSize*2}px`,
    top: `${logoSize * -0.1}px`
  };

  let logoTopBorderInlineStyles = {
    width: `${logoSize * 0.65}px`,
    height: `0`,
    top: `${logoSize * 0.1}px`
  };

  let earLeftInlineStyles = {
    width: `${earSize}px`,
    height: `${earSize}px`,
    left: `${Math.floor(containerWidth/2 - earSize*2)}px`,
    top: `${earSize * -0.05}px`,
    transform: `rotate(calc(-45deg))`
  };

  let earRightInlineStyles = {
    width: `${earSize}px`,
    height: `${earSize}px`,
    left: `${Math.floor(containerWidth/2 + earSize)}px`,
    top: `${earSize * -0.05}px`,
    transform: `rotate(calc(45deg))`
  };

  let earAInlineStyles = {
    width: `${earSize}px`,
    height: `${earSize}px`,
    top: `${earSize * -0.08}px`,
    left: `${Math.floor(-earSize*0.5)}px`,
  };

  let earBInlineStyles = {
    width: `${earSize}px`,
    height: `${earSize}px`,
    left: `${Math.floor(earSize)}px`,
  };

  let earCInlineStyles = {
    width: `${earSize*1.5}px`,
    height: `${earSize}px`,
    left: `${Math.floor(-earSize*0.5)}px`,
    top: `${Math.floor(-earSize*0.15)}px`,
  };

  let eyeLeftInlineStyles = {
    width: `${eyeSize}px`,
    height: `${eyeSize}px`,
    left: `${-eyeSize * 0.5}px`,
    top: `${-eyeSize * 0.5}px`
  };

  let eyeRightInlineStyles = {
    width: `${eyeSize}px`,
    height: `${eyeSize}px`,
    left: `${eyeSize * 0.5}px`,
    top: `${-eyeSize * 0.5}px`
  };

  let noseInlineStyles = {
    width: `${noseSize}px`,
    height: `${noseSize}px`,
    top: `${(logoSize * 0.5) + (noseSize * 0.5)}px`
  };

  let mouthInlineStyles = {
    width: `0`,
    height: `${mouthSize}px`,
    top: `${(logoSize * 0.5) + (noseSize * 1.5)}px`
  };

  let whiskerALeftInlineStyles = {
    width: `${whiskerSize}px`,
    height: `0`,
    top: `${(logoSize * 0.5) + (noseSize*1.5)}px`,
    left: `${Math.floor(containerWidth/2 - (whiskerSize * 1.3))}px`,
    transform: `rotate(10deg)`,
    transformOrigin: `top right`
  };
  let whiskerBLeftInlineStyles = Object.assign({}, whiskerALeftInlineStyles);
  whiskerBLeftInlineStyles.transform = `rotate(calc(-10deg))`;
  whiskerBLeftInlineStyles.top = `${(logoSize * 0.5) + (noseSize*1.7)}px`;

  let whiskerARightInlineStyles = Object.assign({}, whiskerALeftInlineStyles);
  whiskerARightInlineStyles.left = `${containerWidth/2 + (whiskerSize * 0.3)}px`;
  whiskerARightInlineStyles.transformOrigin = `top left`;
  whiskerARightInlineStyles.transform = `rotate(-10deg)`;
  let whiskerBRightInlineStyles = Object.assign({}, whiskerARightInlineStyles);
  whiskerBRightInlineStyles.transform = `rotate(calc(10deg))`;
  whiskerBRightInlineStyles.top = `${(logoSize * 0.5) + (noseSize*1.7)}px`;

  return (
    <div className={styles.outerContainer}>
      <div style={containerInlineStyles} className={styles.container}>
        <div style={piecesContainerInlineStyles} className={styles.piecesContainer}>
          <div style={piecesInlineStyles} className={styles.pieces}>
            <Piece key={1} x={0} y={0} shape={'2B_I_1'}/>
            <Piece key={2} x={1} y={0} shape={'4B_T_1'}/>
            <Piece key={3} x={3} y={0} shape={'4B_L_2'}/>
            <Piece key={4} x={5} y={0} shape={'4B_T_4'}/>
            <Piece key={5} x={6} y={0} shape={'4B_J_1'}/>

            <Piece key={6} x={0} y={1} shape={'4B_I_2'}/>
            <Piece key={7} x={1} y={2} shape={'3B_L_2'}/>
            <Piece key={8} x={3} y={2} shape={'4B_J_3'}/>
            <Piece key={9} x={6} y={1} shape={'4B_T_1'}/>

            <Piece key={10} x={0} y={3} shape={'4B_J_2'}/>
            <Piece key={11} x={2} y={4} shape={'4B_O'}/>
            <Piece key={12} x={4} y={4} shape={'1B'}/>
            <Piece key={13} x={5} y={3} shape={'4B_Z_1'}/>
            <Piece key={14} x={7} y={3} shape={'3B_L_2'}/>

            <Piece key={15} x={0} y={6} shape={'2B_I_2'}/>
            <Piece key={16} x={1} y={6} shape={'4B_J_1'}/>
            <Piece key={17} x={4} y={5} shape={'4B_T_4'}/>
            <Piece key={18} x={6} y={5} shape={'2B_I_2'}/>
            <Piece key={19} x={7} y={4} shape={'4B_S_1'}/>

            <Piece key={20} x={0} y={7} shape={'4B_S_2'}/>
            <Piece key={21} x={2} y={8} shape={'4B_I_1'}/>
            <Piece key={22} x={5} y={6} shape={'4B_L_1'}/>
            <Piece key={23} x={6} y={8} shape={'1B'}/>
            <Piece key={24} x={7} y={7} shape={'3B_L_1'}/>
          </div>
        </div>
        <div style={logoTopBorderInlineStyles} className={styles.logoTopBorder}></div>
        <div style={earLeftInlineStyles} className={styles.ear}>
          <div style={earAInlineStyles} className={styles.earA}>
            <div style={earBInlineStyles} className={styles.earB}>
              <div style={earCInlineStyles} className={styles.earC}>
              </div>
            </div>
          </div>
        </div>
        <div style={earRightInlineStyles} className={styles.ear}>
          <div style={earAInlineStyles} className={styles.earA}>
            <div style={earBInlineStyles} className={styles.earB}>
              <div style={earCInlineStyles} className={styles.earC}>
              </div>
            </div>
          </div>
        </div>
        <div style={eyeLeftInlineStyles} className={styles.eye}></div>
        <div style={eyeRightInlineStyles} className={styles.eye}></div>
        <div style={noseInlineStyles} className={styles.nose}></div>
        <div style={mouthInlineStyles} className={styles.mouth}></div>
        <div style={whiskerALeftInlineStyles} className={styles.whisker}></div>
        <div style={whiskerBLeftInlineStyles} className={styles.whisker}></div>
        <div style={whiskerARightInlineStyles} className={styles.whisker}></div>
        <div style={whiskerBRightInlineStyles} className={styles.whisker}></div>
      </div>
    </div>
  );
};

export default Logo;
