import { useEffect, useState } from "react";

const sections = [
  "about",
  "menu",
  "location",
  "terms",
]

export default function useScrollSpy() {

  const [activeSection, setActiveSection] =
    useState("")

  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition =
        window.scrollY + 200

      sections.forEach((section) => {

        const element =
          document.getElementById(section)

        if (!element) return

        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (
          scrollPosition >= offsetTop &&
          scrollPosition <
          offsetTop + offsetHeight
        ) {

          setActiveSection(section)

        }

      })

    }

    window.addEventListener(
      "scroll",
      handleScroll
    )

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      )

  }, [])

  return activeSection
}