import React from 'react'
import Banner from './Banner'
import AuditingExperts from './AuditingExperts'
import ContactForm from '../contact-us/ContactForm'
import LandingServices from './LandingServices'
import WhoWe from './WhoWe'
import Faqs from './Faqs'
import EnsureIntegrity from './EnsureIntegrity'

function LandingPage() {
  return (
   <>
   <Banner/>
   <AuditingExperts/>
   <EnsureIntegrity/>
   <ContactForm/>
   <LandingServices/>
   <WhoWe/>
   <Faqs/>
   </>
  )
}

export default LandingPage