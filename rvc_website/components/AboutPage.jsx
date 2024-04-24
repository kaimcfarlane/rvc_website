import React from 'react'
import Image from 'next/image'
import GreenBanner from './GreenBanner'
import ContactModal from './ContactModal'
import CircleBackground from '../public/rvc_office/Ellipse_1.png'
import DocPatient_pic1 from '../public/rvc_office/doctor_patient_circle_1.png'

export default function AboutPage() {
  return (
    <section class="h-[100vh] w-[100%] absolute">
      <div>
        <Image src={CircleBackground} class="w-[400px] h-[400px] z-0 absolute top-[25.5%] left-[15%]" alt='CircleBackground'></Image>
        <Image src={DocPatient_pic1} class="w-[400px] h-[400px] z-1 absolute top-[25%] left-[15.5%]" alt='DocPatientPic1'></Image>
      </div>
      <div class='bg-opaque_white w-[700px] h-[300px] static ml-[50%] mt-[20%] rounded-md shadow-md justify-center'>
        <div class='flex flex-col items-center text-black justify-center font-<K2D> text-3xl'>
            <div class="flex flex-row">
                <div class="mr-[2%]">OUR</div>
                <div class="text-primary">OPTOMETRY,</div>
            </div>
            <div class="flex flex-row">
                <div class="mr-[2%]">YOUR</div>
                <div class="text-secondary">EYE CARE</div>
            </div>
        </div>
        <div class='flex text-black justify-center font-<K2D> text-3xl pt-[20px] pb-[27px]'>
          <div>Welcome to Reese Vision Care, where we are dedicated to providing exceptional (eye care) vision services to satisfy all your eye care needs.  Dr. Reese and her staff are highly knowledgeable and devoted to excellent patient care. We offer quality eye care in a comfortable, family-friendly environment. </div>
        </div>
      </div>
    </section>
  )
}
