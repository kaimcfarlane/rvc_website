import React from 'react'
import rvc_logo_img from '../public/rvc_logos/RVCLOGO1.jpg'
import Image from 'next/image'
import next from 'next'

export default function RVC_LOGO() {
  return (
    // Div below needs to be %5
    <div class="left-5/100 relative">
    <a href=''>
    <Image src={rvc_logo_img} width={100} height={100}></Image>
    </a>
    </div>
  )
}
