import React from 'react'
import {Routes, Route} from "react-router-dom"


// IMPORT PAGES
import HomePage from "./Pages/HomePage/HomeLogic"
import DetailPage from "./Pages/DetailPage/DetailLogic"
import CollectionPage from "./Pages/CollectionPage/CollectionLogic"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"


export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/mycollection" element={<CollectionPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
