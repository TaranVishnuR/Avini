import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

/* AOS */
import AOS from 'aos'
import 'aos/dist/aos.css'

/* LENIS */
import Lenis from '@studio-freight/lenis'

/* INIT AOS */
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out',
})

/* INIT LENIS */
const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)