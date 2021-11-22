import { motion } from 'framer-motion';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import styles from '@/styles/pages/Test.module.scss';

const Test = () => {

  // Angles for Quadrant I
  const A0 = <TeX
    id='0-degrees'
    className={styles.mathAngles}
    math='0'
  />;
  const A1 = <TeX
    id='30-degrees'
    className={styles.mathAngles}
    math='\frac{\pi}{6}'
  />;
  const A2 = <TeX
    id='45-degrees'
    className={styles.mathAngles}
    math='\frac{\pi}{4}'
  />;
  const A3 = <TeX
    id='60-degrees'
    className={styles.mathAngles}
    math='\frac{\pi}{3}'
  />;

  // Angles for Quadrant II
  const A4 = <TeX
    id='90-degrees'
    className={styles.mathAngles}
    math='\frac{\pi}{2}'
  />;
  const A5 = <TeX
    id='120-degrees'
    className={styles.mathAngles}
    math='\frac{2\pi}{3}'
  />;
  const A6 = <TeX
    id='135-degrees'
    className={styles.mathAngles}
    math='\frac{3\pi}{4}'
  />;
  const A7 = <TeX
    id='150-degrees'
    className={styles.mathAngles}
    math='\frac{5\pi}{6}'
  />;

  // Angles for Quadrant III
  const A8 = <TeX
    id='180-degrees'
    className={styles.mathAngles}
    math='\pi'
  />;
  const A9 = <TeX
    id='210-degrees'
    className={styles.mathAngles}
    math='\frac{2\pi}{3}'
  />;
  const A10 = <TeX
    id='225-degrees'
    className={styles.mathAngles}
    math='\frac{3\pi}{4}'
  />;
  const A11 = <TeX
    id='240-degrees'
    className={styles.mathAngles}
    math='\frac{5\pi}{6}'
  />;

  // Angles for Quadrant IV
  const A12 = <TeX
    id='270-degrees'
    className={styles.mathAngles}
    math='\frac{\pi}{2}'
  />;
  const A13 = <TeX
    id='300-degrees'
    className={styles.mathAngles}
    math='\frac{2\pi}{3}'
  />;
  const A14 = <TeX
    id='315-degrees'
    className={styles.mathAngles}
    math='\frac{3\pi}{4}'
  />;
  const A15 = <TeX
    id='330-degrees'
    className={styles.mathAngles}
    math='\frac{5\pi}{6}'
  />;

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <div className={styles.box}>
        <div className={styles.display}>
          {A1}
          {A2}
          {A3}
          {A4}
          {A5}
          {A6}
          {A7}
          {A8}
          {A9}
          {A10}
          {A11}
          {A12}
          {A13}
          {A14}
          {A15}
        </div>
      </div>
    </motion.div>
  );
}

export default Test;
