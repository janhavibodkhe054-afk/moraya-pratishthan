import React from 'react'
import ProgramsHero from '../components/program/ProgramsHero'
import SkillDevelopment from '../components/program/SkillDevelopment'
import HealthcarePublicHealth from '../components/program/HealthcarePublicHealth'
import BloodDonationInitiative from '../components/program/BloodDonationInitiative'
import NirmalyaDanInitiative from '../components/program/NirmalyaDanInitiative'
import DisasterRelief from '../components/program/DisasterRelief'
import WomenEmpowerment from '../components/program/WomenEmpowerment'
import CommunityActionCTA from '../components/program/CommunityActionCTA'

const Program = () => {
  return (
    <div>
      <ProgramsHero/>
      <SkillDevelopment/>
      <HealthcarePublicHealth/>
      <BloodDonationInitiative/>
      <NirmalyaDanInitiative/>
      <DisasterRelief/>
      <WomenEmpowerment/>
      <CommunityActionCTA/>
    </div>
  )
}

export default Program
