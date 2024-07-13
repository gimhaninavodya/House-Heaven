import React from 'react'
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Homepage from "../components/main-homePage/Home-page";

const Websitepages = () => {
  return (
    <div className="App">
      <div>
        <div />
        <Homepage/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
    </div>
  )
}

export default Websitepages