import React from 'react'
import rvc_offiefloor from '../public/rvc_office/rvc_officefloor.jpeg'
import { useRef } from 'react'



export default function HomePage() {
  return (
    <section class="bg-[url('../public/rvc_office/rvc_officefloor.jpeg')] bg-cover bg-center h-[100vh] w-[100%] fixed">
      <div class='bg-white opacity-85 w-[400px] h-[120px] static ml-[60%] mt-[45%] rounded-md'>
        <div class='flex text-black justify-center'>
          <div>COME</div>
          <div class='text-[#0094DA]'>SEE</div>
          <div>THE DIFFERENCE</div>
        </div>
        <div></div>
      </div>
    </section>
  )
}
