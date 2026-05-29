import "./Loader.css"
import { motion } from "framer-motion"

const Loader = () => {

  return (

    <div className="loaderScreen">

      {/* SOFT GLOW */}

      <div className="loaderGlow"></div>

      {/* GLASS */}

      <div className="glassWrapper">

        {/* FALLING STRAW */}

        <motion.div

          className="straw"

          initial={{
            y: -260,
            x: 40,
            rotate: 35,
            opacity: 0,
          }}

          animate={{
            y: -10,
            x: 8,
            rotate: 24,
            opacity: 1,
          }}

          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}

        />

        {/* MILKSHAKE */}

        <motion.div

          className="milkFill"

          initial={{
            height: "0%",
          }}

          animate={{
            height: "82%",
          }}

          transition={{
            delay: 0.3,
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}

        >

          {/* LIQUID SLOSH */}

          <motion.div

            className="liquidSlosh"

            animate={{
              rotate: [0, 1.5, -1.5, 0],
              x: [0, 2, -2, 0],
            }}

            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}

          />

          {/* FLOATING BUBBLES */}

          <span className="bubble bubble1"></span>
          <span className="bubble bubble2"></span>
          <span className="bubble bubble3"></span>

          {/* GLASS REFLECTION */}

          <div className="glassReflection"></div>

          {/* SHAKE WAVE */}

          <motion.div

            className="shakeWave"

            animate={{
              x: [0, -8, 0],
            }}

            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}

          />

        </motion.div>

        {/* GLASS BORDER */}

        <div className="glassBorder"></div>

        {/* LOGO */}

        <motion.h1

          className="loaderLogo"

          initial={{
            opacity: 0,
            scale: 0.7,
            y: 10,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}

          transition={{
            delay: 1.1,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}

        >

          Avini

        </motion.h1>

      </div>

      {/* PULSE */}

      <motion.div

        className="pulseRing"

        initial={{
          opacity: 0,
          scale: 0.7,
        }}

        animate={{
          opacity: [0, 0.2, 0],
          scale: [0.7, 1.1, 1.4],
        }}

        transition={{
          delay: 1.8,
          duration: 1.6,
          ease: "easeOut",
        }}

      />

    </div>
  )
}

export default Loader