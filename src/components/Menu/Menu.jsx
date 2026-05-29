import "./Menu.css"
import { motion } from "framer-motion"

const menuData = [

  {
    category: "OREO",
    items: [
      "Oreo Devil",
      "Oreo Hulk",
      "Oreo Fivestar",
      "Oreo Kit-Kat",
    ],
  },

  {
    category: "KIT-KAT",
    items: [
      "Kit-Kat Angel",
      "Kit-Kat Devil",
      "Kit-Kat Zebra",
      "Kit-Kat Caramel",
    ],
  },

  {
    category: "FRUITY SHAKES",
    items: [
      "Choco Banana",
      "Caramel Banana",
      "Pista Banana",
      "Avacado",
    ],
  },

  {
    category: "BROWNIE SHAKES",
    items: [
      "Angel Brownie",
      "Devil Brownie",
      "Cold Brownie",
      "Milk Brownie",
    ],
  },

  {
    category: "SUPER EXOTICS",
    items: [
      "Dark Fantasy",
      "Dairy Milk",
      "Ferrero",
      "Nutella",
    ],
  },

  {
    category: "MOCKTAILS",
    items: [
      "Virgin Mojito",
      "Blue Lagoon",
      "Green Apple",
      "Lime Punch",
    ],
  },

  {
    category: "FALOODA",
    items: [
      "Avini Falooda",
      "Kulfi Falooda",
      "Dry Fruit Falooda",
      "Rose Falooda",
    ],
  },

  {
    category: "FRESH JUICES",
    items: [
      "Watermelon",
      "Pineapple",
      "Orange",
      "Pomegranate",
    ],
  },

]

const containerVariants = {

  hidden: {},

  visible: {

    transition: {

      staggerChildren: 0.12,

    },

  },

}

const cardVariants = {

  hidden: {

    opacity: 0,
    y: 80,
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
const Menu = () => {

  return (

    <section
      className="menuSection"
      id="menu"
    >

      <motion.div

        className="menuHeading"

        initial={{
          opacity: 0,
          y: 40,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}

        viewport={{ once: true }}

      >

        <p>
          OUR MENU
        </p>

        <h2>
          Signature blends,
          handcrafted shakes,
          and fresh flavours.
        </h2>

      </motion.div>

      <motion.div

        className="menuGrid"

        variants={containerVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.15,
        }}

      >

        {menuData.map((menu, index) => (

          <motion.div

  key={index}

  className="menuCard"

  variants={cardVariants}

  whileHover={{

    y: -12,

    scale: 1.02,

  }}

  transition={{
    duration: 0.35,
  }}

>

            <div className="menuCardGlow"></div>

            <h3>
              {menu.category}
            </h3>

            <div className="menuItems">

              {menu.items.map((item, i) => (

                <motion.div

                  className="menuItem"

                  key={i}

                  whileHover={{
                    x: 6,
                  }}

                  transition={{
                    duration: 0.25,
                  }}

                >

                  <span>
                    {item}
                  </span>

                  <p>
                    ↗
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        ))}

      </motion.div>

    </section>

  )
}

export default Menu