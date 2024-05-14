'use client'

import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../../components/base/header';
import ReaderCenter from './body/reader-center';
import Footer from '../../../components/base/footer';
import { useDocumentVisibility, useHotkeys, useIdle, useInterval } from '@mantine/hooks';

export default function page() {
  const [ seeDetails, setSeeDEtails] = useState(true)
  useHotkeys([
    ['mod+/', () => setSeeDEtails(!seeDetails)],
  ]);
  const [seconds, setSeconds] = useState(0);
  const [secondsUniq, setSecondsUniq] = useState(0);
  const documentState = useDocumentVisibility();
  const idle = useIdle(14000, { initialState: false });
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);
  useEffect(() => {
    if (documentState != 'hidden'  && !idle) {
      interval.start();
    }else {
      interval.stop();
    }
    return interval.stop;
  }, [documentState, idle]);
  
  return (
    <div>
      <Header/>
      <main>
        <ReaderCenter openEye={seeDetails} />
      </main>
      <div style={{
          width: '5px',
          height: '5px',
          borderRadius: '10px',
          backgroundColor: interval.active ? 'orange' : 'red',
          position: 'absolute',
          transition: 'all 0.7s ease',
          opacity: seeDetails ? '1' : '0',
          top: '25px',
          right: '25px',
      }}>
      </div>
      <Footer openEye={seeDetails} timeago={seconds} timeinterval={interval.active} />
    </div>
  )
}
