'use client'
import React, { useEffect } from 'react'
import Head from 'next/head'
import {
    Box,
    Grid,
    Typography,

} from '@mui/material'
import { aquaColor, blackColor } from '@/components/utils/Colors'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

const bulletPoints = [
    'Accurate recording of financial transactions for better decision-making.',
    'Expert tax planning and timely submissions to avoid penalties.',
    'Efficient payroll processing to ensure compliance with local labor laws.',
    'Strategic financial guidance to optimize business performance',
]


export default function LandingServices() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-out',
            once: true,
        })
    }, [])

    return (
        <>
            <Head>
                <title>Get Started with a Free Financial Consultation | FNA Partners</title>
                <meta
                    name="description"
                    content="Ready to streamline your finances and ensure compliance? Let's discuss how we can support your business growth."
                />
                <meta
                    name="keywords"
                    content="FNA Partners provides end-to-end accounting, auditing, VAT & Zakat compliance, payroll outsourcing, and strategic financial advisory across the UAE and Saudi Arabia. Leverage 30 years of local & international expertise to streamline your finances and ensure full regulatory compliance ,FA Partners, best accounting services UAE, best accounting services United Arab Emirates,FA Partners, best accounting services Dubai,FA Partners, best accounting services Abu Dhabi, best accounting services Sharjah, best accounting services Ajman,FA Partners, best accounting services Ras Al Khaimah, best accounting services Fujairah, best accounting services Umm Al Quwain, best accounting services Saudi Arabia, best accounting services KSA, FA Partners,best accounting services Riyadh,FA Partners, best accounting services Jeddah, best accounting services Dammam, best accounting services Khobar, best accounting services Makkah, best accounting services Medina, best accounting services Al Khobar,FA Partners, top accounting services UAE, top accounting services United Arab Emirates, top accounting services Dubai, top accounting services Abu Dhabi, top accounting services Sharjah,FA Partners, top accounting services Ajman,FA Partners, top accounting services Ras Al Khaimah, best auditing services UAE, top bookkeeping services Dubai,FA Partners, trusted VAT compliance UAE,FA Partners, corporate tax planning, FA Partners,Zakat advisory,FA Partners, forensic accounting services, business advisory UAE, financial management solutions, FA Partners,payroll outsourcing services, tax consultancy,FA Partners, company formation services, FA Partners,SME accounting solutions,FA Partners, internal audit services, risk assessment,FA Partners,FA Partners, IFRS compliance, remote CFO services, FA Partners,digital transformation finance,FA Partners."
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ContactPage",
                            "name": "Get Free Consultation",
                            "description": "Ready to streamline your finances and ensure compliance? Let's discuss how we can support your business growth.",

                        })
                    }}
                />
            </Head>
<Box bgcolor={"#F4F4F4"}>
            <Box mx={2}>
                <Box maxWidth={"1100px"} mx={"auto"} sx={{ py: 8 }} >
                    <Grid container spacing={4} alignItems="center">
                    <Grid item size={{ xs: 12, md: 6 }}>

<Box data-aos="fade-up" data-aos-delay="500" display={"flex"} justifyContent={"center"}>
            <Image
              src="/images/ServicesUae.png"
              width={800}
              height={800}
              alt="Top image"
              style={{
                objectFit: 'cover',
                height: 'auto',
                width: '80%',
              }}
              priority
            />
          </Box>
</Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
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
                                         Comprehensive Accounting & Financial Services in UAE & KSA

                                       </Typography>
                         
                                       <Box
                                         sx={{
                                           height: 2,
                                           bgcolor: aquaColor,
                                           mb: 3,
                                         }}
                                       />

                            <Typography
                                data-aos="fade-up"
                                data-aos-delay="300"
                                component="p"
                                variant="body1"
                                sx={{ mb: 3, color: blackColor, fontSize: "18px" }}
                            >
                                We offer a full suite of accounting and financial services tailored to meet the unique needs of businesses in the UAE and Saudi Arabia. Our solutions include:
                            </Typography>

                            {bulletPoints.map((point, i) => (
                                <Box key={point}
                                    data-aos="fade-up"
                                    data-aos-delay={400 + i * 100}
                                    sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <Box
                                        sx={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            bgcolor: aquaColor,
                                            mr: 1.5,
                                        }}
                                    />
                                    <Typography variant="body1">{point}</Typography>
                                </Box>
                            ))}
                        </Grid>

                 
                    </Grid>
                </Box>
            </Box>
            </Box>
        </>
    )
}
 