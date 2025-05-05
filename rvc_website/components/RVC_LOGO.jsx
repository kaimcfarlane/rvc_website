import React from 'react'
import rvc_logo_img from '../public/rvc_logos/RVCLOGO1.jpg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import next from 'next'

export default function RVC_LOGO({changeRoute}) {

  // const router = useRouter()
  // const goHomeRoute = () => {
  //   router.push('/');
  // }

  return (
    // Div below needs to be %5
    // onClick={() => goHomeRoute()}
    <div onClick={() => changeRoute("home")} className="left-[2%] mt-[0.1vw] relative cursor-pointer">
      <Image src={rvc_logo_img} className='w-[6.5vw] h-[6.5vs]' alt='RVC_Logo'></Image>
    </div>
  )
}
