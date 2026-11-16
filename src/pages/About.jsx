import React from 'react'
import AboutHero from '../components/about/AboutHero'
import OurStory from '../components/about/OurStory'
import VisionMissionGoal from '../components/about/VisionMissionGoal'
import CoreValues from '../components/about/CoreValues'
import OurJourney from '../components/about/OurJourney'
import RegistrationsRecognition from '../components/about/RegistrationsRecognition'
import AboutCTA from '../components/about/AboutCTA'
import Leadership from '../components/about/Leadership'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <OurStory/>
      <VisionMissionGoal/>
      <Leadership/>
      <CoreValues/>
      <OurJourney/>
      <RegistrationsRecognition/>
      <AboutCTA/>
    </div>
  )
}

export default About
