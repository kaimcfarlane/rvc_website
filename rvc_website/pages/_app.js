import '@/styles/globals.css'
import { version } from "../package.json";
import Head from "next/head"
import favicon from '../public/favicon.ico';
import { useState } from "react"



export default function App({ Component }) {
  const [route, setRoute] = useState({route: "home"})
  const changeRoute = (route) => {
    setRoute(route);
  }
  return (
    <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Official website for... something." />
          <meta name="build version" content={version} /> 
          <link rel="icon" href={favicon.src} type="image/x-icon"/>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=K2D&display=swap');
          </style>
        </Head>
        <Component route={route} changeRoute={changeRoute} />
    </>
  )
}