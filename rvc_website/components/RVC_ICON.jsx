import React from 'react'
import rvc_icon_img from '../public/rvc_logos/rvc_logo1.png'
import Image from 'next/image'
import next from 'next'

export default function RVC_ICON() {
  return (
    <div class="relative">
    <a href=''>
    <Image src={rvc_icon_img} width={100} height={100} alt='RVC_Logo'></Image>
    </a>
    </div>
  )
}


