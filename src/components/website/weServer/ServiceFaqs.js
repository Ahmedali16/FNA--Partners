// src/components/website/landingPage/ServiceFaqs.js
'use client'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import AOS from 'aos'
import 'aos/dist/aos.css'
import FormOnly from '../contact-us/FormOnly'
import { aquaColor } from '@/components/utils/Colors'

export default function ServiceFaqs() {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      anchorPlacement: 'top-center',
    })
  }, [])

  const faqs = [
    {
      question: 'What bookkeeping services do you offer in UAE & Saudi Arabia?',
      answer:
        'We provide end-to-end solutions including daily transaction recording, accounts payable/receivable, payroll processing, bank reconciliations, VAT-compliant reporting, and custom financial statements.',
    },
    {
      question: 'Why outsource bookkeeping to FNA Partners?',
      answer:
        'Outsourcing to FNA Partners lets you leverage our expertise, reduce overhead, and stay fully compliant with local regulations while focusing on your core business.',
    },
    {
      question: 'Are your services compliant with UAE VAT & Saudi Zakat regulations?',
      answer:
        'Absolutely. Our certified accountants keep up to date on all VAT and Zakat rules in both jurisdictions to ensure 100% compliance.',
    },
    {
      question: 'How much do bookkeeping services cost in UAE/KSA?',
      answer:
        'Our pricing is customized based on transaction volume, scope of work, and complexity. Contact us for a free quote tailored to your needs.',
    },
    {
      question: 'How often will I receive financial reports?',
      answer:
        'We offer daily summaries, weekly dashboards, and detailed monthly statements—pick the cadence that suits your business.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Just fill out the form on the left or reach out directly. One of our advisors will contact you within 24 hours to kick things off.',
    },
  ]

  const handleChange = panel => (_e, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      <Head>
        <title>FAQ – FNA Partners | Bookkeeping &amp; Accounting UAE &amp; KSA</title>
        <meta
          name="description"
          content="Got questions? We&apos;ve got answers! See our FAQs about bookkeeping, VAT compliance, and financial reporting for UAE &amp; Saudi Arabia."
        />
        <meta
          name="keywords"
          content="FNA Partners FAQ, bookkeeping FAQ, accounting FAQ, VAT compliance, financial reporting FAQ"
        />
      </Head>

      <Box mx={2}>
        <Box maxWidth="1100px" mx="auto" py={8}>
          <Box textAlign="center" mb={4} maxWidth="700px" mx="auto">
            <Typography
              component="h2"
              variant="h5"
              sx={{ fontWeight: 600, fontSize: '30px' }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#434343', fontSize: '20px' }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We understand that you might have a few questions along the way, and we&apos;re here to make things as clear as possible.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {faqs.map((faq, i) => (
              <Grid key={i} item size={{xs:12,md:6}}>
                <Accordion
                  expanded={expanded === `panel${i}`}
                  onChange={handleChange(`panel${i}`)}
                  sx={{
                    boxShadow: 3,
                    borderRadius: 1,
                    '&::before': { display: 'none' },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Box
                        sx={{
                          width: 26,
                          height: 26,
                          bgcolor: aquaColor,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {expanded === `panel${i}` ? (
                          <RemoveIcon sx={{ color: '#fff', fontSize: 16 }} />
                        ) : (
                          <AddIcon sx={{ color: '#fff', fontSize: 16 }} />
                        )}
                      </Box>
                    }
                    sx={{
                      px: 2,
                      py: 1.5,
                      '& .MuiAccordionSummary-content': { margin: 0 },
                    }}
                  >
                    <Typography sx={{ fontWeight: 500, fontSize: '15px' }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 2, pb: 2 }}>
                    <Typography sx={{ fontSize: '15px', color: '#434343' }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}
