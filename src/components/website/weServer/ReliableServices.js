'use client'  // Make this component a client-side component
import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
} from '@mui/material'
import { aquaColor, blackColor } from '@/components/utils/Colors'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ReliableServices() {
  const theme = useTheme()

  useEffect(() => {
    // Initialize AOS (scroll-based animations)
    AOS.init({
      duration: 600,      // animation duration in ms
      easing: 'ease-out', // easing
      once: true,         // only animate once
      anchorPlacement: 'top-center', // animation trigger position
    })
  }, [])

  return (
    <>
      <Head>
        <title>Premier Accounting & Auditing Experts in UAE & Saudi Arabia | FNA Partners</title>
        <meta
          name="description"
          content="Welcome to FNA Partners, your trusted partner for professional accounting services in UAE & Saudi Arabia. With years of expertise, we help businesses streamline their finances, minimize risks, and maximize growth."
        />
     <meta
  name="keywords"
  content="FA Partners, best accounting services UAE, best accounting services United Arab Emirates,FA Partners, best accounting services Dubai,FA Partners, best accounting services Abu Dhabi, best accounting services Sharjah, best accounting services Ajman,FA Partners, best accounting services Ras Al Khaimah, best accounting services Fujairah, best accounting services Umm Al Quwain, best accounting services Saudi Arabia, best accounting services KSA, FA Partners,best accounting services Riyadh,FA Partners, best accounting services Jeddah, best accounting services Dammam, best accounting services Khobar, best accounting services Makkah, best accounting services Medina, best accounting services Al Khobar,FA Partners, top accounting services UAE, top accounting services United Arab Emirates, top accounting services Dubai, top accounting services Abu Dhabi, top accounting services Sharjah,FA Partners, top accounting services Ajman,FA Partners, top accounting services Ras Al Khaimah, best auditing services UAE, top bookkeeping services Dubai,FA Partners, trusted VAT compliance UAE,FA Partners, corporate tax planning, FA Partners,Zakat advisory,FA Partners, forensic accounting services, business advisory UAE, financial management solutions, FA Partners,payroll outsourcing services, tax consultancy,FA Partners, company formation services, FA Partners,SME accounting solutions,FA Partners, internal audit services, risk assessment,FA Partners,FA Partners, IFRS compliance, remote CFO services, FA Partners,digital transformation finance,FA Partners" />
      </Head>

      <Box mx={2} my={4}>
        <Box maxWidth={"1100px"} mx={"auto"}>
          <Grid container alignItems="center" spacing={4}>
            <Grid item size={{xs:12,md:6}}>
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  fontSize: ["26px", "28px", "30px"],
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
             Accurate & Reliable Bookkeeping Services for Your Business

              </Typography>

              <Box
                sx={{
                  height: 2,
                  bgcolor: aquaColor,
                  mb: 3,
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: blackColor,
                  fontWeight: 400,
                  fontSize: ["18px", "18px", "20px"],
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                At FNA Partners, we provide expert bookkeeping services in UAE & Saudi Arabia, ensuring your financial records are accurate, compliant, and up to date. Our team of certified accountants helps businesses streamline their financial operations, reduce errors, and make data-driven decisions with confidence.

              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: blackColor,
                  fontWeight: 400,
                  fontSize: ["18px", "18px", "20px"],
                }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
              Whether you're a startup, SME, or large corporation, our tailored bookkeeping solutions ensure seamless financial management, allowing you to focus on growing your business.
              </Typography>

              <Button
                variant="contained"
                href="/contact-us"
                sx={{
                  bgcolor: aquaColor,
                  color: '#fff',
                  textTransform: 'none',
                  px: 3,
                  py: 1.5,
                  '&:hover': { bgcolor: aquaColor },
                }}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Visit Now
              </Button>
            </Grid>

            <Grid item size={{xs:12,md:6}}>
           
              <Box data-aos="fade-up" data-aos-delay="500" display={"flex"} justifyContent={"center"}>
                <Image
                  src="/images/ReliableService.png"
                  width={800}
                  height={800}
                  alt="Top image"
                  style={{
                    objectFit: 'cover',
                    height: 'auto',
                    width: '90%',
                  }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
 