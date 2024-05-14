'use client'
import { useState } from 'react';
import { useFullscreen, getHotkeyHandler, useScrollIntoView, useStateHistory, useHotkeys } from '@mantine/hooks';
import { Button, TextInput, Text, Group, Box, Code } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  const [verset, handlers, history] = useStateHistory(1);
  const { toggle, fullscreen } = useFullscreen();
  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const handleSubmit = () => {
    notifications.show({ title: 'Your message', message: value })
  };
  const handleSave = () => {
    notifications.show({ title: 'You saved', color: 'teal', message: value })
  };
  useHotkeys([
    ['mod+J', () => console.log('Toggle color scheme')],
    ['K', () => notifications.show({ title: 'Information', color: 'red', message: "you'll press K touch" })],
    ['D', () => notifications.show({ title: 'Information', color: 'red', message: "you'll press D touch" })],
    ['F', () => toggle()],
    ['alt+mod+shift+X', () => console.log('Rick roll')],
  ]);
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <div 
      className="px-56 mx-auto"
      style={{
          width: '100%',
          marginTop: '50px',
          display: "flex",
          justifyContent: "center",
        }}
        onKeyDown={getHotkeyHandler([
          ['mod+Enter', handleSubmit],
          ['ArrowDown', handleSave],
        ])}
    >
      <TextInput
        placeholder="Your message"
        label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </Button>
      {/* <Group justify="center">
      <Button
        onClick={() =>
          scrollIntoView({
            alignment: 'center',
          })
        }
      >
        Scroll to target
      </Button>
      <Box
        style={{
          width: '100%',
          height: '450vh',
          backgroundColor: 'var(--mantine-color-blue-light)',
        }}
      >
        <Code block>{JSON.stringify(history, null, 2)}</Code>
      </Box>
      <Text ref={targetRef}>Hello there</Text>
    </Group> */}
    </div>
  );
}

export default Demo;
