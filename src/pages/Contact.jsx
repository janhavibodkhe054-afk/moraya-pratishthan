import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactInformation from '../components/contact/ContactInformation'
import ContactForm from '../components/contact/ContactForm'
import OfficeLocations from '../components/contact/OfficeLocations'

const Contact = () => {
  return (
    <div>
      <ContactHero/>
      <ContactInformation/>
      <ContactForm/>
      <OfficeLocations/>
    </div>
  )
}

export default Contact
