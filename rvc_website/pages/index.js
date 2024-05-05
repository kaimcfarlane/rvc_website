import Header from "@/components/Header"
import HomePage from "@/components/HomePage"
import Footer from "@/components/Footer"

export default function Home({route_obj, changeRoute}) {

  return (
    <main class="overflow-y-scroll">
      <Header route_obj={route_obj} changeRoute={changeRoute}/>
      <HomePage/>
      <Footer changeRoute={changeRoute} background={"white"} pages={1}/>
    </main>
  )
}
