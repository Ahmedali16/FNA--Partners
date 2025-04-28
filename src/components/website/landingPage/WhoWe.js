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

export default function WhoWe() {
  const theme = useTheme()

  useEffect(() => {

    AOS.init({
      duration: 600,     
      easing: 'ease-out',
      once: true,        
      anchorPlacement: 'top-center',
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

      <Box mx={2} my={7}>
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
              Who We Are
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
For 30 years, FNA Partners has been the financial backbone for businesses across Saudi Arabia and the UAE. As a leading accounting and auditing firm, we combine decades of local expertise with global best practices to deliver accurate, compliant, and strategic financial solutions.

              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "#A1A1A1",
                  fontWeight: 400,
                  fontSize: ["18px", "18px", "20px"],
                }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
               We serve startups, SMEs, and multinational corporations, ensuring they meet compliance standards while maximizing profitability.

              </Typography>

              <Button
                variant="contained"
                href="/about-us"
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
                Read More
              </Button>
            </Grid>

            <Grid item size={{xs:12,md:6}}>
           
              <Box data-aos="fade-up" data-aos-delay="500" display={"flex"} justifyContent={"center"}>
                <Image
                  src="/images/WhoWeAre.png"
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
 