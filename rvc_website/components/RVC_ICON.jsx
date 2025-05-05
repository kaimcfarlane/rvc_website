import React, { useRef, useEffect } from 'react'
import rvc_icon_img from '../public/rvc_logos/rvc_logo1.png'
import Image from 'next/image'
import next from 'next'

export default function RVC_ICON({background, white}) {
  const imgContainer = useRef();

  const changeImgBackground = () => {
    console.log("FOOTER STUFF RAN");
    console.log(background);
    if (background == "blue") {
        imgContainer.current.style.backgroundColor = white;
        imgContainer.current.style.borderRadius = "50%";
        imgContainer.current.style.paddingLeft = "5px";
        imgContainer.current.style.marginRight = "5px";
    }
    // else if (background == "blue") {

    // }
  }
  
  useEffect(() => {
    changeImgBackground();
  },[])

  return (
    <div ref={imgContainer} className="relative">
    <a href=''>
    <Image src={rvc_icon_img} className='w-[6.58vw] h-[5.25vw]' alt='RVC_Logo'></Image>
    </a>
    </div>
  )
}


