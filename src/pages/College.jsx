import React from 'react'
import CollegesHero from '../components/college/CollegesHero'
import OurColleges from '../components/college/OurColleges'
import CertificateCourses from '../components/college/CertificateCourses'
import DiplomaCourses from '../components/college/DiplomaCourses'

const College = () => {
  return (
    <div>
      <CollegesHero/>
      <OurColleges/>
      <CertificateCourses/>
      <DiplomaCourses/>
    </div>
  )
}

export default College
