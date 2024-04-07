import React from 'react'
import rvc_offiefloor from '../public/rvc_office/rvc_officefloor.jpeg'
import { useRef } from 'react'




export default function HomePage() {
  return (
    <section class="bg-[url('../public/rvc_office/rvc_officefloor.jpeg')] bg-cover bg-center h-[100vh] w-[100%] fixed">
      <div class='bg-opaque_white w-[400px] h-[120px] static ml-[60%] mt-[45%] rounded-md'>
        <div class='flex text-black justify-center font-<K2D> text-[1.6rem] p-[5%]'>
          <div class='mr-[2%]'>COME</div>
          <div class='text-primary mr-[2%]'>SEE</div>
          <div class='mr-[2%]'>THE</div>
          <div class='mr-[2%]'>DIFFERENCE</div>
        </div>
        <div class='flex justify-center mt-[-15px]'>
          <button className="btn btn-wide btn-primary text-white">Wide</button>
        </div>
        <div></div>
      </div>
    </section>
  )
}
