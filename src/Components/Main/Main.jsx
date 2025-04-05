"use client"

import "./Main.css"
import arrow from "../../Assets/arrow.png"
import play from "../../Assets/play.png"
import pause from "../../Assets/pause.png"
import youtube from "../../Assets/youtube.png"
import mail from "../../Assets/mail.png"
import unity from "../../Assets/unity.png"
import card1 from "../../Assets/card1.webp"
import card2 from "../../Assets/card2.webp"
import card3 from "../../Assets/card3.webp"
import card4 from "../../Assets/card4.webp"
import card5 from "../../Assets/card5.webp"
import { useEffect, useRef, useState } from "react"

const Main = ({ mainData, setMainCount, mainCount, setPlayStatus, playStatus }) => {
  const storylineRef = useRef(null)
  const contactRef = useRef(null)
  const featuresRef = useRef(null)
  const cardsRef = useRef(null)
  const [blur, setBlur] = useState(false)

  const scrollRight = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!storylineRef.current) return
      const rect = storylineRef.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0
      setBlur(isVisible)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const featureCards = [
    {
      title: "Improved Graphics",
      image: card1,
      description: "Immersive lighting and shadows that react to your every move.",
    },
    {
      title: "Epic Soundscapes",
      image: card2,
      description: "An ambient audio journey that adapts with the story.",
    },
    {
      title: "Mythic Lore",
      image: card3,
      description: "Discover hidden scrolls and stories of ancient civilizations.",
    },
    {
      title: "Stealth Mechanics",
      image: card4,
      description: "Blend with shadows, evade enemies, and strike in silence.",
    },
    {
      title: "Interactive World",
      image: card5,
      description: "Every object and corner hides a secret or a story.",
    },
  ]

  return (
    <>
      <div className="main">
        <div className="main-text">
          <p>{mainData.text1}</p>
          <p>{mainData.text2}</p>
        </div>

        <div className="main-explore">
          <p>Explore the features</p>
          <a href="#features">
            <img src={arrow || "/placeholder.svg"} alt="" style={{ marginTop: "5px" }} />
          </a>
        </div>

        <div className="main-dot-play">
          <ul className="main-dots">
            <li onClick={() => setMainCount(0)} className={mainCount === 0 ? "main-dot orange" : "main-dot"}></li>
            <li onClick={() => setMainCount(1)} className={mainCount === 1 ? "main-dot orange" : "main-dot"}></li>
            <li onClick={() => setMainCount(2)} className={mainCount === 2 ? "main-dot orange" : "main-dot"}></li>
          </ul>
          <div className="main-play">
            <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause : play} alt="" />
            <p>Switch to video</p>
          </div>
        </div>

        <div className="extra">
          <p>
            Warriors on the line between myth and memory. Shadows speak louder than words, and every step echoes a
            forgotten truth. As empires crumble and secrets rise, only the silent survive. The past isn't dead — it's
            waiting to be found.
          </p>
        </div>
      </div>

      <div className="storyline-section" ref={storylineRef} id="storyline">
        <h1
          style={{
            marginBottom: "50px",
            fontSize: "50px",
            color: "goldenrod",
            textShadow: "0 0 8px rgba(218, 165, 32, 0.7)",
          }}
        >
          Storyline
        </h1>
        <p className="storyline-para">
          Whispers once guarded the truth. Now, they echo through the ruins of empires.
          <br />
          <br />
          Long ago, a secret order known as The Silent Veil vanished, their legacy reduced to myth. In their absence,
          powerful forces rewrote history, burying forbidden truths beneath blood-stained scrolls and crumbling stone.
          But the past does not sleep forever.
          <br />
          <br />
          When an ancient relic resurfaces, the final heir of the Veil, Kael Adrastan, is thrust into a world unraveling
          at the seams. As kingdoms fall into chaos and forgotten gods stir beneath the surface, the last of the
          shadow-born must uncover what was meant to stay buried.
          <br />
          <br />
          In the war between silence and revelation, only the whispers remain — and they carry the weight of the world.
        </p>
      </div>

      <div className="contact-section" ref={contactRef} id="contact">
        <h1
          style={{
            marginBottom: "50px",
            fontSize: "50px",
            color: "goldenrod",
            textShadow: "0 0 8px rgba(218, 165, 32, 0.7)",
          }}
        >
          Reach out to us!
        </h1>
        <div className="contact-icons">
          <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" target="_blank" rel="noreferrer">
            <img src={youtube || "/placeholder.svg"} style={{ height: "100px", width: "100px" }} alt="YouTube" />
          </a>
          <a href="https://unity.com/" target="_blank" rel="noreferrer">
            <img src={unity || "/placeholder.svg"} style={{ height: "100px", width: "100px" }} alt="Unity" />
          </a>
          <a href="mailto:mvuo1awjjq1p@tmpwebmail.com">
            <img src={mail || "/placeholder.svg"} style={{ height: "60px", width: "80px" }} alt="Mail" />
          </a>
        </div>
      </div>

      <div className="features-section" ref={featuresRef} id="features">
        <h1
          style={{
            marginBottom: "50px",
            fontSize: "50px",
            color: "goldenrod",
            textShadow: "0 0 8px rgba(218, 165, 32, 0.7)",
          }}
        >
          Features
        </h1>
        <div className="features-wrapper">
          <div className="feature-cards" ref={cardsRef}>
            {featureCards.map((card, index) => (
              <div className="card" key={index}>
                <h2 style={{ color: "#e18b53", textShadow: "2px 2px 4px rgba(60, 30, 0, 0.9)", fontFamily: "Poppins" }}>
                  {card.title}
                </h2>
                <div className="card-image-container">
                  <img src={card.image || "/placeholder.svg"} alt={card.title} />
                </div>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
          <img
            className="scroll-arrow"
            src={arrow || "/placeholder.svg"}
            alt="Scroll for more cards"
            onClick={scrollRight}
          />
        </div>
      </div>
      <footer className="main-footer">
        <p>© 2025 Fallen Whispers</p>
      </footer>
    </>
  )
}

export default Main

