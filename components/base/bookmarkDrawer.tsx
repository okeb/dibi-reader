import { useDisclosure, useHotkeys } from '@mantine/hooks';
import { Drawer, Button, ScrollArea } from '@mantine/core';

export default function BookmarkDrawer() {
  const [opened, { open, close }] = useDisclosure(false);
  useHotkeys([
    ['H', () => {
      if (opened) {
        close()
      }else{
        open()
      }
    }],
  ]);
  return (
    <>
      <Drawer offset={8} radius="md" 
      style={{ backgroundColor: "red"}}
      opened={opened} 
      onClose={close} 
      size='xs' 
      scrollAreaComponent={ScrollArea.Autosize} 
      title="Authentication" 
      closeButtonProps={{
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12h10m-10 0l4 4m-4-4l4-4M4 4v16"></path></svg>,
      }}
      // withCloseButton={false}
      >
        {/* <HistoryList sharedHistory={sharedHistory}/> */}
      </Drawer>

      {/* <Button onClick={open}>Open Drawer</Button> */}
    </>
  );
}