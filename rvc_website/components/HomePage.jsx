import React from 'react'
import rvc_offiefloor from '../public/rvc_office/rvc_officefloor.jpeg'
import { useRef } from 'react'
import GreenCircleBanner from './GreenBanner'
import ContactModal from './ContactModal'



export default function HomePage() {

  // console.log("Height: " + window.innerHeight);
  // console.log("Width: " + window.innerWidth);

  return (
      <section className="bg-[url('../public/rvc_office/rvc_officefloor.jpeg')] bg-cover bg-center h-[100vh] w-[100%] absolute">
    <div className="bg-opaque_white w-[35vw] h-[9.3vw] static ml-[60%] mt-[32%] rounded-md shadow-md">
      <div className="flex text-black justify-center text-[1.99vw] pt-[1.31vw] pb-[1.8vw]">
        <div className="mr-[2%]">COME</div>
        <div className="text-primary mr-[2%]">SEE</div>
        <div className="mr-[2%]">THE</div>
        <div className="mr-[2%]">DIFFERENCE</div>
      </div>
      <div className="flex justify-center mt-[-15px]">
        <button
          onClick={() => document.getElementById('my_modal_1').showModal()}
          className="btn w-[17vw] h-[2.5vw] btn-primary text-white text-[1vw] normal-case font-normal"
        >
          Request Appointment
        </button>
        <dialog id="my_modal_1" className="modal">
          <ContactModal
            text="Interested in scheduling an appointment!"
            subText="Fill out your information below and we'll contact you as soon as possible"
            placeholder="Appointment Request"
            isJobForm={false}
          />
        </dialog>
      </div>
    </div>
    <GreenCircleBanner />
  </section>
  )
}
