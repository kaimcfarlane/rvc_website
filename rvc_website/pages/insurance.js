import React from 'react'
import Header from "@/components/Header"
import InsurancePage from "@/components/InsurancePage"
import Footer from "@/components/Footer"

export default function Insurance({route_obj, changeRoute}) {
  return (
    <>
        <Header route_obj={route_obj} changeRoute={changeRoute}/>
        <InsurancePage></InsurancePage>
        <Footer background={"blue"} pages={1}/>
    </>
  )
}
