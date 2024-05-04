import React from 'react'
import Header from "@/components/Header"
import ContactPage from "@/components/ContactPage"
import Footer from "@/components/Footer"

export default function Contact({route_obj, changeRoute}) {
  return (
    <>
      <Header route_obj={route_obj} changeRoute={changeRoute}/>
      <ContactPage></ContactPage>
      <Footer changeRoute={changeRoute} background={"blue"} pages={1}/>
    </>
  )
}
