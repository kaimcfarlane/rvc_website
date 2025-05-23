import React from 'react'
import ContactModal from './ContactModal'

export default function RequestBanner({text}) {
  return (
    <div className="pb-[2.4vw] pt-[2.45vw] bg-secondary w-[100%]">
        <div className="flex justify-evenly items-center content-center text-2xl normal-case font-normal text-center pr-[1%] pl-[1%]">
            <div className='text-[2.38vw] leading-10'>{text}</div>
            <div className='flex justify-center'>
            <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn w-[17vw] h-[3vw] btn-outline text-white text-[1.3vw] leading-7 normal-case font-normal">Request Appointment</button>
            <dialog id="my_modal_1" className="modal"><ContactModal text={"Interested in scheduling an appointment!"} subText={"Fill out your information below and we'll contact you as soon as possible"} placeholder={"Appointment Request"} isJobForm={false}></ContactModal></dialog>
            </div>
        </div>
    </div>
  )
}
