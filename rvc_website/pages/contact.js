import React from 'react'
import Header from "@/components/Header"
import ContactPage from "@/components/ContactPage"
import Footer from "@/components/Footer"

export default function Contact({route, changeRoute}) {
  return (
    <>
      <Header route={route} changeRoute={changeRoute}/>
      <ContactPage></ContactPage>
      <Footer background={"blue"} pages={1}/>
    </>
  )
}
