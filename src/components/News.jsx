
import gsap from 'gsap'
import { useEffect, useLayoutEffect } from 'react';





const News = () => {

    useLayoutEffect(() => {

        gsap.fromTo('#news-img', {
            width: '25vw',
            opacity: 0
          },
          {
            width: '60vw',
            ease: 'sine.out',
            duration: 1.5,
            opacity: 1

          });
        gsap.fromTo('#news-img', 
        {
          width: '60vw',

        },{ 
                scrollTrigger: { 
                trigger: '#city' ,
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
            } ,
            width: '100vw',
              
        });
    },[])

    return ( 
        <div className="h-[100vh] w-[100vw] ">
            <img id='news-img' className='w-[60vw] mt-[35vh] mx-auto -z-20 ' src="./news-text.png" alt="" />
            <button className='bg-black text-white text-[30px] px-14 py-3 rounded-lg ml-[40%] mt-[75vh] z-50 '>CONTACT</button>
        </div>
     );
}
 
export default News;