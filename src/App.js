"use client"

import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import BlogPopup from "./components/BlogPopup"
import MainContent from "./components/MainContent"
import "./styles/App.css"

function App() {
  const [isBlogOpen, setIsBlogOpen] = useState(false)

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content-wrapper">
          <MainContent />
          <div className="blog-sidebar">
            <button className="blog-trigger" onClick={() => setIsBlogOpen(true)}>
              BLOG
            </button>
          </div>
        </div>
      </div>
      {isBlogOpen && <BlogPopup onClose={() => setIsBlogOpen(false)} />}
    </div>
  )
}

export default App

