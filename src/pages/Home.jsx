import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import FocusAreasSection from '../components/home/FocusAreasSection'
import EducationalInstitutions from '../components/home/EducationalInstitutions'
import CoursesSection from '../components/home/CoursesSection'
import CSRPartnershipsSection from '../components/home/CSRPartnershipsSection'
import InternationalExposureSection from '../components/home/InternationalExposureSection'
import FinalCTASection from '../components/home/FinalCTASection'
import ClinicalExposureSection from '../components/home/ClinicalExposureSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <FocusAreasSection/>
      <EducationalInstitutions/>
      <CoursesSection/>
      <ClinicalExposureSection/>
      <CSRPartnershipsSection/>
      <InternationalExposureSection/>
      <FinalCTASection/>
    </div>
  )
}

export default Home
