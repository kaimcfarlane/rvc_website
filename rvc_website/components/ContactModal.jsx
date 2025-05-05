import React from 'react'
import Image from 'next/image'
import mail_icon from '../public/gen_icons/mail_icon_1.png'
import staff_pic from '../public/rvc_glasses/staff3_.jpg'
import glasses_wall_pic from '../public/rvc_glasses/rvc_glasseswall1.jpg'

export default function ContactModal({text, placeholder, isJobForm, subText}) {

  return (
    isJobForm ? 
    (
    <>
        <div className="modal-box bg-primary max-w-[100vw] w-[70vw] h-[32.2vw] 2xl:h-[30.9vw]">
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <Image src={glasses_wall_pic} className='w-[35vw] h-[29.03vw]'></Image>
            </figure>
            <div className="card-body">
                    <div className="modal-action flex flex-col justify-center mt-[0] 2xl:mt-[3vw]">
                        <h1 className="text-[1.5vw] leading-[2vw] text-black text-wrap text-center mt-[-0.3vw] mb-[1vw] 2xl:mt-[-1.9vw]">{text}</h1>
                        <p className="font-bold text-[0.7vw] text-[#3f3f46] text-center mb-[2vw]">{subText}</p>
                        <form method="POST" className="flex flex-col justify-center"  action="https://formsubmit.co/962bba0145eff702958c47797e1eae17" enctype="multipart/form-data">
                        {/* if there is a button in form, it will close the modal */}
                        <label className="input input-bordered flex h-[3vw] items-center gap-2 mb-[0.39vw]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[1.07vw] h-[1.04vw] opacity-70 fill-[#544f4f]"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow text-black  text-[1.05vw]" placeholder="Name" name='name' />
                        </label>
                        <label className="input input-bordered flex h-[3vw] items-center gap-2 mb-[0.39vw]">
                            {/* <Image src={mail_icon} alt='MailIcon'></Image> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[1.07vw] h-[1.04vw] opacity-70 fill-[#544f4f]"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="email" className="grow text-black text-[1.05vw]" placeholder="Email" name='email' />
                        </label>
                        <label className="input input-bordered flex items-center h-[3vw] gap-2 mb-[0.39vw]">
                            <input className="text-black  text-[1.05vw]" type="text" placeholder={placeholder} name='request' />
                        </label>
                        <input type="file" className="file-input file-input-primary file-input-bordered max-w-[100vw] h-[3.17vw] w-[37vw] mb-[0.67vw] text-black" name="attachment" accept="application/pdf"></input>
                        <input type="hidden" name="_autoresponse" value="We have recieved your request. Our office will contact you within 24-48 hrs. Thank you! - Reese Vision Care"></input>
                        <button className="btn btn-secondary h-[3.2vw] text-[0.93vw] text-white" type="submit">Send</button>
                        </form>
                    </div>
                    </div>
            </div>
    </div>
    <form method="dialog" className="modal-backdrop">
    <button>close</button>
    </form>
    </>
    ) : 
    (
        <>
        <div className="modal-box bg-primary max-w-[100vw] w-[70vw] h-[30.8vw] 2xl:h-[29.6vw]">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <Image src={staff_pic} className='w-[35vw] h-[27.6vw]'></Image>
                </figure>
                <div className="card-body">
                        <div className="modal-action flex flex-col justify-center mt-[0] 2xl:mt-[3vw]">
                            <h1 className="text-[1.5vw] leading-[2vw] text-black text-wrap text-center mt-[-0.7vw] mb-[1vw]">{text}</h1>
                            <p className="font-bold text-[0.7vw] text-[#3f3f46] text-center mb-[2vw]">{subText}</p>
                            <form method="POST" className="flex flex-col justify-center"  action="https://formsubmit.co/962bba0145eff702958c47797e1eae17" enctype="multipart/form-data">
                            {/* if there is a button in form, it will close the modal */}
                            <label className="input input-bordered flex h-[3vw] items-center gap-2 mb-[0.39vw]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[1.07vw] h-[1.04vw] opacity-70 fill-[#544f4f]"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow text-black  text-[1.05vw]" placeholder="Name" name='name' />
                            </label>
                            <label className="input input-bordered flex h-[3vw] items-center gap-2 mb-[0.39vw]">
                                {/* <Image src={mail_icon} alt='MailIcon'></Image> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[1.07vw] h-[1.04vw] opacity-70 fill-[#544f4f]"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email" className="grow text-black text-[1.05vw]" placeholder="Email" name='email' />
                            </label>
                            <label className="input input-bordered flex h-[3vw] items-center gap-2 mb-[0.39vw]">
                                {/* Heroicons solid phone icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[1.07vw] h-[1.04vw] opacity-70 fill-[#544f4f]">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>
                                <input type="tel" className="grow text-black text-[1.05vw]" placeholder="Phone Number" name='phone' />
                            </label>
                            <label className="input input-bordered flex items-center h-[3vw] gap-2 mb-[0.39vw]">
                                <input className="text-black  text-[1.05vw]" type="text" placeholder={placeholder} name='request' />
                            </label>
                            <input type="hidden" name="_autoresponse" value="We have recieved your request. Our office will contact you within 24-48 hrs. Thank you! - Reese Vision Care"></input>
                            <button className="btn btn-secondary h-[3.2vw] text-[0.93vw] text-white" type="submit">Send</button>
                            </form>
                    </div>
                </div>
            </div>
    </div>
    <form method="dialog" className="modal-backdrop">
    <button>close</button>
    </form>
    </>
    )
  )
}
