import { useState } from 'react'
import './App.css'
import NavBar from "./NavBar/NavBar.jsx";
import Banner from "./Banner/Banner.jsx";
import StatesSection from "./StatesSection/StatesSection.jsx";
import TopAppsSection from "./TopAppsSection/TopAppsSection.jsx";
import Footer from "./Footer/Footer.jsx";
function App() {


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <StatesSection></StatesSection>
      <TopAppsSection></TopAppsSection>
      <Footer></Footer>
    </>
  )
}

export default App
