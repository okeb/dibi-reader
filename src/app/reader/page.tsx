'use client'

import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../../components/base/header';
import ReaderCenter from './body/reader-center';
import Footer from '../../../components/base/footer';
import { readLocalStorageValue, useDocumentVisibility, useHotkeys, useIdle, useInterval } from '@mantine/hooks';
import HistoryList from '../../../components/base/historyList';
import Starfield from 'react-starfield';
import { BackgroundImage } from '@mantine/core';

export default function page() {
  const wallpaperSaved = readLocalStorageValue({ key: 'diBiWallpaperSaved' });
  const DetailsVisibility = readLocalStorageValue({ key: 'diBiDetailsVisibility'});
  const [wallpaper, setWallpaper] = useState(wallpaperSaved ? wallpaperSaved.json.url : '');
  const [openEye, setOpenEye] = useState<boolean>(DetailsVisibility ? DetailsVisibility.json : true);
  const [showStarfield, setShowStarfield ] = useState(false)
  const [seconds, setSeconds] = useState(0);
  const [sharedHistory, setSharedHistory] = useState();
  
  const handleHistoryChange = (history: any) => {
    setSharedHistory(history);
  };
  const documentState = useDocumentVisibility();
  const idle = useIdle(14000, { initialState: false });
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  // useEffect(() => {
  //   if (documentState != 'hidden'  && !idle) {
  //     interval.start();
  //   }else {
  //     interval.stop();
  //   }
  //   return interval.stop;
  // }, [documentState, idle]);
  useHotkeys([
    ['mod+.', () => setShowStarfield(!showStarfield)],
  ]);
  
  return (
    <BackgroundImage
        src={wallpaper}
        style={{transition: 'all .7s'}}
      >
      <Header/>
      {showStarfield ? (
        <Starfield
          starCount={300}
          starColor={[255, 255, 255]}
          speedFactor={0.02}
          backgroundColor="black"
        />
      ) : (
        <></> 
      )}

      <main>
        <ReaderCenter openEye={openEye} onHistoryChange={handleHistoryChange} />
      </main>

      <HistoryList sharedHistory={sharedHistory}/>
      <div style={{
          width: '5px',
          height: '5px',
          borderRadius: '10px',
          backgroundColor: interval.active ? 'orange' : 'red',
          position: 'absolute',
          transition: 'all 0.7s ease',
          opacity: openEye ? '1' : '0',
          top: '25px',
          right: '25px',
      }}>
      </div>
      <Footer openEye={openEye} timeago={seconds} timeinterval={interval.active}  setDetailsVisibility={setOpenEye} setWallpaper={setWallpaper} />
    </BackgroundImage>
  )
}
