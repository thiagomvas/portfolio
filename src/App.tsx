import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import LogoSvg from '/icon.svg'
import "./index.css"


function App() {

  return (
    <>
    <Navbar pageSections={[
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
    ]} />
      <Hero/>
      <div
        className="gradient-spacer"
        style={{
          background: "linear-gradient(to bottom, var(--hero-background), var(--experience-background))",
        }}
      ></div>
      <Experience/>
      <div
        className="gradient-spacer"
        style={{
          background: "linear-gradient(to bottom, var(--experience-background), var(--skills-background))",
        }}
      ></div>
      <Skills/>
      <div
        className="gradient-spacer"
        style={{
          background: "linear-gradient(to bottom, var(--skills-background), var(--projects-background))",
        }}
      ></div>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
