import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import StatsMarquee from './components/StatsMarquee/StatsMarquee'
import AppPreview from './components/AppPreview/AppPreview'
import Features from './components/Features/Features'
import Concept from './components/Concept/Concept'
import Progression from './components/Progression/Progression'
import AISection from './components/AISection/AISection'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsMarquee />
        <AppPreview />
        <Features />
        <Concept />
        <Progression />
        <AISection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
