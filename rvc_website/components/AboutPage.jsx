import React from 'react'
import Image from 'next/image'
import GreenBanner from './GreenBanner'
import ContactModal from './ContactModal'
import CircleBackground from '../public/rvc_office/Ellipse_1.png'
import DocPatient_pic1 from '../public/rvc_office/doctor_patient_circle_1.png'
import DoctorHeadshot from '../public/rvc_glasses/doctor_headshot.jpeg'

export default function AboutPage() {
  return (
    <>
    <section class="h-[100vh] w-[100%] absolute">
      <div>
        <Image src={CircleBackground} class="w-[500px] h-[500px] z-0 absolute top-[25.5%] left-[10%]" alt='CircleBackground'></Image>
        <Image src={DocPatient_pic1} class="w-[500px] h-[500px] z-1 absolute top-[25%] left-[10.5%]" alt='DocPatientPic1'></Image>
      </div>
      <div class='w-[45%] h-[50%] p-[20px] static ml-[50%] mt-[15%] rounded-md justify-center'>
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
    <section class="top-[100%] h-[100vh] w-[100%] absolute">
      <div>
        <Image src={DoctorHeadshot} class="w-[350px] h-[500px] z-1 absolute top-[25%] left-[65%] border-solid border-secondary rounded-lg border-4 shadow-lg" alt='DocPatientPic1'></Image>
      </div>
      <div class='w-[45%] h-[50%] p-[20px] static ml-[10%] mt-[15%] rounded-md justify-center'>
        <div class='flex flex-col items-center text-black justify-center font-<K2D> text-5xl pb-[25px]'>
            <div class="flex flex-row pb-[10px] w-[100%] justify-left">
            <div class="mr-[2%]">Melanie Reese</div>
                <div class="text-primary">O.D.</div>
            </div>
            <div class="flex flex-row w-[100%] justify-left">
                <div class="text-secondary text-3xl">Doctor of Optometry</div>
            </div>
        </div>
        <div class='flex text-black justify-center font-<K2D> text-3xl pt-[20px] pb-[27px]'>
          <div class="">
          Dr. Melanie A. Reese is a <mark class="text-primary bg-transparent">Board</mark> Certified Optometrist and has practiced in South Florida for over 20 years.  
          Dr. Reese graduated from Nova Southeastern University, College of Optometry with Highest Honors in 2002.  
          She is also a member of the <mark class="text-primary bg-transparent">American Optometric Association</mark>, the Florida Optometric Association and the Broward 
          County Optometric Association.
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
