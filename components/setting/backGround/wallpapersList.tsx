import { Group, Paper, Stack, Image, Text, BackgroundImage } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import superjson from 'superjson';


export default function WallpapersList({setWallpaper}:{setWallpaper:Function}) {
  interface wallpaper {
    label:string,
    url: string,
    vignetteUrl?: string
  }
    const defaultValue = {
      label: 'sans',
      url: '',
      vignetteUrl: 'https://images.pexels.com/photos/3745234/pexels-photo-3745234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }
  const [value, setValue] = useLocalStorage<wallpaper>({
    key: 'diBiWallpaperSaved',
    defaultValue,
    serialize: superjson.stringify,
    deserialize: (str) =>
      str === undefined ? defaultValue : superjson.parse(str),
  });

  function changeWallpaper(item: wallpaper) {
    setWallpaper(item.url)
    setValue(item)
  }

  const data = [
    {
      label: 'sans',
      url: '',
      vignetteUrl: 'https://images.pexels.com/photos/3745234/pexels-photo-3745234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      label: 'Chutes vertes',
      url: 'https://images.pexels.com/photos/10399171/pexels-photo-10399171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/10399171/pexels-photo-10399171.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      label: 'Paysage enneigé',
      url: 'https://images.pexels.com/photos/3684926/pexels-photo-3684926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/3684926/pexels-photo-3684926.jpeg??auto=compress&cs=tinysrgb&w=200'
    },
    {
      label: 'golden Hour',
      url: 'https://images.pexels.com/photos/1222561/pexels-photo-1222561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/1222561/pexels-photo-1222561.jpeg??auto=compress&cs=tinysrgb&w=200'
    },
    {
      label: 'Fleurs rouges',
      url: 'https://images.pexels.com/photos/641369/pexels-photo-641369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/641369/pexels-photo-641369.jpeg??auto=compress&cs=tinysrgb&w=200'
    },
    {
      label: 'Petals Jaunes',
      url: 'https://images.pexels.com/photos/18330772/pexels-photo-18330772/free-photo-of-petales-orange-fleur-beaute.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/18330772/pexels-photo-18330772.jpeg??auto=compress&cs=tinysrgb&w=200'
    },
    {
      label: 'bigFlower',
      url: 'https://images.pexels.com/photos/18289330/pexels-photo-18289330/free-photo-of-fleur-beaute-rose-brillant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/18289330/pexels-photo-18289330.jpeg??auto=compress&cs=tinysrgb&w=200'
    },
    {
      label: 'Flowers',
      url: 'https://images.pexels.com/photos/18591317/pexels-photo-18591317/free-photo-of-pavot-de-californie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/18591317/pexels-photo-18591317.jpeg??auto=compress&cs=tinysrgb&w=200'
    },
    {
      label: 'Canions',
      url: 'https://images.pexels.com/photos/9503195/pexels-photo-9503195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/9503195/pexels-photo-9503195.jpeg??auto=compress&cs=tinysrgb&w=200'
    },
    {
      label: 'Roches Rouges',
      url: 'https://images.pexels.com/photos/13386955/pexels-photo-13386955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/13386955/pexels-photo-13386955.jpeg??auto=compress&cs=tinysrgb&w=200'
    },
    {
      label: 'Dessert',
      url: 'https://images.pexels.com/photos/58535/pexels-photo-58535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/58535/pexels-photo-58535.jpeg??auto=compress&cs=tinysrgb&w=200'
    },
    {
      label: 'Pillones',
      url: 'https://images.pexels.com/photos/18358109/pexels-photo-18358109/free-photo-of-monument-etats-unis-usa-ciel-bleu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/18358109/pexels-photo-18358109.jpeg??auto=compress&cs=tinysrgb&w=200'
    },
    {
      label: 'Montagne eneigé',
      url: 'https://images.pexels.com/photos/1125268/pexels-photo-1125268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/1125268/pexels-photo-1125268.jpeg??auto=compress&cs=tinysrgb&w=200'
    },
    {
      label: 'Ciel Bleu',
      url: 'https://images.pexels.com/photos/2542012/pexels-photo-2542012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/2542012/pexels-photo-2542012.jpeg??auto=compress&cs=tinysrgb&w=200'
    },
    {
      label: 'Couché de soleil',
      url: 'https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      vignetteUrl: 'https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg??auto=compress&cs=tinysrgb&w=200'
    },
  ]

  setWallpaper(value.url)
  return (
    <Paper 
      shadow="lg" 
      radius="md" 
      p="xl" 
      style={{
        padding: '0 20px', 
        width: 'fit-contain',
        backgroundColor: 'rgba(20, 20, 20, .5)', 
        border: '1px solid rgba(255, 255, 255,.1)', 
        borderRadius: '12px', 
        backdropFilter: 'blur(4px)' 
      }}
    >
      <Group justify="center" gap="md">
        {data.map((item, index) => (
          <div>
            <Stack
            key={index}
            align="center"
            justify="center"
            gap="md"
            onClick={() => changeWallpaper(item)}
            style={{
              border: `${item.url == value.url ? '1px solid rgba(255,255,255,.5)' : '1px solid rgba(255,255,255,0)'}`, 
              backgroundColor: `${item.url == value.url ? 'rgba(255,255,255,.15)' : ''}`, 
              transition: "all .2s", 
              borderRadius: '12px', 
              padding: "5px"
            }}
            >
              <BackgroundImage
                radius="md"
                src={item.vignetteUrl ? item.vignetteUrl : item.url }
              >
                <Stack style={{
                  width: '90px',
                  height: '70px',
                }}></Stack>
              </BackgroundImage>

              
              <Text
              ff={'monospace'}
              size='10px'
              >
                {item.label}
              </Text>
            </Stack>
          </div>
        ))}
      </Group>
    </Paper>
  )
}