
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
// import group from './Helicopter'
gsap.registerPlugin(ScrollTrigger)
const City = React.forwardRef((prop, ref) => {
    const city = useRef()

    useLayoutEffect(() => {

        gsap.to('#city-txt-img', { 
                scrollTrigger: { 
                trigger: '#city' ,
                start: "top bottom",
                end: "top top",
                scrub: true,
            } ,
            width: '45%',
              
        });
        gsap.to('#city-img', { 
                scrollTrigger: { 
                trigger: '#footer' ,
                start: "top bottom",
                end: "top top",
                scrub: true,
            } ,
            width: '92%',
              
        });
    },[])

    return ( 
        <div ref={city} id='city' className="h-[100vh] w-[100vw] ">
            <img id='city-txt-img' className=" w-[85%] mx-auto mt-[10%] " src="./city-text.png" alt=""  />
            <img id='city-img' className='w-[80%] mx-auto relative bottom-10  ' src="./city.svg" alt="" srcset="" />
            
        </div>
     );
})
 
export default City;