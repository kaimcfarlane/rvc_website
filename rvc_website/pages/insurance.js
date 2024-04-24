import React from 'react'
import Header from "@/components/Header"
import InsurancePage from "@/components/InsurancePage"
import Footer from "@/components/Footer"

export default function Insurance({route, changeRoute}) {
  return (
    <>
        <Header route={route} changeRoute={changeRoute}/>
        <InsurancePage></InsurancePage>
        <Footer></Footer>
    </>
  )
}
