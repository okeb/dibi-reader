import { Anchor } from '@mantine/core';
import { TextGenerateEffect } from './verset';
import classes from './footer.module.scss';


export default function AnchorHistory({
  index=0,
  item='',
  sharedHistoryCurrent,
}:{
  index?: number,
  item?:(string | number)[]
  sharedHistoryCurrent: number,

}) {

  
  return (
    <Anchor py={0} my={0} key={index}>
      {item.length > 0 ? (
        <p>{ (sharedHistoryCurrent == index) ? (
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height='3px' width='3px' viewBox="0 0 24 24" style={{ display: 'inline-flex',opacity: '1', borderRadius: '5px', marginInlineEnd: '7px',  color: "white"}}><path fill="currentColor" d="M7 3.34a10 10 0 1 1-4.995 8.984L2 12l.005-.324A10 10 0 0 1 7 3.34"></path></svg>
          </span>
          ):(
            <></>
          )}<TextGenerateEffect words={item[0]} delay={0.4} duration={3} className={classes.historyItem }/></p>
      ): (
        <></>
      )}
    </Anchor>
  )
}