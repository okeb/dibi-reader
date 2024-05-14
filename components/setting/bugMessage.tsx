import { HoverCard, Text } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

export default function BugMesssageButton({
  className
}:{
  className?: string
}) {
  function capture() {
    console.log('capturing');
  }
  useHotkeys([
    ['C', () => capture()],
  ]);
  return (
    <HoverCard shadow="md" openDelay={1300} closeOnEscape={true}>
      <HoverCard.Target>
        <button className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h8m-8 4h6m1 5l-3 3l-3-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5.5M19 16v3m0 3v.01"></path></svg>    
        </button>
      </HoverCard.Target>
      <HoverCard.Dropdown style={{padding: '2px 8px', borderRadius: '8px', marginTop: '10px', backgroundColor: 'rgb(0,0,0)'}}>
          <Text size="xs" style={{fontFamily: 'monospace'}}>Un bug? prevenez-nous</Text>
      </HoverCard.Dropdown>

    </HoverCard>

  );
}