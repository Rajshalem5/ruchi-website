import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { Team } from '../components/Team'
import { Vibe } from '../components/Vibe'
import { Waitlist } from '../components/Waitlist'

export function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Vibe />
      <Waitlist />
      <Team />
      <Footer />
    </>
  )
}
