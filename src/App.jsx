"use client"

import { useEffect, useState } from "react"
import Background from "./Components/Background/Background.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Main from "./Components/Main/Main.jsx"

const App = () => {
  const mainData = [
    { text1: "Uncover secrets", text2: "buried by time." },
    { text1: "Let the whispers", text2: "guide your blade." },
    { text1: "History", text2: "written in blood." },
  ]
  const [mainCount, setMainCount] = useState(0)
  const [playStatus, setPlayStatus] = useState(false)

  useEffect(() => {
    if (playStatus) return

    const interval = setInterval(() => {
      setMainCount((count) => (count === 2 ? 0 : count + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [playStatus])

  return (
    <div className="app-container">
      <Background playStatus={playStatus} mainCount={mainCount} />
      <Navbar />
      <Main
        setPlayStatus={setPlayStatus}
        mainData={mainData[mainCount]}
        mainCount={mainCount}
        setMainCount={setMainCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App

