import { Container, Drawer, Space, Image, UnstyledButton, Kbd, Text } from '@mantine/core';
import { useDisclosure, useHotkeys } from '@mantine/hooks';
import SearchInput from './searchInput';
import logoDiBi from './../../public/assets/images/logo dibi-black-forexport.svg'
import logoDiBiBlack from './../../public/assets/favicon/safari-pinned-tab.svg'
import SearchInputPlus from './searchInputPlus';

export default function SearchDrawer({goto}:{goto:Function}) {
  const [opened, { open, close }] = useDisclosure(false);

  useHotkeys([
    ['mod+K', () => {
      if (opened) {
        close();
      }else {
        open();
      }
    }],
    ['shift+R', () => {
      if (opened) {
        close();
      }else {
        open();
      }
    }],
  ])

  return (
    <>
      <Drawer position="top" size="100%" withCloseButton={true} opened={opened} onClose={close} overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}>
        <Container w={`500px`}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'fixed',
              padding: '.5rem 0',
              top: '0',
              left: '0',
              right: '0',
              zIndex: "10000",
            }}
          >
            <Image 
              lightHidden
              src={logoDiBi.src}
              style={{color: 'red'}}
              alt="logo of DiBi Reader"
              w={60}
            />
            <Image 
              darkHidden
              src={logoDiBiBlack.src}
              style={{width: '37px', paddingBlock: '10px'}}
              alt="logo of DiBi Reader"
            />
          </div>
          <Space h={100}/>
          {/* <SearchInput goto={goto}  close={close}/> */}
          <SearchInputPlus goto={goto}  close={close} />
        </Container>
      </Drawer>
      {!opened ? (
        <div style={{ position: 'absolute', bottom: '20px', right: '0', left: '0', width: "100%", borderRadius: "7px", padding: "3px 4px", display: 'flex', alignItems: "center", justifyContent: "center"}}>
          <UnstyledButton onClick={open} >
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Text ff={`monospace`} size='xs'>&nbsp;Recherchez avec&nbsp;</Text>
              <Kbd size="xs" style={{display: 'inline-block', }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 5A1.5 1.5 0 0 1 8 6.5V8H6.5a1.5 1.5 0 1 1 0-3M10 8V6.5A3.5 3.5 0 1 0 6.5 10H8v4H6.5a3.5 3.5 0 1 0 3.5 3.5V16h4v1.5a3.5 3.5 0 1 0 3.5-3.5H16v-4h1.5A3.5 3.5 0 1 0 14 6.5V8zm0 2h4v4h-4zm6-2V6.5A1.5 1.5 0 1 1 17.5 8zm0 8h1.5a1.5 1.5 0 1 1-1.5 1.5zm-8 0v1.5A1.5 1.5 0 1 1 6.5 16z"></path></svg>
              </Kbd>
              <span style={{marginInline: '2px'}}>+</span>
              <Kbd size="xs"><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16m0-8h2l8-8m-8 8l8 8"></path></svg></Kbd>
            </div>
          </UnstyledButton>

        </div>
      ):(<></>)}
    </>
  );
}