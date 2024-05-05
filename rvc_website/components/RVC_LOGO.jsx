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
    <div onClick={() => changeRoute("home")} class="left-[2%] relative cursor-pointer">
      <Image src={rvc_logo_img} width={100} height={100} alt='RVC_Logo'></Image>
    </div>
  )
}
