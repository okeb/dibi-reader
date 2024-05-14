'use client'

import { useCounter, useFetch, useHotkeys } from '@mantine/hooks';
import classes from './ReaderCenter.module.scss'
import Starfield from 'react-starfield';
import TypoSize from '../../../../components/actions/typoSize';
import Annexe from '../../../../components/actions/annexe';
import { useState } from 'react';

interface Item {
  livre: string;
  chapitre: string;
  verset: number;
  ecrit: string;
  version: string;
}


function ReaderCenter({
  openEye
}: {
  openEye: boolean
}) {
  const { data, loading, error, refetch, abort } = useFetch<Item[]>(
    'https://www.shemaproject.org/bym/'
  );

  const [count, handlers] = useCounter(25, { min: 17, max: 50 });
  const [showStarfield, setShowStarfield ] = useState(false)
  useHotkeys([
    ['shift+R', () => refetch()],
    ['mod+.', () => setShowStarfield(!showStarfield)],
  ]);

  
  return (
    <>
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
  
      <section className={classes.sectionBody}>

          <p style={{
          
            fontStyle: 'italic',
            marginBottom: '25px',
            marginLeft: '10px',
          }}>
            {data ? data.verset : 'Fetching'}
          </p>
        <div
        style={{
          display: 'flex',
        }}
        >
          <div
          style={{
            paddingInline: '7px'
          }}
          >
            <p
            style={{
              color: 'white',
              fontSize: '.9rem',
              fontStyle: 'italic',
              fontWeight: 'bold'
            }}
            >{data ? data.verset.split(':')[1] : 'Fetching'}</p>
          </div>
          <div>
            <p className={classes.verset} id='verset' style={{ fontSize: `${count}px`}}>
              {(data && data.ecrit) ? data.ecrit : 'Fetching'}
              {/* Celui donc qui aura renversé l'un de ces plus petits commandements et qui aura ainsi enseigné les gens, sera appelé le plus petit dans le Royaume des cieux. Mais celui qui les observera et qui enseignera à les observer, celui-là sera appelé grand dans le Royaume des cieux. */}
            </p>
            <div
              style={{
                display: `${openEye ? 'flex' : 'none'}`,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '.5rem',
                  position: 'relative',
                }}
              >

                <TypoSize count={count} handlers={handlers}/>
                {/* <Annexe/> */}
                <div className={classes.link}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"></path></svg>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '.2rem'
                }}
              >
                <button className={classes.linkAction} >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4 4m-4-4l4-4"></path></svg>
                </button>
                <button className={classes.linkAction} onClick={refetch}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14"></path></svg>
                </button>
                <button className={classes.linkAction} onClick={abort}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-4 4l4-4m-4-4l4 4"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
    
  )
}

export default ReaderCenter