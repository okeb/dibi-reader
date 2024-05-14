'use client'

import { useCounter, useDocumentTitle, useDocumentVisibility, useFetch, useHotkeys, useIdle, useInterval, useNetwork } from '@mantine/hooks';
import classes from './ReaderCenter.module.scss'
import Starfield from 'react-starfield';
import TypoSize from '../../../../components/actions/typoSize';
import Annexe from '../../../../components/actions/annexe';
import { useEffect, useState } from 'react';
import { TextGenerateEffect } from '../../../../components/base/verset';
import { Skeleton } from '@mantine/core';
import FormatTime from '../../../../components/base/utilities';

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
  useDocumentTitle(`Bible Reader: ${data ? data.verset : ''}`);
  useHotkeys([
    ['shift+R', () => refetch()],
    ['mod+.', () => setShowStarfield(!showStarfield)],
  ]);
  const networkStatus = useNetwork();
  const [seconds, setSeconds] = useState(0);
  const documentState = useDocumentVisibility();
  const idle = useIdle(14000, { initialState: false });
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);
  useEffect(() => {
    if (documentState != 'hidden'  && !idle) {
      interval.start();
    }else {
      interval.stop();
    }
  }, [documentState, idle]);
  useEffect(() => {
    setSeconds(0)
    interval.start();
  }, [data])
  
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
            width: '100%'
          }}>
            
              {!loading && data && networkStatus.online ? (
                <>
                  <TextGenerateEffect words={data.verset.split(':')[0]} delay={0.4} />
                </>
              ) : (
                <>
                  {!networkStatus.online ? (
                    <>
                      <TextGenerateEffect words={"Vous n'êtes pas connecté.e"} delay={0.17} duration={1}/>
                    </>
                  ):(
                    <>
                      <Skeleton height={8} mb={14} radius="xl" width="60px"/>
                    </>
                  )}
                </>
              )}
          </p>
        <div
        style={{
          display: 'flex',
        }}
        >
          <div
          style={{
            paddingInline: '7px',
            minWidth: '4%'
          }}
          >
            <p
            style={{
              color: 'white',
              fontSize: '.9rem',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
            >
              
              {!loading && data && networkStatus.online ? (
                <TextGenerateEffect words={data.verset.split(':')[1]} duration={2} />
              ) : (
              <>
              {!networkStatus.online ? (
                    <>
                      <TextGenerateEffect words={'?'} delay={0.17} duration={1}/>
                    </>
                  ):(
                    <>
                      <Skeleton height={8} radius="xl" width="100%"/>
                    </>
                  )}
              </>
            )}
            </p>

          </div>
          <div style={{width: '100%'}}>
            

            <p className={classes.verset} id='verset' style={{ fontSize: `${count}px`}}>
              {!loading && data && networkStatus.online ? (
                <TextGenerateEffect words={data.ecrit} delay={0.17} duration={1}/>
              ) : (
                <>
                  {!networkStatus.online ? (
                    <>
                      <TextGenerateEffect words={'Veuillez verifier votre connexion internet...'} delay={0.17} duration={1}/>
                    </>
                  ):(
                    <>
                      <Skeleton height={count-7} radius="xl" mt={10}/>
                      <Skeleton height={count-7} mt={14} radius="xl"/>
                      <Skeleton height={count-7} mt={14} width="70%" radius="xl"/>
                    </>
                  )}
                </>
              )}
            </p>
            
            <div
              style={{
                // display: `${openEye ? 'flex' : 'none'}`,
                opacity: `${openEye ? 1 : 0 }`,
                display: 'flex',
                alignItems: 'center',
                transition: 'opacity .5s',
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