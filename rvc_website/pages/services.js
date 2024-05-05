import React from 'react'
import Header from "@/components/Header"
import ServicesPage from "@/components/ServicesPage"
import Footer from "@/components/Footer"

export default function Services({route_obj, changeRoute}) {
  return (
    <>
        <Header route_obj={route_obj} changeRoute={changeRoute}/>
        <ServicesPage></ServicesPage>
        <Footer changeRoute={changeRoute} background={"blue"} pages={4}/>
    </>
  )
}
