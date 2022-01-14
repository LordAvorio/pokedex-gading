import React from 'react'
import {Routes, Route} from "react-router-dom"


// IMPORT PAGES
import HomePage from "./Pages/HomePage/HomeLogic"
import Header from "./Components/Header/Header"


export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
  )
}
