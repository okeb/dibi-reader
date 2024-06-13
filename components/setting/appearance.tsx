import { HoverCard, Text, useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { useState } from 'react';

export default function AppearanceButton({
  className
}:{
  className?: string
}) {
  const [darkmode, setDarkmode] = useState(false);
  function capture() {
    setDarkmode(!darkmode)
    console.log('capturing');
  }
  useHotkeys([
    ['C', () => capture()],
  ]);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  return (
    <HoverCard shadow="md" openDelay={1300} closeOnEscape={true}>
      <HoverCard.Target>
        <button className={className} onClick={capture}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2m0-12a2 2 0 0 1 2 2a2 2 0 0 1 2-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2M9 18a6 6 0 0 1 6-6a6 6 0 0 1-6-6a6 6 0 0 1-6 6a6 6 0 0 1 6 6"></path></svg>
        </button>
      </HoverCard.Target>

      <HoverCard.Dropdown style={{padding: '2px 8px', borderRadius: '8px', marginTop: '10px', backgroundColor: (colorScheme === 'dark')? 'rgb(0,0,0)':'white'}}>
          <Text size="xs" style={{fontFamily: 'monospace'}}>Apparence</Text>
      </HoverCard.Dropdown>

    </HoverCard>

  );
}