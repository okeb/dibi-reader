import { HoverCard, Popover, Text } from '@mantine/core';
import KeyBindingList from './keyBinding/list';
import { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';

export default function KeyBindingButton({
  className
}:{
  className?: string
}) {
  const [opened, setOpened] = useState(false);
  useHotkeys([
    ['mod+,', () => setOpened(!opened)],
  ]);
  return (
    <Popover
      position="top-end"
      offset={77}
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      opened={opened}
    >
      
      <Popover.Target>
        <div>
          <HoverCard shadow="md" openDelay={1700} closeOnEscape={true}>
            <HoverCard.Target>
              <button className={className} style={{ opacity: `${opened ? 1 : .3}`}} onClick={() => setOpened(!opened)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='icon'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4 2v.01m4-.01v.01m4-.01v.01m4-.01v.01M6 14v.01M18 14v.01M10 14l4 .01"></path></svg>
              </button>
            </HoverCard.Target>
            {!opened ? (
              <HoverCard.Dropdown style={{padding: '2px 8px', borderRadius: '8px', marginTop: '10px', backgroundColor: 'rgb(0,0,0)'}}>
                  <Text size="xs" style={{fontFamily: 'monospace'}}>liste des Commandes</Text>
              </HoverCard.Dropdown>
            ): (
              <></>
            )}
          </HoverCard>
        </div>
      </Popover.Target>

      <Popover.Dropdown style={{
        maxWidth: '450px',
        width:  '450px',
        backgroundColor: 'transparent',
        border: 'none',
        marginLeft: '10px'
      }}>
        <div>
          <KeyBindingList />
        </div>
      </Popover.Dropdown>
    </Popover>

  );
}