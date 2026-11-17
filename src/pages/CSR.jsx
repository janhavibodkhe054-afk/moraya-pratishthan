import React from 'react'
import CSRHero from '../components/csr/CSRHero'
import AboutCSRInitiatives from '../components/csr/AboutCSRInitiatives'
import CSRFocusAreas from '../components/csr/CSRFocusAreas'
import CSRMethodology from '../components/csr/CSRMethodology'
import CSRSupporters from '../components/csr/CSRSupporters'
import CSRPartnershipCTA from '../components/csr/CSRPartnershipCTA'


const CSR = () => {
  return (
    <div>
      <CSRHero/>
      <AboutCSRInitiatives/>
      <CSRFocusAreas/>
      <CSRMethodology/>
      <CSRSupporters/>
      <CSRPartnershipCTA/>
      
    </div>
  )
}

export default CSR
