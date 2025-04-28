'use client'
import React from 'react'
import Head from 'next/head'
import { Container, Box, Typography } from '@mui/material'
import { aquaColor } from '@/components/utils/Colors'

export default function BookkeepingServices() {
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
              "description": "At FNA Partners, we are your trusted partner for reliable and professional accounting service in UAE & Saudi Arabia. With 30 years of experience, we deliver accurate, timely, and compliant financial solutions tailored to businesses of all sizes."
            })
          }}
        />
      </Head>

      <Container maxWidth="md" sx={{ textAlign: 'center', py: 6 }}>
        <Typography component="h1" variant="h4" sx={{ fontWeight: 500, mb: 1 }}>
        Bookkeeping Services in UAE & KSA – FNA Partners
        </Typography>

        <Box
          sx={{
            maxWidth: "500px",
            height: 4,
            bgcolor: aquaColor,
            mx: 'auto',
            mb: 4,
          }}
        />

        <Typography component="h2" variant="h6" sx={{ mb: 2, fontWeight: 400 }}>
        Expert bookkeeping services in UAE & KSA – accurate, compliant records for stress-free business growth.
        </Typography>

      </Container>
    </>
  )
}
 