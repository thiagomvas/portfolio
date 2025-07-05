import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import "./index.css"


function App() {

  return (
    <>
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
