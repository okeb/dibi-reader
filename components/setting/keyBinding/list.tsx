import { Kbd, Grid, Text, Paper, Divider, Space, Stack, useMantineColorScheme } from '@mantine/core';
import classes from './list.module.scss'
import { readLocalStorageValue, useOs } from '@mantine/hooks';

export default function KeyBindingList() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const os = useOs();
  return (
    <Paper shadow="lg" radius="md" p="xl" style={{padding: '0 20px', backgroundColor: (colorScheme === 'dark')? 'rgba(20, 20, 20, .5)':'rgba(255, 255, 255, .5)', border: '1px solid rgba(255, 255, 255,.1)', borderRadius: '12px', backdropFilter: 'blur(4px)' }}>
      <Stack
        align="stretch"
        justify="center"
        gap="xs"
      >
        <Grid style={{display: 'flex', alignItems: 'center', marginBottom: '7px', paddingInline: '20px' }}>
          <Grid.Col span={3} style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center'
          }}>
            <Kbd>{(os == 'macos') ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 5A1.5 1.5 0 0 1 8 6.5V8H6.5a1.5 1.5 0 1 1 0-3M10 8V6.5A3.5 3.5 0 1 0 6.5 10H8v4H6.5a3.5 3.5 0 1 0 3.5 3.5V16h4v1.5a3.5 3.5 0 1 0 3.5-3.5H16v-4h1.5A3.5 3.5 0 1 0 14 6.5V8zm0 2h4v4h-4zm6-2V6.5A1.5 1.5 0 1 1 17.5 8zm0 8h1.5a1.5 1.5 0 1 1-1.5 1.5zm-8 0v1.5A1.5 1.5 0 1 1 6.5 16z"></path></svg>
            ): (
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17.8 20l-12-1.5c-1-.1-1.8-.9-1.8-1.9V7.4c0-1 .8-1.8 1.8-1.9l12-1.5c1.2-.1 2.2.8 2.2 1.9V18c0 1.2-1.1 2.1-2.2 1.9zM12 5v14m-8-7h16"></path></svg>
            )}</Kbd>&nbsp;+&nbsp;<Kbd><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16m0-8h2l8-8m-8 8l8 8"></path></svg></Kbd>
          </Grid.Col>
          <Grid.Col span={9} style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '20px',
          }}>
            <Text className={classes.text} style={{fontFamily: 'monospace', fontSize: '12px'}}>
              Faire un recherche.
            </Text>
          </Grid.Col>
        </Grid>

        <Grid style={{display: 'flex', alignItems: 'center', marginBottom: '7px', paddingInline: '20px' }}>
          <Grid.Col span={3} style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center'
          }}>
            <Kbd><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4 4m-4-4l4-4"></path></svg></Kbd>
          </Grid.Col>
          <Grid.Col span={9} style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '20px',
          }}>
            <Text className={classes.text} style={{fontFamily: 'monospace', fontSize: '12px'}}>
              Afficher le verset précédent.
            </Text>
          </Grid.Col>
        </Grid>

        <Grid style={{display: 'flex', alignItems: 'center', marginBottom: '7px', paddingInline: '20px' }}>
          <Grid.Col span={3} style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center'
          }}>
            <Kbd><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-4 4l4-4m-4-4l4 4"></path></svg></Kbd>
          </Grid.Col>
          <Grid.Col span={9} style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '20px',
          }}>
            <Text className={classes.text} style={{fontFamily: 'monospace', fontSize: '12px'}}>
              Afficher le verset suivant.
            </Text>
          </Grid.Col>
        </Grid>
        
        <Grid style={{display: 'flex', alignItems: 'center', marginBottom: '7px', paddingInline: '20px' }}>
          <Grid.Col span={3} style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center'
          }}>
            <Kbd>{(os == 'macos') ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 5A1.5 1.5 0 0 1 8 6.5V8H6.5a1.5 1.5 0 1 1 0-3M10 8V6.5A3.5 3.5 0 1 0 6.5 10H8v4H6.5a3.5 3.5 0 1 0 3.5 3.5V16h4v1.5a3.5 3.5 0 1 0 3.5-3.5H16v-4h1.5A3.5 3.5 0 1 0 14 6.5V8zm0 2h4v4h-4zm6-2V6.5A1.5 1.5 0 1 1 17.5 8zm0 8h1.5a1.5 1.5 0 1 1-1.5 1.5zm-8 0v1.5A1.5 1.5 0 1 1 6.5 16z"></path></svg>
            ): (
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17.8 20l-12-1.5c-1-.1-1.8-.9-1.8-1.9V7.4c0-1 .8-1.8 1.8-1.9l12-1.5c1.2-.1 2.2.8 2.2 1.9V18c0 1.2-1.1 2.1-2.2 1.9zM12 5v14m-8-7h16"></path></svg>
            )}</Kbd>&nbsp;+&nbsp;<Kbd><span style={{ paddingInline: '4px'}}>,</span></Kbd>
          </Grid.Col>
          <Grid.Col span={9} style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '20px',
          }}>
            <Text className={classes.text} style={{fontFamily: 'monospace', fontSize: '12px'}}>
              Ouvrir/fermer la liste des commandes.
            </Text>
          </Grid.Col>
        </Grid>

        <Grid style={{display: 'flex', alignItems: 'center', marginBottom: '7px', paddingInline: '20px' }}>
          <Grid.Col span={3} style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center'
          }}>
            <Kbd>Shift</Kbd>&nbsp;+&nbsp;<Kbd><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m4-10l-4-4M8 9l4-4"></path></svg></Kbd>
          </Grid.Col>
          <Grid.Col span={9} style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '20px',
          }}>
            <Text className={classes.text} style={{fontFamily: 'monospace', fontSize: '12px'}}>
              Augmenter la police du texte.
            </Text>
          </Grid.Col>
        </Grid>

        <Grid style={{display: 'flex', alignItems: 'center', marginBottom: '7px', paddingInline: '20px' }}>
          <Grid.Col span={3} style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center'
          }}>
            <Kbd>Shift</Kbd>&nbsp;+&nbsp;<Kbd><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m4-4l-4 4m-4-4l4 4"></path></svg></Kbd>
          </Grid.Col>
          <Grid.Col span={9} style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '20px',
          }}>
            <Text className={classes.text} style={{fontFamily: 'monospace', fontSize: '12px'}}>
              Diminuer la police du texte.
            </Text>
          </Grid.Col>
        </Grid>
        
        <Grid style={{display: 'flex', alignItems: 'center', marginBottom: '7px', paddingInline: '20px' }}>
          <Grid.Col span={3} style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center'
          }}>
            <Kbd>{(os == 'macos') ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 5A1.5 1.5 0 0 1 8 6.5V8H6.5a1.5 1.5 0 1 1 0-3M10 8V6.5A3.5 3.5 0 1 0 6.5 10H8v4H6.5a3.5 3.5 0 1 0 3.5 3.5V16h4v1.5a3.5 3.5 0 1 0 3.5-3.5H16v-4h1.5A3.5 3.5 0 1 0 14 6.5V8zm0 2h4v4h-4zm6-2V6.5A1.5 1.5 0 1 1 17.5 8zm0 8h1.5a1.5 1.5 0 1 1-1.5 1.5zm-8 0v1.5A1.5 1.5 0 1 1 6.5 16z"></path></svg>
            ): (
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17.8 20l-12-1.5c-1-.1-1.8-.9-1.8-1.9V7.4c0-1 .8-1.8 1.8-1.9l12-1.5c1.2-.1 2.2.8 2.2 1.9V18c0 1.2-1.1 2.1-2.2 1.9zM12 5v14m-8-7h16"></path></svg>
            )}</Kbd>&nbsp;+&nbsp;<Kbd><span style={{ paddingInline: '4px'}}>'</span></Kbd>
          </Grid.Col>
          <Grid.Col span={9} style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '20px',
          }}>
            <Text className={classes.text} style={{fontFamily: 'monospace', fontSize: '12px'}}>
              Modifier le fond d'écran.
            </Text>
          </Grid.Col>
        </Grid>

        
        
        <Space />
        <Divider 
          my="xs"
          variant="dashed"
          labelPosition="center"
        />
        <Space />

        <Grid style={{display: 'flex', alignItems: 'center', marginBottom: '7px', paddingInline: '20px' }}>
          <Grid.Col span={3} style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center'
          }}>
            <Kbd>Shift</Kbd>&nbsp;+&nbsp;<Kbd><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20V4h5.5a4 4 0 0 1 0 9H7m5 0l5 7"></path></svg></Kbd>
          </Grid.Col>
          <Grid.Col span={9} style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '20px',
          }}>
            <Text className={classes.text} style={{fontFamily: 'monospace', fontSize: '12px'}}>
              Charger un autre verset.
            </Text>
          </Grid.Col>
        </Grid>

        <Grid style={{display: 'flex', alignItems: 'center', marginBottom: '7px', paddingInline: '20px' }}>
          <Grid.Col span={3} style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center'
          }}>
            <Kbd>{(os == 'macos') ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.925 19q-.55 0-1-.262T14.2 18L7.85 7H4q-.425 0-.712-.288T3 6t.288-.712T4 5h3.85q.55 0 1 .263T9.575 6l6.35 11H20q.425 0 .713.288T21 18t-.288.713T20 19zM16 7q-.425 0-.712-.288T15 6t.288-.712T16 5h4q.425 0 .713.288T21 6t-.288.713T20 7z"></path></svg>
            ): 'Alt'}</Kbd>&nbsp;+&nbsp;<Kbd><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 4H7v16m0-8h8"></path></svg></Kbd>
          </Grid.Col>
          <Grid.Col span={9} style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '20px',
          }}>
            <Text className={classes.text} style={{fontFamily: 'monospace', fontSize: '12px'}}>
              Mettre en plein écran.
            </Text>
          </Grid.Col>
        </Grid>

        <Grid style={{display: 'flex', alignItems: 'center', marginBottom: '7px', paddingInline: '20px' }}>
          <Grid.Col span={3} style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center'
          }}>
            <Kbd>{(os == 'macos') ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 5A1.5 1.5 0 0 1 8 6.5V8H6.5a1.5 1.5 0 1 1 0-3M10 8V6.5A3.5 3.5 0 1 0 6.5 10H8v4H6.5a3.5 3.5 0 1 0 3.5 3.5V16h4v1.5a3.5 3.5 0 1 0 3.5-3.5H16v-4h1.5A3.5 3.5 0 1 0 14 6.5V8zm0 2h4v4h-4zm6-2V6.5A1.5 1.5 0 1 1 17.5 8zm0 8h1.5a1.5 1.5 0 1 1-1.5 1.5zm-8 0v1.5A1.5 1.5 0 1 1 6.5 16z"></path></svg>
            ): (
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17.8 20l-12-1.5c-1-.1-1.8-.9-1.8-1.9V7.4c0-1 .8-1.8 1.8-1.9l12-1.5c1.2-.1 2.2.8 2.2 1.9V18c0 1.2-1.1 2.1-2.2 1.9zM12 5v14m-8-7h16"></path></svg>
            )}</Kbd>&nbsp;+&nbsp;<Kbd><span style={{ paddingInline: '4px'}}>/</span></Kbd>
          </Grid.Col>
          <Grid.Col span={9} style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '20px',
          }}>
            <Text className={classes.text} style={{fontFamily: 'monospace', fontSize: '12px'}}>
              Masquer tous les contrôles.
            </Text>
          </Grid.Col>
        </Grid>

        <Grid style={{display: 'flex', alignItems: 'center', marginBottom: '7px', paddingInline: '20px' }}>
          <Grid.Col span={3} style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center'
          }}>
            <Kbd>{(os == 'macos') ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 5A1.5 1.5 0 0 1 8 6.5V8H6.5a1.5 1.5 0 1 1 0-3M10 8V6.5A3.5 3.5 0 1 0 6.5 10H8v4H6.5a3.5 3.5 0 1 0 3.5 3.5V16h4v1.5a3.5 3.5 0 1 0 3.5-3.5H16v-4h1.5A3.5 3.5 0 1 0 14 6.5V8zm0 2h4v4h-4zm6-2V6.5A1.5 1.5 0 1 1 17.5 8zm0 8h1.5a1.5 1.5 0 1 1-1.5 1.5zm-8 0v1.5A1.5 1.5 0 1 1 6.5 16z"></path></svg>
            ): (
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17.8 20l-12-1.5c-1-.1-1.8-.9-1.8-1.9V7.4c0-1 .8-1.8 1.8-1.9l12-1.5c1.2-.1 2.2.8 2.2 1.9V18c0 1.2-1.1 2.1-2.2 1.9zM12 5v14m-8-7h16"></path></svg>
            )}</Kbd>&nbsp;+&nbsp;<Kbd><span style={{ paddingInline: '4px'}}>.</span></Kbd>
          </Grid.Col>
          <Grid.Col span={9} style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '20px',
          }}>
            <Text className={classes.text} style={{fontFamily: 'monospace', fontSize: '12px'}}>
              Faire apparaitre les étoiles.
            </Text>
          </Grid.Col>
        </Grid>
      </Stack>
    </Paper>
  );
}