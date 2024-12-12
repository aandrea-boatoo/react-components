import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComp from './components/HeaderComp'
import CardComp from './components/CardComp'
import FooterComp from './components/FooterComp'


function App() {

  return (
    <>
      <HeaderComp />
      <main>
        <CardComp />
      </main>
      <FooterComp />
    </>
  )
}

export default App
