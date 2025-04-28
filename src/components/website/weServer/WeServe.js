import React from 'react'
import ServicesBanner from './ServicesBanner'
import BookkeepingServices from './BookkeepingServices'
import ReliableServices from './ReliableServices'
import ServiceFaqs from './ServiceFaqs'
import ComprehensiveAccounting from './ComprehensiveAccounting'
import BookkeepingSolutions from './BookkeepingSolutions'
import EnsureIntegrity from '../landingPage/EnsureIntegrity'

function WeServe() {
  return (
  <>
  <ServicesBanner/>
  <BookkeepingServices/> 
  <ReliableServices/> 
  <BookkeepingSolutions/>
  <ComprehensiveAccounting/>
  <ServiceFaqs/>
  <EnsureIntegrity/>
  </>
  )
}

export default WeServe