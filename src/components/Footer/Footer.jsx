import "./Footer.css"
import { motion } from "framer-motion"
import { FaArrowUp } from "react-icons/fa"

const Footer = () => {

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleScroll = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }

  return (

    <footer
      className="footerSection"
      id="terms"
    >

      {/* GRID */}

      <motion.div

        className="footerGrid"

        initial={{
          opacity: 0,
          y: 60,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.9,
        }}

        viewport={{ once: true }}

        data-aos="fade-up"
      >

        {/* NAVIGATION */}

        <div
          className="footerBlock"
          data-aos="fade-up"
          data-aos-delay="100"
        >

          <h3>
            Navigation
          </h3>

          <button
            onClick={() =>
              handleScroll("about")
            }
          >
            About
          </button>

          <button
            onClick={() =>
              handleScroll("menu")
            }
          >
            Menu
          </button>

          <button
            onClick={() =>
              handleScroll("location")
            }
          >
            Location
          </button>

        </div>

        {/* CONTACT */}

        <div
          className="footerBlock"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <h3>
            Contact
          </h3>

          <p>
            Pollachi, Tamil Nadu
          </p>

          <p>
            10.30 AM — 9.30 PM
          </p>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

        </div>

        {/* TERMS */}

        <div
          className="footerBlock"
          data-aos="fade-up"
          data-aos-delay="300"
        >

          <h3>
            Terms
          </h3>

          <p className="termsText">

            Menu items and pricing
            may vary based on
            seasonal availability.

          </p>

          <p className="termsText">

            AVINI reserves the right
            to update menu items,
            pricing, and timings.

          </p>

        </div>

      </motion.div>

      {/* BOTTOM */}

      <motion.div

        className="footerBottom"

        initial={{
          opacity: 0,
        }}

        whileInView={{
          opacity: 1,
        }}

        transition={{
          duration: 1,
          delay: 0.2,
        }}

        viewport={{ once: true }}

      >

        <p className="footerCredit">
           © 2026 AVINI — The Fruit Exotics • Made by Taran Vishnu <span>❤️</span>
        </p>

        <button
          className="scrollTopBtn"
          onClick={scrollTop}
        >

          <FaArrowUp />

        </button>

      </motion.div>

    </footer>
  )
}

export default Footer
