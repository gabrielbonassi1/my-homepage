import Image from "next/image";
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <>
      <About />
      <Projects />
      <Contact />
    </>
  )  
}
