import { HoverCard, Text, useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

export default function BlogButton({
  className
}:{
  className?: string
}) {
  function capture() {
    console.log('capturing');
  }
  useHotkeys([
    ['B', () => capture()],
  ]);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  return (
    <HoverCard shadow="md" openDelay={1300} closeOnEscape={true}>
      <HoverCard.Target>
        <button className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1-4 0V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a3 3 0 0 0 3 3h11M8 8h4m-4 4h4m-4 4h4"></path></svg>     
        </button>
      </HoverCard.Target>
      <HoverCard.Dropdown style={{padding: '2px 8px', borderRadius: '8px', marginTop: '10px', backgroundColor: (colorScheme === 'dark')? 'rgb(0,0,0)':'white'}}>
          <Text size="xs" style={{fontFamily: 'monospace'}}>Visiter notre blog <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style={{display: 'inline-flex', marginBottom: '1px'}}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"></path></svg></Text>
      </HoverCard.Dropdown>

    </HoverCard>

  );
}