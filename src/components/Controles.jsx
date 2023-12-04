
import gsap from 'gsap'
import { useLayoutEffect } from 'react';
const Controls = () => {
    
    useLayoutEffect(() => {
    
},[]);
    return ( 
        <>
        {/* <div className="fixed"> */}
            <div className=" fixed  top-[50%] translate-y-[-50%] left-14 h-[40vh] z-50 flex flex-col justify-between nav-links ">
                <span className="page-no">01</span>
                <div className="line"></div>
                <span className="page-no">02</span>
            </div>
            <div className=" h-[20vh] fixed top-[50%] translate-y-[-50%] right-14 -z-10  flex flex-col justify-between  ">
                <i className="fi fi-brands-facebook"></i>
                <i className="fi fi-brands-twitter-alt-circle"></i>
                <i className="fi fi-brands-instagram"></i>
            </div>

        {/* </div> */}
        </>
     );
}
 
export default Controls;