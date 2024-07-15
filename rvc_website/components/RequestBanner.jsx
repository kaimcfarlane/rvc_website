import React from 'react'
import ContactModal from './ContactModal'

export default function RequestBanner({text}) {
  return (
    <div class="pb-[2.4vw] pt-[2.45vw] bg-secondary w-[100%]">
        <div class="flex justify-evenly items-center content-center font-<K2D> text-2xl normal-case font-normal text-center pr-[1%] pl-[1%]">
            <div class='text-[2.38vw] leading-10'>{text}</div>
            <div class='flex justify-center'>
            <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn w-[17vw] h-[3vw] btn-outline text-white font-<K2D> text-[1.3vw] leading-7 normal-case font-normal">Request Appointment</button>
            <dialog id="my_modal_1" className="modal"><ContactModal text={"Fill out form to request an appointment"} placeholder={"Appointment Request"} isJobForm={false}></ContactModal></dialog>
            </div>
        </div>
    </div>
  )
}
