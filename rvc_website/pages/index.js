import Header from "@/components/Header"
import HomePage from "@/components/HomePage"
import Footer from "@/components/Footer"

export default function Home({route, changeRoute}) {

  return (
    <main class="overflow-y-scroll">
      <Header route={route} changeRoute={changeRoute}/>
      <HomePage/>
      <Footer background={"white"}/>
    </main>
  )
}
