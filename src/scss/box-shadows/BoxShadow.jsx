import React from 'react';
import './box-shadow.scss';

const examples = [];
for (let i = 1; i < 25; i++) {
  examples.push(<div className={['box-example', `box-shadow--${i}`].join(' ')}>{i}</div>);
}

export const BoxShadow = () => <div className="box-example--wrapper">{examples}</div>;
