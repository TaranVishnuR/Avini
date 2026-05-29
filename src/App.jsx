import { useEffect, useState } from "react"

import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Testimonials from "./components/Testimonials/Testimonials"
import Menu from "./components/Menu/Menu"
import Loader from "./components/Loader/Loader"
import Location from "./components/Location/Location"
import Footer from "./components/Footer/Footer"

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)

  }, [])

  return (

    <>
    
      {loading ? (

        <Loader />

      ) : (

        <>
        
          <Hero />

          <About />

          <Testimonials />

          <Menu />

          <Location />

          <Footer />

        </>

      )}

    </>

  )
}

export default App