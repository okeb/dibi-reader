"use client"
import React from 'react'
import classes from './footer.module.scss'
import { useOs } from '@mantine/hooks';
import FullScreenButton from '../setting/fullScreen';
import CopySettingButton from '../setting/copy';
import ScreenCaptureButton from '../setting/screenCapture';
import ToggleModeButton from '../setting/toggleMode';
import KeyBindingButton from '../setting/keyBinding';
import StatisticsButton from '../setting/statistics';
import BlogButton from '../setting/blog';
import ShareButton from '../setting/share';
import BackGroundButton from '../setting/backGround';
import BugMesssageButton from '../setting/bugMessage';

export default function Footer({value, openEye}:{ value?: string, openEye?: boolean}) {
  const os = useOs();
  return (
    <footer className={classes.footer}>
    <div style={{
      display: 'flex',
      justifyContent: 'end'
    }}>
      <div className={classes.toggle} style={{display: `${openEye ? 'flex' : 'none'}`,}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m4-10l-4-4M8 9l4-4"></path></svg>
      </div>
    </div>

    <div className={classes.menu}>
      <BugMesssageButton className={classes.menuItem} />
      <ShareButton className={classes.menuItem} />
      <BlogButton className={classes.menuItem} />
      <CopySettingButton className={classes.menuItem} value={ value ? value : '' } />
      <FullScreenButton className={classes.menuItem}/>
      <StatisticsButton className={classes.menuItem} />
      <ScreenCaptureButton className={classes.menuItem} />
      <BackGroundButton className={classes.menuItem} />
      <div className={classes.menuItem}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 21v-4a4 4 0 1 1 4 4z"></path><path d="M21 3A16 16 0 0 0 8.2 13.2M21 3a16 16 0 0 1-10.2 12.8"></path><path d="M10.6 9a9 9 0 0 1 4.4 4.4"></path></g></svg>
      </div>
      <ToggleModeButton className={classes.menuItem} />
      <KeyBindingButton className={classes.menuItem} />

    </div>
    </footer>
  )
}
