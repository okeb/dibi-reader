import { HoverCard, Text } from '@mantine/core';
import { useFullscreen, useHotkeys } from '@mantine/hooks';

export default function BackGroundButton({
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 8h.01M11 20H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4"></path><path d="m4 15l4-4c.928-.893 2.072-.893 3 0l3 3m0 0l1-1c.31-.298.644-.497.987-.596m2.433 3.206a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z"></path></g></svg>
        </button>
      </HoverCard.Target>

      <HoverCard.Dropdown style={{padding: '2px 8px', borderRadius: '8px', marginTop: '10px', backgroundColor: 'rgb(0,0,0)'}}>
          <Text size="xs" td={fullscreen ? "line-through" : '' } style={{fontFamily: 'monospace'}}>Changer le fond d'écran</Text>
      </HoverCard.Dropdown>

    </HoverCard>

  );
}