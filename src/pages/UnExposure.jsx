import React from 'react'
import UNExposureHero from '../components/unexposure/UNExposureHero'
import InternationalEngagements from '../components/unexposure/InternationalEngagements'
import FeaturedInternationalExperiences from '../components/unexposure/FeaturedInternationalExperiences'
import UNExposureCTA from '../components/unexposure/UNExposureCTA'

const UnExposure = () => {
  return (
    <div>
      <UNExposureHero/>
      {/* <InternationalEngagements/> */}
      <FeaturedInternationalExperiences/>
      <UNExposureCTA/>
    </div>
  )
}

export default UnExposure
