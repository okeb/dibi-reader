import { HoverCard, Text } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

export default function StatisticsButton({
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12V8m6 4v-2m-3 2v-1M3 4h18M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4m-8 12v4m-3 0h6"></path></svg>      
        </button>
      </HoverCard.Target>
      <HoverCard.Dropdown style={{padding: '2px 8px', borderRadius: '8px', marginTop: '10px', backgroundColor: 'rgb(0,0,0)'}}>
          <Text size="xs" style={{fontFamily: 'monospace'}}>Stats d'utilisation</Text>
      </HoverCard.Dropdown>

    </HoverCard>

  );
}