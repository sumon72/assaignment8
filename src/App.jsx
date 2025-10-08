import { useState } from 'react'
import './App.css'
import NavBar from "./NavBar/NavBar.jsx";
import Banner from "./Banner/Banner.jsx";
import StatesSection from "./StatesSection/StatesSection.jsx";
function App() {


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <StatesSection></StatesSection>
    </>
  )
}

export default App
