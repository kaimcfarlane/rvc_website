import React from 'react'
import Header from "@/components/Header"
import ServicesPage from "@/components/ServicesPage"
import Footer from "@/components/Footer"

export default function Services({route, changeRoute}) {
  return (
    <>
        <Header route={route} changeRoute={changeRoute}/>
        <ServicesPage></ServicesPage>
        <Footer background={"blue"} pages={1}/>
    </>
  )
}
