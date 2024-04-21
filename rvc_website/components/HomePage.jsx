import React from 'react'
import rvc_offiefloor from '../public/rvc_office/rvc_officefloor.jpeg'
import { useRef } from 'react'
import GreenBanner from './GreenBanner'




export default function HomePage() {
  return (
    <section class="bg-[url('../public/rvc_office/rvc_officefloor.jpeg')] bg-cover bg-center h-[100vh] w-[100%] fixed">
      <div class='bg-opaque_white w-[530px] h-[140px] static ml-[60%] mt-[32%] rounded-md shadow-md'>
        <div class='flex text-black justify-center font-<K2D> text-3xl pt-[20px] pb-[27px]'>
          <div class='mr-[2%]'>COME</div>
          <div class='text-primary mr-[2%]'>SEE</div>
          <div class='mr-[2%]'>THE</div>
          <div class='mr-[2%]'>DIFFERENCE</div>
        </div>
        <div class='flex justify-center mt-[-15px] '>
          <button className="btn btn-wide btn-primary text-white font-<K2D> text-lg normal-case font-normal">Request Appointment</button>
        </div>
      </div>
      <GreenBanner></GreenBanner>
    </section>
  )
}
