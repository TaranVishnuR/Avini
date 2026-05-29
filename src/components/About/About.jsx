import "./About.css"
import { motion } from "framer-motion"

const containerVariants = {

  hidden: {},

  visible: {

    transition: {

      staggerChildren: 0.18,

    },

  },

}

const itemVariants = {

  hidden: {

    opacity: 0,
    y: 60,
    scale: 0.96,
    filter: "blur(10px)",

  },

  visible: {

    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {

      duration: 1,
      ease: [0.22, 1, 0.36, 1],

    },

  },

}

const About = () => {

  return (

    <section
      id="about"
      className="aboutSection"
    >

      <motion.div

        className="aboutContent"

        variants={containerVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{ once: true, amount: 0.3 }}

      >

        <motion.p

          className="aboutMini"

          variants={itemVariants}

        >

          ABOUT AVINI

        </motion.p>

        <motion.h2

          className="aboutTitle"

          variants={itemVariants}

        >

          Crafted for chill evenings,
          conversations,
          and fresh blends.

        </motion.h2>

        <motion.p

          className="aboutText"

          variants={itemVariants}

        >

          AVINI is designed as more than just
          a juice spot. It’s a space built around
          atmosphere, comfort, and handcrafted
          drinks made with fresh ingredients.

        </motion.p>

      </motion.div>

    </section>
  )
}

export default About