import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/utils/animations';
import GoBack from '@/components/GoBack';
import Graphic from '@/components/unit-circle/Graphic';

import { rads } from '@/components/UnitCircleRads';
import { IAngle } from '@/lib/types';
import { angles } from '@/lib/data/angles';

import 'katex/dist/katex.min.css'
import styles from '@/styles/pages/UnitCircle.module.scss';


const UnitCircle = () => {
  const endpoint = '/';

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >

      <GoBack link={endpoint} />

      {/* Page parent container */}
      <motion.div className={styles.parent} variants={stagger}>

        <motion.div className={styles.box} variants={fadeInUp}>
          {/* {angles.map((angle: IAngle) => (
            <div key={angle.id} className={styles.text}>
              <TeX>
                `{angle.math}`
              </TeX>
            </div>
          ))} */}

          {/* {rads.map((rad, index) => (
            <div key={index} className={styles.math}>
              {rads[index]}
            </div>
          ))} */}

          <Graphic />

        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default UnitCircle;
