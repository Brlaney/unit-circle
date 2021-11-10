import TestComponent from '@/components/TestComponent';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Test.module.scss';

export default function Test() {
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
          <TestComponent />
        </div>
      </div>
    </motion.div>
  );
}
