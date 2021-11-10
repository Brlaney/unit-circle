import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R8 = () => {
  const rad = <TeX math='\pi' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R8;
