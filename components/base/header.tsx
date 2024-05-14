import React from 'react'
import Image from "next/image"
import logoDiBi from './../../public/assets/images/logo dibi-black-forexport.svg'

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
        src={logoDiBi}
        alt="logo of DiBi Reader"
        width={60}
      />
    </div>
  )
}
