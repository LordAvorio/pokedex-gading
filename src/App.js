import React from 'react'
import {Routes, Route} from "react-router-dom"


// IMPORT PAGES
import HomePage from "./Pages/HomePage/HomeLogic"


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
  )
}
