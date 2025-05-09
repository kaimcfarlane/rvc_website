import React from 'react'
import Header from "@/components/Header"
import AboutPage from "@/components/AboutPage"
import Footer from "@/components/Footer"

export default function AboutUs({route_obj, changeRoute}) {
  return (
    <main className="overflow-y-scroll">
      <Header route_obj={route_obj} changeRoute={changeRoute}/>
      <AboutPage/>
      <Footer changeRoute={changeRoute} background={"blue"} pages={2}/>
    </main>
  )
}
