import React from 'react'
import Header from "@/components/Header"
import AboutPage from "@/components/AboutPage"
import Footer from "@/components/Footer"

export default function AboutUs({route, changeRoute}) {
  return (
    <main class="overflow-y-scroll">
      <Header route={route} changeRoute={changeRoute}/>
      <AboutPage/>
      <Footer/>
    </main>
  )
}
