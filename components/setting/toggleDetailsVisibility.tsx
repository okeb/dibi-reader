import { HoverCard, Text, useMantineColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import superjson from 'superjson';

export default function ToggleDetailsVisibilityButton({
  className,
  setDetailsVisibility
}:{
  className?: string,
  setDetailsVisibility: Function
}) {

  const defaultValue = true
  const [detailsVisibility, toggleDetailsVisibility] = useLocalStorage({
    key: 'diBiDetailsVisibility',
    defaultValue,
    serialize: superjson.stringify,
    deserialize: (str) =>
      str === undefined ? defaultValue : superjson.parse(str),
  });

  function setVisibility(bool: boolean) {
    toggleDetailsVisibility(bool)
    setDetailsVisibility(detailsVisibility)
    console.log('detailsVisibility = ', detailsVisibility);
    
  }
  setDetailsVisibility(detailsVisibility)
  useHotkeys([
    // ['Alt+O', () => ToggleVisibility()],
    ['mod+/', () => setVisibility((!detailsVisibility))],

  ]);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  return (
    <HoverCard shadow="md" openDelay={1300} closeOnEscape={true}>
      <HoverCard.Target>
        <button className={className} onClick={() => {
          if (detailsVisibility) {
            setVisibility(false)
          }else {
            setVisibility(true)
          }}}>
          {detailsVisibility ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></path><path d="M21 12c-2.4 4-5.4 6-9 6c-3.6 0-6.6-2-9-6c2.4-4 5.4-6 9-6c3.6 0 6.6 2 9 6"></path></g></svg>          
          ):(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 9c-2.4 2.667-5.4 4-9 4c-3.6 0-6.6-1.333-9-4m0 6l2.5-3.8M21 14.976L18.508 11.2M9 17l.5-4m5.5 4l-.5-4"></path></svg>
          )}
        </button>
      </HoverCard.Target>

      <HoverCard.Dropdown style={{padding: '2px 8px', borderRadius: '8px', marginTop: '10px', backgroundColor: (colorScheme === 'dark')? 'rgb(0,0,0)':'white'}}>
          <Text size="xs" style={{fontFamily: 'monospace'}}>{detailsVisibility ? 'Masquer' : 'Voir'} les actions</Text>
      </HoverCard.Dropdown>

    </HoverCard>

  );
}