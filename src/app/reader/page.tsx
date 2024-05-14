'use client'

import React from 'react';
import { useState } from 'react';
import Header from '../../../components/base/header';
import ReaderCenter from './body/reader-center';
import Footer from '../../../components/base/footer';
import { useHotkeys } from '@mantine/hooks';

export default function page() {
  const [ seeDetails, setSeeDEtails] = useState(true)
  useHotkeys([
    ['mod+/', () => setSeeDEtails(!seeDetails)],
  ]);
  return (
    <div>
      <Header/>
      <main>
        <ReaderCenter openEye={seeDetails}/>
      </main>
      <Footer openEye={seeDetails} />
    </div>
  )
}
