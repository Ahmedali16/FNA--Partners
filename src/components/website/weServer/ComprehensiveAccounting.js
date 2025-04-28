'use client'
import React from 'react'
import Head from 'next/head'
import { Container, Box, Grid, Typography } from '@mui/material'
import { aquaColor, blackColor } from '@/components/utils/Colors'
import { Circle } from '@mui/icons-material'

export default function ComprehensiveAccounting() {
  const services = [
    {
      title: 'Bookkeeping',
      description: 'Accurate recording of financial transactions for better decision-making.',
    },
    {
      title: 'Tax Preparation & Filing',
      description: 'Expert tax planning and timely submissions to avoid penalties.',
    },
    {
      title: 'Payroll Services',
      description: 'Efficient payroll processing to ensure compliance with local labor laws.',
    },
    {
      title: 'Financial Consulting',
      description: 'Strategic financial guidance to optimize business performance.',
    },
    {
      title: 'Audit & Assurance',
      description: 'Independent audits to enhance transparency and investor confidence.',
    },
    {
      title: 'Business Advisory',
      description: 'Expert insights to drive profitability and sustainable growth.',
    },
    {
      title: 'VAT/GST Services',
      description: 'Seamless VAT registration, filing, and compliance support.',
    },
    {
      title: 'Cost-Effective',
      description: 'Save time and resources with outsourced bookkeeping.',
    },
  ]

  return (
    <>
      <Head>
        <title>Bookkeeping Services in UAE & KSA – FNA Partners</title>
        <meta
          name="description"
          content="At FNA Partners, we are your trusted partner for reliable and professional accounting service in UAE & Saudi Arabia. With 30 years of experience, we deliver accurate, timely, and compliant financial solutions tailored to businesses of all sizes."
        />
        <meta
          name="keywords"
          content="FNA Partners, accounting services, UAE, Saudi Arabia, bookkeeping, tax filing, business advisory, VAT compliance, audit"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ServicesPage",
              "name": "Services – FNA Partners",
              "description": "At FNA Partners, we are your trusted partner for reliable and professional accounting service in UAE & Saudi Arabia. With 30 years of experience, we deliver accurate, timely, and compliant financial solutions tailored to businesses of all sizes.",
            }),
          }}
        />
      </Head>
<Box bgcolor={"#F4F4F4"}>
  <Box mx={2}>
  <Box maxWidth="1100px" mx={"auto"} sx={{  py: 6 }} >
     <Box textAlign={"center" } maxWidth={"900px"} mx={"auto"} mb={4}>
     <Typography component="h1" variant="h4" sx={{ fontWeight: 500, mb: 1 }} >
          Comprehensive Accounting & Financial <br />
          Services in UAE & KSA
        </Typography>

        <Box
          sx={{
            maxWidth: '500px',
            height: 4,
            bgcolor: aquaColor,
            mx: 'auto',
            mb: 4,
          }}
        />
            <Typography component="h2" variant="h6" sx={{ mb: 2, fontWeight: 400 }}>
          We offer a full suite of accounting and financial services tailored to meet the unique needs of businesses in the UAE and Saudi Arabia. Our solutions include:
        </Typography>

     </Box>

    
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item size={{xs:12,sm:6,md:6}} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                {/* <Box
                  sx={{
                    width: 13,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: aquaColor,
                    // display:"flex",
                    mr: 2,
                  }}
                /> */}
                <Circle sx={{color:aquaColor,fontSize:12,mr:1}} />
                <Typography variant="body1" alignItems={"start"}>
                   <span style={{fontWeight:600}}> {service.title}  </span>     {service.description}
                </Typography>
                {/* <Typography variant="body2" sx={{ color: blackColor, fontSize: '16px' }}>
                {service.description}
              </Typography> */}
              </Box>
         
            </Grid>
          ))}
        </Grid>
      </Box>
  </Box>
      </Box>
    </>
  )
}
