import Header from "@/components/Header"
import HomePage from "@/components/HomePage"
import { useState } from "react"


export default function Home() {

  const [route, setRoute] = useState({route: "home"})
  const changeRoute = (route) => {
    setRoute(route);
  }

  return (
    <main>
      <Header route={route} changeRoute={changeRoute}/>
      <HomePage/>
    </main>
  )
}
