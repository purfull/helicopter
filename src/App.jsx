import { useState } from 'react'
import Hero from './components/Hero'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Model } from './components/Helicopter';
import City from './components/City'
import Footer from './components/Footer'
import News from './components/News'
import { useGLTF, useScroll } from '@react-three/drei'
import {Scroll} from '@react-three/drei'
import Nav from './components/Nav';
import Controls from './components/Controles';
import Cloud from './components/Cloud';

function App() {
  const scroll = useScroll()

  return (
    <>
    
      {/* <Model /> */}
      <Nav />
      <Controls />
      <Hero />
      <Cloud />
      {/* <City /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
