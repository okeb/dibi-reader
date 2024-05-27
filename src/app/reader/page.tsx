'use client'

import React from 'react';
import { useState } from 'react';
import Header from '../../../components/base/header';
import ReaderCenter from './body/reader-center';
import Footer from '../../../components/base/footer';
import { readLocalStorageValue, useDisclosure, useDocumentVisibility, useHotkeys, useIdle, useInterval } from '@mantine/hooks';
import HistoryList from '../../../components/base/historyList';
import Starfield from 'react-starfield';
import { AppShell, AppShellFooter, AppShellHeader, BackgroundImage } from '@mantine/core';
import { SparklesCore } from '../../../components/ui/sparclesBackground';
import sparkles from './body/ReaderCenter.module.scss';
import BookmarkDrawer from '../../../components/base/bookmarkDrawer';

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
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);
  
  return (
    <BackgroundImage
        src={wallpaper}
        style={{transition: 'all .7s'}}
      >
        
      <AppShell
        layout="alt"
        header={{ height: 0, offset: false }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        padding="md"
      >
        <AppShellHeader>
          
          <Header/>
          {/* <Group h="60%" px="md" mt={21}>
            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm"  style={{zIndex:'1000'}} />
          </Group> */}
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
        </AppShellHeader>

        {/* <AppShell.Navbar>
          <HistoryList sharedHistory={sharedHistory}/>
        </AppShell.Navbar> */}

        <AppShell.Main style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          overflow: 'hidden',
        }}
        >
          <BookmarkDrawer />
          <ReaderCenter openEye={openEye} onHistoryChange={handleHistoryChange} />
          {showStarfield ? (
            <>
              <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                inset: "0px",
                transition: 'all 3s',
              }}>
                <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={7}
                  className={sparkles.sparkles}
                  particleColor="rgba(255,255,255,.5)"
                />
              </div>
              {/* <Starfield
                starCount={300}
                starColor={[255, 255, 255]}
                speedFactor={0.02}
                backgroundColor="black"
              /> */}
            </>
          ) : (
            <></> 
          )}
        </AppShell.Main>

        <AppShellFooter>
          <Footer openEye={openEye} timeago={seconds} timeinterval={interval.active}  setDetailsVisibility={setOpenEye} setWallpaper={setWallpaper} />
        </AppShellFooter>
      </AppShell>
      
    </BackgroundImage>
  )
}
