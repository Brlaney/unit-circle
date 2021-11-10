import * as React from 'react';
import { motion } from 'framer-motion';
import { mainPathVariant, shapeVariations } from '@/lib/utils/animations';

const P1 = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <svg
        width='500'
        height='500'
        viewBox='0 0 500 500'
        fill='#FAFAFA'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='p1' data-name='Point 1'>

        </g>
      </svg>
    </motion.div>
  );
};

export default P1;
