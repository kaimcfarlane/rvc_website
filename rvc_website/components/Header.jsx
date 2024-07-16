import React, { useEffect, useRef } from 'react'
import RVC_LOGO from './RVC_LOGO'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function header({route_obj, changeRoute}) {

  const homeBtn = useRef();
  const aboutusBtn = useRef();
  const servicesBtn = useRef();
  const insuranceBtn = useRef();
  const contactBtn = useRef();

  const router = useRouter()

  useEffect(() => {
    console.log("Route changed to: " + route_obj.route_name);
    console.log("Changing highlight to " + route_obj.route_name);
    highlightCurLink();
    if (window.location.href.includes(route_obj.route_name)) {
      return;
    }
    else if (route_obj.route_name == "home") {
      router.push('/');
    }
    else {
      router.push('/' + route_obj.route_name);
    }
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
    <section class="flex flex-row justify-between bg-white h-[5.38vw] fixed w-full z-[1] top-[0%] shadow-md">
        <RVC_LOGO changeRoute={changeRoute}></RVC_LOGO>
        <div id='page_links' class="flex items-center w-[50vw] justify-around text-black">
            <Link href="/">
              <button ref={homeBtn} id='homeBtn' onClick={() => changeRoute("home")} className="btn btn-ghost text-[1vw] w-[5vw] h-[3vw]">HOME</button>
            </Link>
            <Link href="/aboutus">
              <button ref={aboutusBtn} id='aboutusBtn' onClick={() => changeRoute("aboutus")} className="btn btn-ghost whitespace-nowrap text-[1vw] w-[6vw] h-[3vw]">ABOUT US</button>
            </Link>
            <Link href="/services">
              <button ref={servicesBtn} id='servicesBtn' onClick={() => changeRoute("services")} className="btn btn-ghost text-[1vw] w-[6vw] h-[3vw]">SERVICES</button>
            </Link>
            <Link href="/insurance">
            {/* Eitehr vias js or tailwind, we need to add text to be 100% fr bigger screen sizes only or test a percentage that works on both or see if another value besides percentage that can work */}
              <button ref={insuranceBtn} id='insuranceBtn' onClick={() => changeRoute("insurance")} className="btn btn-ghost text-[1vw] w-[7vw] h-[3vw]">INSURANCE</button>
            </Link>
            <Link href="/contact">
              <button ref={contactBtn} id='contactBtn' onClick={() => changeRoute("contact")} className="btn btn-ghost text-[1vw] w-[6vw] h-[3vw]">CONTACT</button>
            </Link>
        </div>
    </section>
  )
}
