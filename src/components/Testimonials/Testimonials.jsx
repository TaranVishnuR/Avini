import "./Testimonials.css"
import { motion } from "framer-motion"

const topReviews = [

  {
    name: "Madhuram",
    review: "Best chill spot in Pollachi.",
    rating: "★★★★★",
  },

  {
    name: "Gowtham",
    review: "Chocolate shakes were insanely good.",
    rating: "★★★★☆",
  },

  {
    name: "Iswarya",
    review: "Thickness and flavour were perfect.",
    rating: "★★★★★",
  },

  {
    name: "Sabari",
    review: "Fresh ingredients and rich taste.",
    rating: "★★★★✩",
  },

]

const bottomReviews = [

  {
    name: "Mohana",
    review: "Dry fruits shake was awesome.",
    rating: "★★★★★",
  },

  {
    name: "Abinaya",
    review: "Affordable and delicious.",
    rating: "★★★★☆",
  },

  {
    name: "Poovendhan",
    review: "Best milkshakes in town.",
    rating: "★★★★★",
  },

  {
    name: "Vasanth",
    review: "A must try place in Pollachi.",
    rating: "★★★★✩",
  },

]

const revealVariants = {

  hidden: {

    opacity: 0,
    y: 70,
    scale: 0.94,
    filter: "blur(12px)",

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

const Testimonials = () => {

  return (

    <section
      className="testimonialSection"
      id="testimonials"
    >

      <motion.p

        className="testimonialMini"

        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}

        viewport={{
          once: true,
        }}

      >

        VOICES FROM AVINI

      </motion.p>

      {/* TOP MARQUEE */}

      <motion.div

        className="marquee"

        variants={revealVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.2,
        }}

      >

        <div className="marqueeTrack">

          {[...topReviews, ...topReviews].map((item, index) => (

            <motion.div

              className="reviewCard"

              key={index}

              whileHover={{

                y: -10,
                scale: 1.03,
                rotateX: 2,

              }}

              transition={{
                duration: 0.35,
              }}

            >

              <span>
                {item.rating}
              </span>

              <h3>
                “{item.review}”
              </h3>

              <p>
                — {item.name}
              </p>

            </motion.div>

          ))}

        </div>

      </motion.div>

      {/* BOTTOM MARQUEE */}

      <motion.div

        className="marquee reverse"

        variants={revealVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.2,
        }}

      >

        <div className="marqueeTrack">

          {[...bottomReviews, ...bottomReviews].map((item, index) => (

            <motion.div

              className="reviewCard"

              key={index}

              whileHover={{

                y: -10,
                scale: 1.03,
                rotateX: 2,

              }}

              transition={{
                duration: 0.35,
              }}

            >

              <span>
                {item.rating}
              </span>

              <h3>
                “{item.review}”
              </h3>

              <p>
                — {item.name}
              </p>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>

  )
}

export default Testimonials