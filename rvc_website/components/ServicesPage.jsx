import React from 'react'
import Image from 'next/image'
import DocPatient_pic2 from '../public/rvc_glasses/doc_patient2.jpg'
import BlueRectangle from '../public/gen_icons/blue_rectangle_background.png'
import GreenRectangleBanner from '@/components/GreenRectangleBanner'

export default function ServicesPage() {
  return (
    <>
        <section class="h-[100vh] w-[100%] absolute">
        <div class="absolute font-<K2D> text-6xl w-[100%] flex justify-center top-[15%]">
            <div class="text-black">Our <mark class="text-primary bg-transparent">Services</mark></div>
        </div>
        <div>
            <Image src={BlueRectangle} class="w-[600px] h-[400px] z-1 absolute top-[34.3%] left-[55.7%]" alt='BlueRectagneBackground'></Image>
            <Image src={DocPatient_pic2} class="w-[600px] h-[400px] z-1 absolute top-[33%] left-[55%] brightness-125" alt='DocPatientPic2'></Image>
        </div>
        <div class='w-[30%] h-[50%] p-[20px] static ml-[10%] mt-[16%] rounded-md justify-center'>
            <div class='flex flex-col items-center text-black justify-center font-<K2D> text-5xl pb-[25px]'>
                <div class="flex flex-row pb-[10px] w-[100%] justify-left">
                <div class="mr-[2%] text-secondary text-4xl">Eye Exams</div>
                </div>
                <div class="flex flex-col w-[100%] justify-left mb-[10px]">
                    <div class="text-lg mb-[10px]">Regardless of your age or health, it’s important to have regular eye exams.</div>
                    <div class="text-lg">We examine, treat, and diagnose:</div>
                </div>
                <div class="flex flex-row w-[100%] justify-left text-lg ml-[7%]">
                    <ul class="list-disc">
                        <li>Nearsightedness</li>
                        <li>Farsightedness</li>
                        <li>Astigmatism</li>
                        <li>Presbyopia</li>
                        <li>Glaucoma</li>
                        <li>Cataracts</li>
                        <li>Retinal Diseases</li>
                        <li>Hypertension</li>
                        <li>Diabetes</li>
                    </ul>
                </div>
            </div>
        </div>
        <GreenRectangleBanner></GreenRectangleBanner>
        </section>
    </>
  )
}
