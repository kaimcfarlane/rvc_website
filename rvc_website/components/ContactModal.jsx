import React from 'react'
import Image from 'next/image'
import mail_icon from '../public/gen_icons/mail_icon_1.png'
import staff_pic from '../public/rvc_glasses/staff3_.jpg'

export default function ContactModal({text, placeholder, isJobForm, subText}) {

  return (
    // Need to media query where on small screen size have w-60vw and h-26vw
    <>
    <div className="modal-box bg-primary max-w-[100vw] w-[70vw] h-[30.3vw]">
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <Image src={staff_pic} className='w-[35vw] h-[27vw]'></Image>
            </figure>
            <div className="card-body">
                    <div className="modal-action flex flex-col justify-center">
                        <h1 className="text-[1.5vw] leading-[2vw] text-black text-wrap text-center mt-[-0.7vw] mb-[1vw]">{text}</h1>
                        <p className="font-bold text-[0.7vw] text-[#3f3f46] text-center mb-[2vw]">{subText}</p>
                        <form method="POST" class="flex flex-col justify-center"  action="https://formsubmit.co/962bba0145eff702958c47797e1eae17" enctype="multipart/form-data">
                        {/* if there is a button in form, it will close the modal */}
                        <label className="input input-bordered flex h-[3vw] items-center gap-2 mb-[0.39vw]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 fill-[#544f4f]"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow text-black" placeholder="Name" name='name' />
                        </label>
                        <label className="input input-bordered flex h-[3vw] items-center gap-2 mb-[0.39vw]">
                            {/* <Image src={mail_icon} alt='MailIcon'></Image> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 fill-[#544f4f]"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="email" className="grow text-black" placeholder="Email" name='email' />
                        </label>
                        <label className="input input-bordered flex items-center h-[3vw] gap-2 mb-[0.39vw]">
                            <input class="text-black" type="text" placeholder={placeholder} name='request' />
                        </label>
                        {isJobForm ? (<input type="file" className="file-input file-input-primary file-input-bordered w-full max-w-xs mb-[10px] text-black" name="attachment" accept="application/pdf"></input>) : (<></>)}
                        <input type="hidden" name="_autoresponse" value="We have recieved your request. Our office will contact you within 24-48 hrs. Thank you! - Reese Vision Care"></input>
                        <button className="btn btn-secondary text-white" type="submit">Send</button>
                        </form>
                    </div>
                    {/* <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    </div> */}
                    </div>
            </div>
    </div>
    <form method="dialog" className="modal-backdrop">
    <button>close</button>
    </form>
    </>
  )
}
