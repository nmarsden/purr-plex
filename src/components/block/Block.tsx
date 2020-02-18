import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './Block.module.scss';

let cx = classNames.bind(styles);

const Block: FunctionComponent<any> = ({ x, y, size, isDragging }) => {
  const inlineStyles = {
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}px`,
    top: `${y}px`,
  };

  let className = cx({
    block: true,
    isDragging: isDragging,
  });

  return (
    <div style={inlineStyles}
         className={className}>
    </div>
  );
};

export default Block;
