import React from "react"
import Navbar from "./Navbar"

const Layout = ({children})=> {
    return <>
    <Navbar/>
    <div className="pt-16">
      {children}
    </div>
    </>
}

export default Layout