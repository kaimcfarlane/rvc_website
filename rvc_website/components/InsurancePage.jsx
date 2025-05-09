import React from 'react'
import Image from 'next/image'
import InsuranceLogoBar from './InsuranceLogoBar'
import glasses_1 from "../public/gen_icons/glasses_icon_1.png"
import glasses_2 from "../public/gen_icons/glasses_icon_2.png"
import blue_ellipse from "../public/gen_icons/ellipse_blue_1.png"
import green_ellipse from "../public/gen_icons/ellipse_green_1.png"

export default function InsurancePage() {
  return (
    <>
      <section className="h-[100vh] w-[100%] absolute">
        <div className="absolute text-[3.97vw] leading-none w-[100%] flex justify-center top-[15%]">
            <div className="text-black">Accepted <mark className="text-primary bg-transparent">Insurances</mark></div>
        </div>
        {/* Background designs commented out below */}
        {/* <div>
            <Image src={glasses_1} Name"w-[200px] h-[200px] z-1 absolute top-[5%] left-[-2%] brightness-125" alt='DocPatientPic2'></Image>
            <Image src={green_ellipse} className="w-[200px] h-[200px] z-1 absolute top-[3%] left-[-3%]" alt='BlueRectagneBackground'></Image>
            <Image src={glasses_2} className="w-[200px] h-[200px] z-1 absolute bottom-[-2%] right-[-1%] brightness-125 rotate-[10deg]" alt='DocPatientPic2'></Image>
            <Image src={blue_ellipse} className="w-[200px] h-[200px] z-1 absolute bottom-[-4%] right-[-2%]" alt='BlueRectagneBackground'></Image>
        </div> */}
        <div className='pl-[7%] pr-[7%] static mt-[16%] rounded-md justify-center'>
            <div className='flex flex-col items-center text-black justify-center text-5xl pb-[25px]'>
                <div className="flex flex-row pb-[0.7vw] w-[100%] justify-left">
                <div className="mr-[2%] text-black text-[1.6vw] leading-8 font-semibold">Vision and Medical Plans</div>
                </div>
                <div className="flex flex-col w-[100%] justify-left mb-[2.5vw]">
                    <div className="text-[1.2vw] leading-[1.85vw] mb-[0.7vw]">Our office accepts most vision plans and some medical plans. Vision plans are primarily for routine eye exams, glasses and contact lenses only. Medical plans usually cover an eye exam when there is an eye-related medical problem, such as, eye infections, eye injury, cataracts (among many others). Some medical plans may also cover routine eye care. Please provide us with your vision and medical insurance plan information so that we can make sure you are utilizing your full benefits. You may contact us at (954) 746-4009 to verify your insurance coverage.</div>
                    <InsuranceLogoBar/>
                </div>
            </div>
        </div>
        <div className='pl-[7%] pr-[7%] static rounded-md justify-center'>
            <div className='flex flex-col items-center text-black justify-center text-5xl pb-[25px]'>
                <div className="flex flex-row pb-[0.7vw] w-[100%] justify-left">
                <div className="mr-[2%] text-black text-[1.6vw] leading-8 font-semibold">Payment and FSA</div>
                </div>
                <div className="flex flex-col w-[100%] justify-left mb-[0.7vw]">
                    <div className="text-[1.2vw] leading-[1.85vw] mb-[0.7vw]">We accept Cash, Personal Checks, American Express, Master Card, Visa and Care Credit. We also accept Flexible Spending Account cards.  Most FSA plans allow for the purchase of an eye exam or eyewear. Please contact your plan administrator for complete details about your FSA plan.</div>
                </div>
            </div>
        </div>
        <div className='pl-[7%] pr-[7%] static mt-[1%] rounded-md justify-center'>
            <div className='flex flex-col items-center text-black justify-center text-5xl pb-[25px]'>
                <div className="flex flex-row pb-[0.7vw] w-[100%] justify-left">
                <div className="mr-[2%] text-black text-[1.6vw] leading-8 font-semibold">Care Credit</div>
                </div>
                <div className="flex flex-col w-[100%] justify-left mb-[0.7vw]">
                    <div className="text-[1.2vw] leading-[1.85vw] mb-[0.7vw]">As a service to our patients, we are pleased to offer the CareCredit card, the nation&apos;s leading patient payment program. CareCredit lets you begin your procedure immediately—then pay for it over time with low monthly payments that are easy to fit into your monthly budget.</div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
