import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import { useLanguage } from './hooks/useLanguage'

export default function App() {
  const { language, setLanguage, copy } = useLanguage()

  return (
    <>
      <Navbar language={language} onLanguageChange={setLanguage} copy={copy.navigation} />
      <main>
        <Hero copy={copy.hero} terminalCopy={copy.terminal} />
        <Projects language={language} copy={copy.projects} />
        <TechStack language={language} copy={copy.stack} />
        <Experience language={language} copy={copy.experience} />
        <About copy={copy.about} />
        <Contact copy={copy.contact} />
      </main>
      <Footer copy={copy.footer} />
    </>
  )
}
