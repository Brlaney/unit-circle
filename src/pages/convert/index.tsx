import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/utils/animations';
import GoBack from '@/components/GoBack';
import styles from '@/styles/pages/Pages.module.scss';

// HTML symbol for pi: &#960;

const Convert = () => {
  const endpoint = '/';

  // Define states & refs
  const [degrees, setDegrees] = useState(180);
  const [radians, setRadians] = useState(0);
  const degRef = useRef();
  const radRef = useRef();

  // UseEffect hook that runs when degrees input changes
  useEffect(() => {
    const r = degrees * Math.PI / 180;
    setRadians(r);
  }, [degrees]);

  // UseEffect hook that runs when radians input changes

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

        {/* Header */}
        <motion.h2 className={styles.header} variants={fadeInUp}>
          Converting Radians & Degrees
        </motion.h2>

        <motion.div className={styles.box} variants={fadeInUp}>

          <motion.div id={styles.row1} className='uk-width-1-1' >
            <motion.div id={styles.col1} className='uk-width-1-2' >
              <h3 className={styles.label}>
                Degrees
              </h3>
              <h4 className={styles.degrees}>
                {degrees}&deg;
              </h4>
            </motion.div>
            <motion.div id={styles.col2} className='uk-width-1-2' >
              <h3 className={styles.label}>
                Radians
              </h3>
              <h4 className={styles.degrees}>
                {radians}
              </h4>
            </motion.div>
          </motion.div>

          <div className={styles.display}>
            <div>
              <input
                ref={degRef}
                id={styles.inputdegrees}
                className='uk-input uk-form-large'
                type='number'
                name='degrees'
                placeholder='Input: degrees'
                value={degrees}
                onChange={e => setDegrees(parseInt(e.target.value))}
              />
            </div>
            <div>
              <input
                ref={radRef}
                id={styles.inputradians}
                className='uk-input uk-form-large'
                type='number'
                name='radians'
                placeholder='Input: radians'
                value={radians}
                onChange={e => setRadians(parseInt(e.target.value))}
              />
            </div>
          </div>

        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default Convert;
