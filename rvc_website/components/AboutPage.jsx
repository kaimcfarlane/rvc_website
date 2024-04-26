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
        <Image src={CircleBackground} class="w-[500px] h-[500px] z-0 absolute top-[25.5%] left-[10%]" alt='CircleBackground'></Image>
        <Image src={DocPatient_pic1} class="w-[500px] h-[500px] z-1 absolute top-[25%] left-[10.5%]" alt='DocPatientPic1'></Image>
      </div>
      <div class='w-[700px] h-[50%] p-[20px] static ml-[50%] mt-[15%] rounded-md justify-center'>
        <div class='flex flex-col items-center text-black justify-center font-<K2D> text-5xl pb-[25px]'>
            <div class="flex flex-row pb-[20px] w-[100%] justify-left">
                <div class="mr-[2%]">Our</div>
                <div class="text-primary">Optometry,</div>
            </div>
            <div class="flex flex-row w-[100%] justify-left">
                <div class="mr-[2%]">Your</div>
                <div class="text-secondary">Eye Care</div>
            </div>
        </div>
        <div class='flex text-black justify-center font-<K2D> text-3xl pt-[20px] pb-[27px]'>
          <div class="">
            Welcome to Reese Vision Care, where we are dedicated to providing exceptional (eye care) vision services to satisfy all your eye care needs. <mark class="text-primary bg-transparent">Dr. Reese</mark> and her staff are highly knowledgeable and devoted to excellent patient care. We offer quality eye care in a comfortable, family-friendly environment.
          </div>
        </div>
      </div>
    </section>
  )
}
