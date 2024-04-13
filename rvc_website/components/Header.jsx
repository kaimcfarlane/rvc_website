import React from 'react'
import RVC_LOGO from './RVC_LOGO'
import Link from 'next/link'

export default function header() {
  return (
    <section class="flex flex-row justify-between bg-white fixed w-full z-[1]">
        <RVC_LOGO></RVC_LOGO>
        <div id='page_links' class="flex items-center w-6/12 justify-around text-black">
            <button className="btn btn-ghost"><Link href="/">HOME</Link></button>
            <button className="btn btn-ghost"><Link href="/aboutus">ABOUT US</Link></button>
            <button className="btn btn-ghost"><Link href="/services">SERVICES</Link></button>
            <button className="btn btn-ghost"><Link href="/insurance">INSURANCE</Link></button>
            <button className="btn btn-ghost"><Link href="/contact">CONTACT</Link></button>
        </div>
    </section>
  )
}
