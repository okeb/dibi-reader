import { HoverCard, Text } from '@mantine/core';
import { useFullscreen, useHotkeys } from '@mantine/hooks';

export default function FullScreenButton({
  className
}:{
  className?: string
}) {
  const { toggle, fullscreen } = useFullscreen();
  useHotkeys([
    ['Alt + F', () => toggle()],
  ]);
  return (
    <HoverCard shadow="md" openDelay={1300} closeOnEscape={true}>

      <HoverCard.Target>
        <button onClick={toggle} className={className}>
            {fullscreen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"></path></svg>
              ):(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2"></path></svg>
              )
            }
        </button>
      </HoverCard.Target>

      <HoverCard.Dropdown style={{padding: '2px 8px', borderRadius: '8px', marginTop: '10px', backgroundColor: 'rgb(0,0,0)'}}>
          <Text size="xs" td={fullscreen ? "line-through" : '' } style={{fontFamily: 'monospace'}}>Plein écran</Text>
      </HoverCard.Dropdown>

    </HoverCard>

  );
}