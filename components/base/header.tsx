import React from 'react'
import logoDiBi from './../../public/assets/images/logo dibi-black-forexport.svg'
import logoDiBiBlack from './../../public/assets/favicon/safari-pinned-tab.svg'
import { readLocalStorageValue } from '@mantine/hooks';
import { Image } from '@mantine/core'


export default function Header() {
  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      padding: '.3rem 0',
      top: '0',
      left: '0',
      right: '0',
      backdropFilter: "blur(7px)",
      backgroundColor: 'rgba( 20, 20, 20, 0)',
    }}>
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
  )
}
