import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './Block.module.scss';

let cx = classNames.bind(styles);

const Block: FunctionComponent<any> = ({ x, y, size, blockType, isPreDragging, isDragging, isMuted }) => {
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
    isMuted: isMuted
  });

  return (
    <div style={inlineStyles}
         className={className}>
    </div>
  );
};

export default Block;
