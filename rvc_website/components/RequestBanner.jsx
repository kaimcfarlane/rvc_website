import React from 'react'
import ContactModal from './ContactModal'

export default function RequestBanner({text}) {
  return (
    <div class="pb-[2%] pt-[2%] bg-secondary w-[100%]">
        <div class="flex items-baseline justify-evenly content-center font-<K2D> text-2xl normal-case font-normal text-center pr-[1%] pl-[1%]">
            <div class='text-4xl'>{text}</div>
            <div class='flex justify-center mt-[-15px] '>
            <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn btn-wide btn-outline text-white font-<K2D> text-lg normal-case font-normal">Request Appointment</button>
            <dialog id="my_modal_1" className="modal"><ContactModal text={"Fill out form to request an appointment"} placeholder={"Appointment Request"} isJobForm={false}></ContactModal></dialog>
            </div>
        </div>
    </div>
  )
}
