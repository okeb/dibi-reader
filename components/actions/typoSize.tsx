'use client'
import React, { MouseEventHandler } from 'react'
import { useState } from 'react';
import { NumberFormatter, Paper, Popover, useMantineColorScheme} from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import classes from './action.module.scss'


export default function TypoSize(
  {
    count, handlers
  }: {
    count: number, 
    handlers: {
      decrement: MouseEventHandler<HTMLButtonElement>,
      increment: MouseEventHandler<HTMLButtonElement>,
    }
  }
) {
  const [opened, setOpened] = useState(false);
  useHotkeys([
    ['shift+ArrowUp', () => handlers.increment()],
    ['G', () => handlers.increment()],
    ['shift+ArrowDown', () => handlers.decrement()],
    ['L', () => handlers.decrement()],
  ]);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  return (
    <Popover
      position='bottom-start'
      offset={1}
      arrowPosition='center'
      withArrow
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      arrowSize={10}
      arrowRadius={2}
      arrowOffset={65}
    >
      <Popover.Target>
        <button className={classes.link} style={{ opacity: `${opened ? 1 : .3}`}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7V5h13v2m-6-2v14m2 0H8m7-6v-1h6v1m-3-1v7m-1 0h2"></path></svg>
        </button>
      </Popover.Target>

      <Popover.Dropdown
        style={{
          backgroundColor: (colorScheme === 'dark')? 'rgba(20, 20, 20, .5)' :'rgba(255, 255, 255, .5)',
          border: (colorScheme === 'dark')? '1px solid rgba(255, 255, 255,.2)' :'1px solid rgba(0, 0, 0,.2)',
          borderRadius: '12px',
          backdropFilter: 'blur(4px)',
          padding: '0'
        }}
      >
        <Paper 
          shadow="sm" 
          className={classes.buttonGroupPop}
        >
          <button className={classes.action} onClick={handlers.decrement}>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19V8.5a3.5 3.5 0 1 1 7 0V19m-7-6h7m10-1h-6"></path></svg>
            </p>
          </button>
          <div className={classes.divider_vertical}></div>
          <div>
            <p className={classes.text}><NumberFormatter value={count} suffix="px" /></p>
          </div>
          <div className={classes.divider_vertical}></div>
          <button className={classes.action} onClick={handlers.increment}>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19V8.5a3.5 3.5 0 1 1 7 0V19m-7-6h7m7-4v6m3-3h-6"></path></svg>
            </p>
          </button>
          <div className={classes.divider_vertical_full} />

          <button className={classes.action}>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h3m7 0h7M6.9 15h6.9m-3.6-8.7L16 20M5 20l6-16h2l7 16"></path></svg>
            </p>
          </button>
        </Paper>
      </Popover.Dropdown>
    </Popover>
  );
}