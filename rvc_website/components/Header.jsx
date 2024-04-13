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
    }
    else if (route.route == "aboutus") {

    }
    else if (route.route == "services") {
      
    }
    else if (route.route == "insurance") {
      
    }
    else if (route.route == "contact") {
      
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
