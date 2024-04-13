import React from 'react'
import RVC_LOGO from './RVC_LOGO'

export default function header() {
  return (
    <section class="flex flex-row justify-between bg-white fixed w-full z-[1]">
        <RVC_LOGO></RVC_LOGO>
        <div id='page_links' class="flex items-center w-6/12 justify-around text-black">
            <button className="btn btn-ghost">HOME</button>
            <button className="btn btn-ghost">ABOUT US</button>
            <button className="btn btn-ghost">SERVICES</button>
            <button className="btn btn-ghost">INSURANCE</button>
            <button className="btn btn-ghost">CONTACT</button>
        </div>
    </section>
  )
}
