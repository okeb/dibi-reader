import { HoverCard, Text, useMantineColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import superjson from 'superjson';

export default function ToggleModeButton({
  className
}:{
  className?: string
}) {

  const { setColorScheme, clearColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const [localColorScheme, setLocalColorScheme] = useLocalStorage<
    'light' | 'dark'>({
    key: 'local-color-scheme',
    defaultValue: 'dark',
    serialize: superjson.stringify,
    deserialize: (str) =>
      str === undefined ? 'dark' : superjson.parse(str),
  });
  

  const toggleLocalColorScheme = () => {
    if( localColorScheme === 'dark') {
      setColorScheme('light')
      setLocalColorScheme('light')
    }else {
      setColorScheme('dark')
      setLocalColorScheme('dark')
    }
  }
  useHotkeys([
    ['Alt+O', () => toggleLocalColorScheme()],
  ]);
  return (
    <HoverCard shadow="md" openDelay={1300} closeOnEscape={true}>
      <HoverCard.Target>
        <button className={className} onClick={() => {
          if (localColorScheme === 'light') {
            setColorScheme('dark')
            setLocalColorScheme('dark')
          }else {
            setColorScheme('light')
            setLocalColorScheme('light')
          }}}>
          {localColorScheme === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 1 0-5.656-5.656a4 4 0 0 0 5.656 5.656m-8.485 2.829l-1.414 1.414M6.343 6.343L4.929 4.929m12.728 1.414l1.414-1.414m-1.414 12.728l1.414 1.414M4 12H2m10-8V2m8 10h2m-10 8v2"></path></svg>
          ):(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992zm5 1a2 2 0 0 0 2 2a2 2 0 0 0-2 2a2 2 0 0 0-2-2a2 2 0 0 0 2-2m2 7h2m-1-1v2"></path></svg>

          )}
        </button>
      </HoverCard.Target>

      <HoverCard.Dropdown style={{padding: '2px 8px', borderRadius: '8px', marginTop: '10px', backgroundColor: (localColorScheme === 'light')? 'white' : 'rgb(0,0,0)'}}>
          <Text size="xs" style={{fontFamily: 'monospace'}}>Mode {localColorScheme === 'dark' ? 'dark' : 'light'}</Text>
      </HoverCard.Dropdown>

    </HoverCard>

  );
}