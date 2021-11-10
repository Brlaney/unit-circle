import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R2 = () => {
  const rad = <TeX math='\frac{\pi}{4}' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R2;
