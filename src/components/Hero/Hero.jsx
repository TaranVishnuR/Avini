import "./Hero.css"
import { motion } from "framer-motion"
import useScrollSpy from "../../hooks/useScrollSpy"

const navItems = [
  "About",
  "Menu",
  "Location",
]

const Hero = () => {

  const activeSection = useScrollSpy()

  const handleScroll = (id) => {

    const element =
      document.getElementById(id)

    if (!element) return

    const offset = 140

    const top =
      element.offsetTop - offset

    window.scrollTo({

      top,

      behavior: "smooth",

    })
  }

  return (

    <div className="heroWrapper">

      <motion.div

        className="topFloatingContainer"

        initial={{
          opacity: 0,
          y: -30,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}

      >

        <div className="topLogo">

          <h1>AVINI</h1>

        </div>

        <nav className="floatingNavbar">

          {navItems.map((item) => (

            <button

              key={item}

              className={
                activeSection === item.toLowerCase()
                  ? "activeNav"
                  : ""
              }

              onClick={() =>
                handleScroll(item.toLowerCase())
              }

            >

              {item}

            </button>

          ))}

        </nav>

      </motion.div>

      <section className="heroSection"></section>

    </div>
  )
}

export default Hero