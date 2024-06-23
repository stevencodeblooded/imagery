import BecomeSeller from "../components/Home/BecomeSeller"
import GotQuestions from "../components/Home/GotQuestions"
import Hero from "../components/Home/Hero"
import LightroomPresets from "../components/Home/LightroomPresets"
import Overview from "../components/Home/Overview"
import SpecificProducts from "../components/Home/SpecificProducts"
import TrendingPresets from "../components/Home/TrendingPresets"

const HomeScreen = () => {
  return (
    <div className="py-24">
      <Hero />
      <LightroomPresets />
      <TrendingPresets />
      <SpecificProducts /> 
      <Overview />
      <BecomeSeller />
      <GotQuestions />
    </div>
  )
}

export default HomeScreen