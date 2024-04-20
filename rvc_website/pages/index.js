import Header from "@/components/Header"
import HomePage from "@/components/HomePage"

export default function Home({route, changeRoute}) {

  return (
    <main>
      <Header route={route} changeRoute={changeRoute}/>
      <HomePage/>
    </main>
  )
}
