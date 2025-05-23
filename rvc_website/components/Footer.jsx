import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactModal from './ContactModal'
import RVC_ICON from './RVC_ICON'
import white_email_icon from '../public/gen_icons/email_icon_5.png'
import white_phone_icon from '../public/gen_icons/phone_icon_3.png'
import black_email_icon from '../public/gen_icons/email_icon_7.svg'
import black_phone_icon from '../public/gen_icons/phone_icon_4.svg'
import black_instagram_icon from '../public/gen_icons/black_instagram_logo_2.svg'
import white_instagram_icon from '../public/gen_icons/white_instagram_logo_1.svg'
import RequestBanner from './RequestBanner'

export default function Footer({changeRoute, background, pages}) {

  const footerTopContainer = useRef();
  const footerBotContainer = useRef();
  const footerTitle = useRef();

  const blue = "#0094DA";
  const white = "#FFFFFF";

  let footerTitleClass = "opacity-80";

  const [footerPosition, setPosition] = useState(1);

  // Below is not updating correclty becuase we cna't make the passed in value for footerTitleClass above be updated after intialization with the code we have. Also need to change the bold and also need to deal with logo not showing correctly.

  const changeFooterColor = () => {
    if (background == "white") {
        footerTopContainer.current.style.backgroundColor = white;
        footerBotContainer.current.style.backgroundColor = white;
        // footerTitleClass = "opacity-0";
    }
    else if (background == "blue") {
        footerTopContainer.current.style.backgroundColor = blue;
        footerBotContainer.current.style.backgroundColor = blue;
        footerTopContainer.current.style.color = white;
        footerBotContainer.current.style.color = white;
        // footerTitleClass = "opacity-100";
    }
    console.log(background);
  }

  const setFooterPosition = () => {
    console.log(pages);
    let top = (pages*100).toString() + "%";
    setPosition(top);
  }

  useEffect(() => {
    changeFooterColor();
    setFooterPosition();
  }, [])

  return (
    <div className="w-[100%] absolute" style={{top: footerPosition}}>
      {
        background == "blue" && <RequestBanner text={"Request an Appointment and See the Difference Now"}/>
      }
        <footer ref={footerTopContainer} className="footer p-[2.63vw] bg-white text-base-content">
          {/* 0.925vw */}
        <nav className='gap-[0.53vw]'>
            <h6 ref={footerTitle} className={`footer-title ${footerTitleClass} text-[0.925vw]` }>Information</h6> 
            <Link className='text-[0.925vw]' href="https://www.facebook.com/reesevisioncare/" target="_blank">
              <div className="link link-hover">Branding</div>
            </Link>
            <Link className='text-[0.925vw]' href="https://www.facebook.com/reesevisioncare/reviews" target="_blank">
              <div className="link link-hover">Reviews</div>
            </Link>
            <Link className='text-[0.925vw]' href="mailto:reesevisioncontacts@gmail.com" target="_blank">
              <div className="link link-hover">Email</div>
            </Link>
            <Link className='text-[0.925vw]' href="insurance">
              <div onClick={() => changeRoute("insurance")} className="link link-hover">Insurance</div>
            </Link>
        </nav> 
        <nav className='gap-[0.53vw]'>
            <h6 ref={footerTitle} className={`footer-title ${footerTitleClass} text-[0.925vw]`}>Company</h6> 
            <Link className='text-[0.925vw]' href="aboutus">
              <div onClick={() => changeRoute("aboutus")} className="link link-hover">About us</div>
            </Link>
            <Link className='text-[0.925vw]' href="/contact">
              <div onClick={() => changeRoute("contact")} className="link link-hover">Contact</div>
            </Link>
            <div onClick={()=>document.getElementById('job_modal').showModal()} className="link text-[0.925vw] link-hover">Employment</div>
            <dialog id="job_modal" className="modal"><ContactModal text={"Fill out form and attach resume to send your job application. (PDF Only)"} placeholder={"Job Request"} isJobForm={true}></ContactModal></dialog>
            <Link className='text-[0.925vw]' href="http://maps.google.com/?q=Reese Vision Care" target="_blank">
              <div className="link link-hover">Location</div>
            </Link>
        </nav> 
        <nav className='gap-[0.53vw]'>
            <h6 ref={footerTitle} className={`footer-title ${footerTitleClass} text-[0.925vw]`}>Legal</h6> 
            <div onClick={()=>document.getElementById('TOU_modal').showModal()} className="link text-[0.925vw] link-hover">Terms of use</div>
            <dialog id="TOU_modal" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-black">Hello there!</h3>
                <p className="py-4 text-black">LEGAL DOCUMENT HERE</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <div onClick={()=>document.getElementById('privacy_policy_modal').showModal()} className="link text-[0.925vw] link-hover">Privacy policy</div>
            <dialog id="privacy_policy_modal" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-black">Hello there!</h3>
                <p className="py-4 text-black">PRIVACY POLICY HERE</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <div onClick={()=>document.getElementById('cookies_modal').showModal()} className="link text-[0.925vw] link-hover">Cookie policy</div>
            <dialog id="cookies_modal" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-black">Hello there!</h3>
                <p className="py-4 text-black">This website uses no cookies</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
        </nav>
        </footer> 
        <footer ref={footerBotContainer} className="footer pl-[2.63vw] pr-[2.63vw] pt-[1.1vw] pb-[1.1vw] border-t bg-white text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
            <RVC_ICON background={background} white={white}></RVC_ICON>
            <p className='text-[0.93vw] leading-[1.3vw]'>Reese Vision Care <br/>Providing quality eye care since 2010</p>
        </aside> 
        <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4 items-center">
            <Link href="https://www.facebook.com/reesevisioncare/" target="_blank">
              <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-[1.6vw] h-[1.6vw]"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></div>
            </Link>
            <Link href="https://www.instagram.com/reesevisioncare/" target="_blank">
              <div><Image src={background == 'white' ? black_instagram_icon : white_instagram_icon} viewBox="0 0 24 24" className="fill-current w-[2.1vw] h-[2.1vw]"></Image></div>
            </Link>
            <Link href="tel:9547464009" target="_blank">
              <div><Image src={background == 'white' ? black_phone_icon : white_phone_icon} viewBox="0 0 24 24" className="fill-current mb-[3px] w-[1.7vw] h-[1.7vw]"></Image></div>
            </Link>
            </div>
        </nav>
        </footer>
    </div>
  )
}
