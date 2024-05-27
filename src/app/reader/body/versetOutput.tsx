import { useEffect, useState } from "react"
import { TextGenerateEffect } from "../../../../components/base/verset"
import { useDebouncedState, useIntersection } from "@mantine/hooks";
import { Skeleton } from "@mantine/core";
import classes from './ReaderCenter.module.scss'

export default function VersetOutput({
  option = 'full',
  verset  = "",
  fontSize = 13,
  currentVerset,
  currentChapitre,
  currentLivre,
  currentFullBookName
}:{
  option?:string,
  verset?: string,
  currentVerset?: string,
  currentChapitre?: string,
  currentFullBookName?: string,
  currentLivre: string,
  fontSize?: number,
  className?: string
}) {
  const [loading, setLoading] = useState(false)
  const [debounced, setDebounced] = useDebouncedState('', 77);

  useEffect(() => {
    setLoading(false)
    setDebounced(verset)
  }, [verset])

  useEffect(() => {
    setLoading(true)
  }, [debounced])


  const { ref, entry } = useIntersection({
    root: document.querySelector('#verset-output-area'),
    rootMargin: '0px',
    threshold: 1.0,
  });
  

  return (
    <section className={classes.sectionBody_simple} ref={ref}
    style={{
      marginBottom: '12px',
      filter: entry?.isIntersecting ? '' : 'blur(1px)',
      opacity: entry?.isIntersecting ? '1' : '.7',
      transition: 'all .5s'
    }}>
      
      {(option === 'full') ? (
        <p className={classes.p_book}>
          {(loading && verset !="") ? (
            <div>
              <TextGenerateEffect words={`${currentFullBookName ? currentFullBookName:'...' } ${currentChapitre}  -  BYM`} delay={0.4} />
            </div>
          ):(
            <div>
              <Skeleton height={9} mb={14} radius="xl" width="120px" />
            </div>
          )}
        </p>
      ):(<></>)}
      <div style={{display: 'flex'}}>
        <div className={classes.box_num_verset}>
          {(loading && verset !="") ? (
            <p className={classes.p_num_verset}>
              <TextGenerateEffect words={`${currentVerset}`} duration={2} />
            </p>
          ):(
            <>
              <Skeleton height={8} radius="xl" width="100%"/>
            </>
          )}
        </div>
        <div className={classes.verset} style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize * (1.4/fontSize)}` }}>
          {(loading && verset !="") ? (
            <div>
              <TextGenerateEffect words={verset} delay={0.17} duration={1} />
            </div>
          ):(
            <div>
              {fontSize < 25 ? (
                <>
                <Skeleton height={fontSize-7} radius="xl" mt={10}/>
                <Skeleton height={fontSize-7} mt={14} width="70%" radius="xl"/>
                </> 
              ):(
                <>
                <Skeleton height={fontSize-7} radius="xl" mt={10}/>
                <Skeleton height={fontSize-7} mt={14} radius="xl"/>
                <Skeleton height={fontSize-7} mt={14} width="70%" radius="xl"/>
                </>
              )}
              
            </div>
          )}
        </div>
      </div>
    
    </section>
  )
}