import React, { useEffect, useRef } from 'react'
import RVC_LOGO from './RVC_LOGO'
import Link from 'next/link'

export default function header({route, changeRoute}) {

  const homeBtn = useRef();
  const aboutusBtn = useRef();
  const servicesBtn = useRef();
  const insuranceBtn = useRef();
  const contactBtn = useRef();

  useEffect(() => {
    highlightCurLink();
  }, [])

  const highlightCurLink = () => {
    if (route.route == "home") {
      // Apply UI Changes
      homeBtn.current.style.color = "#0094DA";
      aboutusBtn.current.style.color = "black";
      servicesBtn.current.style.color = "black";
      insuranceBtn.current.style.color = "black";
      contactBtn.current.style.color = "black";
    }
    else if (route.route == "aboutus") {
      homeBtn.current.style.color = "black";
      aboutusBtn.current.style.color = "#0094DA";
      servicesBtn.current.style.color = "black";
      insuranceBtn.current.style.color = "black";
      contactBtn.current.style.color = "black";
    }
    else if (route.route == "services") {
      homeBtn.current.style.color = "black";
      aboutusBtn.current.style.color = "black";
      servicesBtn.current.style.color = "#0094DA";
      insuranceBtn.current.style.color = "black";
      contactBtn.current.style.color = "black";
    }
    else if (route.route == "insurance") {
      homeBtn.current.style.color = "black";
      aboutusBtn.current.style.color = "black";
      servicesBtn.current.style.color = "black";
      insuranceBtn.current.style.color = "#0094DA";
      contactBtn.current.style.color = "black";
    }
    else if (route.route == "contact") {
      homeBtn.current.style.color = "black";
      aboutusBtn.current.style.color = "black";
      servicesBtn.current.style.color = "black";
      insuranceBtn.current.style.color = "black";
      contactBtn.current.style.color = "#0094DA";
    }
  }

  return (
    <section class="flex flex-row justify-between bg-white fixed w-full z-[1]">
        <RVC_LOGO></RVC_LOGO>
        <div id='page_links' class="flex items-center w-6/12 justify-around text-black">
            <button ref={homeBtn} id='homeBtn' onClick={changeRoute("home")} className="btn btn-ghost"><Link href="/">HOME</Link></button>
            <button ref={aboutusBtn} id='aboutusBtn' onClick={changeRoute("aboutus")} className="btn btn-ghost"><Link href="/aboutus">ABOUT US</Link></button>
            <button ref={servicesBtn} id='servicesBtn' onClick={changeRoute("services")} className="btn btn-ghost"><Link href="/services">SERVICES</Link></button>
            <button ref={insuranceBtn} id='insuranceBtn' onClick={changeRoute("insurance")} className="btn btn-ghost"><Link href="/insurance">INSURANCE</Link></button>
            <button ref={contactBtn} id='contactBtn' onClick={changeRoute("contact")} className="btn btn-ghost"><Link href="/contact">CONTACT</Link></button>
        </div>
    </section>
  )
}
