import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactModal from './ContactModal'
import RVC_ICON from './RVC_ICON'
import white_email_icon from '../public/gen_icons/email_icon_5.png'
import white_phone_icon from '../public/gen_icons/phone_icon_3.png'
import black_email_icon from '../public/gen_icons/email_icon_7.svg'
import black_phone_icon from '../public/gen_icons/phone_icon_4.svg'

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
    <div class="w-[100%] absolute" style={{top: footerPosition}}>
        <footer ref={footerTopContainer} className="footer p-10 bg-white text-base-content">
        <nav>
            <h6 ref={footerTitle} className={`footer-title ${footerTitleClass}`}>Information</h6> 
            <Link href="https://www.facebook.com/reesevisioncare/" target="_blank">
              <div className="link link-hover">Branding</div>
            </Link>
            <Link href="https://www.facebook.com/reesevisioncare/reviews" target="_blank">
              <div className="link link-hover">Reviews</div>
            </Link>
            <Link href="https://www.facebook.com/reesevisioncare/photos" target="_blank">
              <div className="link link-hover">Photos</div>
            </Link>
            <Link href="insurance">
              <div onClick={() => changeRoute("insurance")} className="link link-hover">Insurance</div>
            </Link>
        </nav> 
        <nav>
            <h6 ref={footerTitle} className={`footer-title ${footerTitleClass}`}>Company</h6> 
            <Link href="aboutus">
              <div onClick={() => changeRoute("aboutus")} className="link link-hover">About us</div>
            </Link>
            <Link href="/contact">
              <div onClick={() => changeRoute("contact")} className="link link-hover">Contact</div>
            </Link>
            <div onClick={()=>document.getElementById('job_modal').showModal()} className="link link-hover">Jobs</div>
            <dialog id="job_modal" className="modal"><ContactModal text={"Fill out form and attach resume to send your job application. (PDF Only)"} placeholder={"Job Request"} isJobForm={true}></ContactModal></dialog>
            <Link href="http://maps.google.com/?q=Reese Vision Care" target="_blank">
              <div className="link link-hover">Address</div>
            </Link>
        </nav> 
        <nav>
            <h6 ref={footerTitle} className={`footer-title ${footerTitleClass}`}>Legal</h6> 
            <div onClick={()=>document.getElementById('TOU_modal').showModal()} className="link link-hover">Terms of use</div>
            <dialog id="TOU_modal" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-black">Hello there!</h3>
                <p className="py-4 text-black">LEGAL DOCUMENT HERE</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <div onClick={()=>document.getElementById('privacy_policy_modal').showModal()} className="link link-hover">Privacy policy</div>
            <dialog id="privacy_policy_modal" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-black">Hello there!</h3>
                <p className="py-4 text-black">PRIVACY POLICY HERE</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <div onClick={()=>document.getElementById('cookies_modal').showModal()} className="link link-hover">Cookie policy</div>
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
        <footer ref={footerBotContainer} className="footer px-10 py-4 border-t bg-white text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
            <RVC_ICON background={background} white={white}></RVC_ICON>
            <p>Reese Vision Care Opt. <br/>Providing quality eye care since 2004</p>
        </aside> 
        <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4 items-center">
            <Link href="https://www.facebook.com/reesevisioncare/" target="_blank">
              <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></div>
            </Link>
            <Link href="mailto:reesevisioncontacts@gmail.com" target="_blank">
              <div><Image src={background == 'white' ? black_email_icon : white_email_icon} width="33" height="33" viewBox="0 0 24 24" className="fill-current"></Image></div>
            </Link>
            <Link href="tel:9547464009" target="_blank">
              <div><Image src={background == 'white' ? black_phone_icon : white_phone_icon} width="24" height="24" viewBox="0 0 24 24" className="fill-current"></Image></div>
            </Link>
            </div>
        </nav>
        </footer>
    </div>
  )
}
