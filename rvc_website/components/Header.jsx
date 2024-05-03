import React, { useEffect, useRef } from 'react'
import RVC_LOGO from './RVC_LOGO'
import Link from 'next/link'

export default function header({route_obj, changeRoute}) {

  const homeBtn = useRef();
  const aboutusBtn = useRef();
  const servicesBtn = useRef();
  const insuranceBtn = useRef();
  const contactBtn = useRef();

  useEffect(() => {
    console.log("Route changed to: " + route_obj.route_name);
    console.log("Changing highlight to " + route_obj.route_name);
    highlightCurLink();
  }, [route_obj.route_name]);

  const highlightCurLink = () => {
    if (route_obj.route_name == "home") {
      // Apply UI Changes
      homeBtn.current.style.color = "#0094DA";
      aboutusBtn.current.style.color = "black";
      servicesBtn.current.style.color = "black";
      insuranceBtn.current.style.color = "black";
      contactBtn.current.style.color = "black";
    }
    else if (route_obj.route_name == "aboutus") {
      homeBtn.current.style.color = "black";
      aboutusBtn.current.style.color = "#0094DA";
      servicesBtn.current.style.color = "black";
      insuranceBtn.current.style.color = "black";
      contactBtn.current.style.color = "black";
    }
    else if (route_obj.route_name == "services") {
      homeBtn.current.style.color = "black";
      aboutusBtn.current.style.color = "black";
      servicesBtn.current.style.color = "#0094DA";
      insuranceBtn.current.style.color = "black";
      contactBtn.current.style.color = "black";
    }
    else if (route_obj.route_name == "insurance") {
      homeBtn.current.style.color = "black";
      aboutusBtn.current.style.color = "black";
      servicesBtn.current.style.color = "black";
      insuranceBtn.current.style.color = "#0094DA";
      contactBtn.current.style.color = "black";
    }
    else if (route_obj.route_name == "contact") {
      homeBtn.current.style.color = "black";
      aboutusBtn.current.style.color = "black";
      servicesBtn.current.style.color = "black";
      insuranceBtn.current.style.color = "black";
      contactBtn.current.style.color = "#0094DA";
    }
  }

  return (
    <section class="flex flex-row justify-between bg-white fixed w-full z-[1] top-[0%] shadow-md">
        <RVC_LOGO></RVC_LOGO>
        <div id='page_links' class="flex items-center w-6/12 justify-around text-black">
            <Link href="/">
              <button ref={homeBtn} id='homeBtn' onClick={() => changeRoute("home")} className="btn btn-ghost">HOME</button>
            </Link>
            <Link href="/aboutus">
              <button ref={aboutusBtn} id='aboutusBtn' onClick={() => changeRoute("aboutus")} className="btn btn-ghost">ABOUT US</button>
            </Link>
            <Link href="/services">
              <button ref={servicesBtn} id='servicesBtn' onClick={() => changeRoute("services")} className="btn btn-ghost">SERVICES</button>
            </Link>
            <Link href="/insurance">
              <button ref={insuranceBtn} id='insuranceBtn' onClick={() => changeRoute("insurance")} className="btn btn-ghost">INSURANCE</button>
            </Link>
            <Link href="/contact">
              <button ref={contactBtn} id='contactBtn' onClick={() => changeRoute("contact")} className="btn btn-ghost">CONTACT</button>
            </Link>
        </div>
    </section>
  )
}
