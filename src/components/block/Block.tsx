import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './Block.module.scss';
import { ReactComponent as CatSvg } from './cat.svg';
import { useTheme } from '../themeProvider/ThemeProvider';

let cx = classNames.bind(styles);

const Block: FunctionComponent<any> = ({ x, y, size, blockType, isPreDragging, isDragging, isMuted, isCompletable }) => {
  let theme = useTheme();
  const inlineStyles = {
    width: `${size + 1}px`,
    height: `${size + 1}px`,
    left: `${x - 1}px`,
    top: `${y - 1}px`,
  };

  let className = cx({
    block: true,
    [`type${blockType}`]: true,
    isPreDragging: isPreDragging,
    isDragging: isDragging,
    isMuted: isMuted,
    isCompletable: isCompletable
  });

  const catInlineStyles = {
    width: `100%`,
    height: `100%`,
    padding: `10%`
  };

  return (
    <div style={inlineStyles} className={className}>
      {theme.value === 'cat' ? <CatSvg style={catInlineStyles}></CatSvg> : <></>}
    </div>
  );
};

export default Block;
