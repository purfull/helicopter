
import gsap from 'gsap'
import { useLayoutEffect } from 'react';


const Nav = () => {

    useLayoutEffect(() => {

        gsap.fromTo('#nav', {
            y: -50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'sine.out'
        })

        gsap.to('.nav-links', { 
            scrollTrigger: { 
            trigger: '#footer' ,
            start: "top 150px",
            end: "top top",
            scrub: true,
        } ,
        color: 'white'
          
    });
    gsap.to('.line', { 
        scrollTrigger: { 
        trigger: '#footer' ,
        start: "top 150px",
        end: "top top",
        scrub: true,
    } ,
    borderColor: 'white'
      
});
        gsap.to('#contact-btn', { 
                scrollTrigger: { 
                trigger: '#footer' ,
                start: "top 150px",
                end: "top top",
                scrub: true,
            } ,
            backgroundColor: 'white',
            color: 'black'
              
        });
    },[])


    return ( 
        <div id='nav' className="w-[100vw] h-[12vh] fixed flex items-center justify-between z-50 ">

            <span className="ml-8 text-[28px] font-extrabold  nav-links ">ABC</span>

            <div className="w-[40%] text-[24px] flex items-center justify-evenly nav-links ">
                <span>Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Location</span>
            </div>

            <button id='contact-btn' className='bg-black text-white  text-[20px] px-10 py-2 rounded-lg mr-8 '>CONTACT</button>

        </div>
     );
}
 
export default Nav;