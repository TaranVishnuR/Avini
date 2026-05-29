
import "./Location.css"
import { motion } from "framer-motion"

const leftVariants = {

  hidden: {

    opacity: 0,
    x: -60,

  },

  visible: {

    opacity: 1,
    x: 0,

    transition: {

      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],

      staggerChildren: 0.18,

    },

  },

}

const itemVariants = {

  hidden: {

    opacity: 0,
    y: 40,

  },

  visible: {

    opacity: 1,
    y: 0,

    transition: {

      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],

    },

  },

}

const mapVariants = {

  hidden: {

    opacity: 0,
    scale: 0.95,

  },

  visible: {

    opacity: 1,
    scale: 1,

    transition: {

      duration: 1,
      ease: [0.22, 1, 0.36, 1],

    },

  },

}

const Location = () => {

  return (

    <section
      className="locationSection"
      id="location"
    >

      {/* FLOATING PARTICLES */}

      <div className="locationParticles">

        <span></span>
        <span></span>
        <span></span>

      </div>

      <div className="locationContent">

        {/* LEFT */}

        <motion.div

          className="locationLeft"

          variants={leftVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.3,
          }}

        >

          <motion.p

            className="locationTag"

            variants={itemVariants}

          >

            VISIT AVINI

          </motion.p>

          <motion.h2

            variants={itemVariants}

          >

            Crafted drinks,
            <br />
            served fresh in Pollachi.

          </motion.h2>

          <motion.p

            className="locationDesc"

            variants={itemVariants}

          >

            AVINI is located near
            Mahalingapuram Roundana,
            Pollachi — serving handcrafted
            juices, shakes, mocktails,
            and fresh blends in a calm,
            chill atmosphere.

          </motion.p>

          <motion.div

            className="locationDetails"

            variants={itemVariants}

          >

            <div>

              <span>
                Location
              </span>

              <p>
                Mahalingapuram,
                Pollachi
              </p>

            </div>

            <div>

              <span>
                Timing
              </span>

              <p>
                10.30 AM — 9.30 PM
              </p>

            </div>

          </motion.div>

        </motion.div>

        {/* RIGHT */}

        <motion.div

          className="locationMap"

          variants={mapVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2,
          }}

          whileHover={{
            y: -8,
          }}

        >

          <div className="mapGlow"></div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.858187833497!2d77.01120647480326!3d10.66811368947416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba83786d3cd86d1%3A0x1efbaf6407b754d4!2sAVINI!5e0!3m2!1sen!2sin!4v1779952794544!5m2!1sen!2sin"

            allowFullScreen=""

            loading="lazy"

            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </motion.div>

      </div>

    </section>
  )
}

export default Location
