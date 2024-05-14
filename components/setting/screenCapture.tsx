import { HoverCard, Text } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

export default function ScreenCaptureButton({
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 7h1a2 2 0 0 0 2-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"></path><path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></path></g></svg>
        </button>
      </HoverCard.Target>

      <HoverCard.Dropdown style={{padding: '2px 8px', borderRadius: '8px', marginTop: '10px', backgroundColor: 'rgb(0,0,0)'}}>
          <Text size="xs" style={{fontFamily: 'monospace'}}>Capture d'écran</Text>
      </HoverCard.Dropdown>

    </HoverCard>

  );
}