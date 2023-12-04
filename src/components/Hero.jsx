import { Model } from "./Helicopter";

import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import News from './News'
import City from "./City";
import Footer from "./Footer";
import gsap from "gsap";
import {Scroll} from '@react-three/drei'
import { useEffect, useLayoutEffect, useRef } from "react";
const Hero = () => {
  const grp = useRef()

  useLayoutEffect(() => {
    gsap.to(grp, {
      y: 1000,
      duration: 3,
    });

  })





    return ( 
        <>
            
      <div className="h-[100vh] w-[100vw] fixed z-50 ">
        <Canvas className="h-[100vh] w-[100vw] fixed">
              <ambientLight intensity={1} />
              <directionalLight position={[1,1,1]} intensity={2} />
              <directionalLight position={[-1,0,1]} color={'white'} intensity={2} />
              {/* <directionalLight position={[-2,0,0]} color={'white'} intensity={2} /> */}
              <directionalLight position={[0,2,1]} color={'white'} intensity={3} />
              <directionalLight position={[0,2,0]} color={'white'} intensity={2} />
              {/* <directionalLight position={[0,-4,0]} color={'white'} intensity={2} /> */}
                  <Model ref={grp} />
                  {/* <OrbitControls /> */}
        </Canvas>
                  {/* <Scroll className='absolute z-[-1] ' html>
                    <News />
                    <City />
                    <Footer />
                  </Scroll> */}

      </div>
      
      <News />
      <City />
      <Footer />
        </>
     );
}
 
export default Hero;