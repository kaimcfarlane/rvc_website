import '@/styles/globals.css'
import { version } from "../package.json";
import Head from "next/head"
import favicon from '../public/favicon.ico';
import { useEffect, useState } from "react"



export default function App({ Component }) {
  const [route_obj, setRouteObj] = useState({route_name: "home"})

  //Use local storage to save last route and to update the UI
  useEffect(() => {
    console.log(localStorage.getItem("ls_route_obj"));
    if (JSON.parse(localStorage.getItem("ls_route_obj")) != null) {
      console.log("Route changed to: " + JSON.parse(localStorage.getItem("ls_route_obj")).route_name);
      changeRoute(JSON.parse(localStorage.getItem("ls_route_obj")).route_name);
    }
    else {
      changeRoute("home");
    }
  },[])
 
  const changeRoute = (route_name) => {
    console.log("Change route being called");
    let route_obj = {route_name: route_name};
    // console.log("Route is being changed to: " + route.route);
    localStorage.setItem('ls_route_obj', JSON.stringify(route_obj)); 
    setRouteObj(route_obj);
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
        <Component route_obj={route_obj} changeRoute={changeRoute} />
    </>
  )
}