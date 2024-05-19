import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactModal from './ContactModal'
import white_phone_icon from '../public/gen_icons/phone_icon_3.png'
import white_email_icon from '../public/gen_icons/email_icon_5.png'
import white_location_logo from '../public/gen_icons/white_location_logo_1.svg'

export default function ContactPage() {
  return (
    <>
      <section class="h-[100vh] w-[100%] absolute">
        <div class="absolute font-<K2D> text-6xl w-[100%] flex justify-center top-[15%]">
            <div class="text-black">Come <mark class="text-primary bg-transparent">See</mark> Us!</div>
        </div>
        {/* <div class="absolute z-1 top-[30%] left-[55%] border-solid border-grey rounded-md border-8 shadow-xl">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.7704956179414!2d-80.259265324264!3d26.17160289154566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90689e16cfc25%3A0xd96cfd401d12afad!2sReese%20Vision%20Care!5e0!3m2!1sen!2sus!4v1714844901669!5m2!1sen!2sus" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
        {/* <div class="absolute ml-[10%] mt-[16%]">
          <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn btn-wide btn-secondary text-white font-<K2D> text-lg normal-case font-normal">Have a Request?</button>
          <dialog id="my_modal_1" className="modal"><ContactModal text={"Fill out form below to send us a message"} placeholder={"Message"} isJobForm={false}></ContactModal></dialog>
        </div> */}
        <div className='flex flex-row-reverse absolute left-[15%] top-[30%] card w-[70%] bg-primary shadow-xl static justify-center p-[1%]'>
          {/* <div class="flex flex-row pb-[10px] w-[100%] justify-left">
            <div class="mr-[2%] text-secondary text-4xl">Contact Information</div>
          </div> */}
          <div class="z-1 border-solid border-grey rounded-md border-8 shadow-xl">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.7704956179414!2d-80.259265324264!3d26.17160289154566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90689e16cfc25%3A0xd96cfd401d12afad!2sReese%20Vision%20Care!5e0!3m2!1sen!2sus!4v1714844901669!5m2!1sen!2sus" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
            <div className="card-body" class='flex flex-col items-center text-black justify-center font-<K2D> text-5xl'>
                <div class="flex flex-col w-[100%] justify-left mb-[10px] text-white ml-[3%]">
                  <div class="flex">
                    <Link href="tel:9547464009" target="_blank">
                      <div><Image src={white_phone_icon} width="24" height="24" viewBox="0 0 24 24" className="fill-current mb-[3px] mt-[9%]"></Image></div>
                    </Link>
                    <div class="text-lg mb-[10px] ml-[4%]">(954)-746-4009</div>
                  </div>
                  <div class="flex">
                    <Link href="mailto:reesevisioncontacts@gmail.com" target="_blank">
                      <div><Image src={white_email_icon} width="29" height="29" viewBox="0 0 24 24" className="fill-current mb-[3px] mt-[9%]"></Image></div>
                    </Link>
                    <div class="text-lg mb-[10px] ml-[4%]">reesevisioncare@gmail.com</div>
                  </div>
                  <div class="flex">
                    <Link href="http://maps.google.com/?q=Reese Vision Care" target="_blank">
                        <div><Image src={white_location_logo} width="29" height="29" viewBox="0 0 24 24" className="fill-current mb-[3px] mt-[9%]"></Image></div>
                    </Link>
                    <div class="text-lg mb-[10px] ml-[4%]">3801 N University Dr #301, Sunrise, FL 33351</div>
                  </div>
                  <div class="text-lg">Hours:</div>
                </div>
                <div class="flex flex-row w-[100%] justify-left text-lg ml-[3%] text-white">
                    <ul class="list-none">
                        <li>Monday: 10AM-4PM</li>
                        <li>Tuesday: 9AM-12PM, 1-6PM</li>
                        <li>Wednesday: 10AM-4PM</li>
                        <li>Thursday: 9AM-12PM, 1-6PM</li>
                        <li>Friday: 11AM-1PM, 2-7PM</li>
                        <li>Saturday: (By appointment only)</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
