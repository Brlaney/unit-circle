import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R3 = () => {
  const rad = <TeX math='\frac{\pi}{3}' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R3;
