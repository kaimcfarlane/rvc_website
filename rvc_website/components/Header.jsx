import React from 'react'
import RVC_LOGO from './RVC_LOGO'

export default function header() {
  return (
    <section class="flex flex-row justify-between bg-white fixed w-full">
        <RVC_LOGO></RVC_LOGO>
        <div id='page_links' class="flex items-center w-6/12 justify-around text-black">
            <div>HOME</div>
            <div>ABOUT US</div>
            <div>SERVICES</div>
            <div>INSURANCE</div>
            <div>CONTACT</div>
        </div>
    </section>
  )
}
