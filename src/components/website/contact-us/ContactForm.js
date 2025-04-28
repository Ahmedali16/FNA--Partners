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
import FormOnly from './FormOnly'
const bulletPoints = [
    'Certified Professionals',
    'Transparent Pricing',
    'Timely & Accurate Reporting',
    'Confidentiality & Integrity',
    'Dedicated Client Support',
]


export default function ContactForm() {
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
                    content="financial consultation, accounting consultation, free consultation, FNA Partners, UAE accounting, Saudi Arabia accounting"
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

            <Box mx={2}>
                <Box maxWidth={"1100px"} mx={"auto"} sx={{ py: 8 }} >
                    <Grid container spacing={4} alignItems="center">
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography
                                component="a"
                                href="/contact-us"
                                sx={{
                                    display: 'inline-block',
                                    mb: 1,
                                    color: aquaColor,
                                    textDecoration: 'underline',
                                    fontSize: ["17px", "18px", "20px"],
                                    fontWeight: 500,

                                }}
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                Get Free Consultation Now
                            </Typography>

                            <Typography
                                component="h1"
                                variant="h4"
                                data-aos="fade-up"
                                data-aos-delay="200"
                                sx={{ fontWeight: 500, mb: 2, fontSize: ["35px", "40px", "45px"] }}
                            >
                                Get Started with a Free Financial Consultation
                            </Typography>

                            <Typography
                                data-aos="fade-up"
                                data-aos-delay="300"
                                component="p"
                                variant="body1"
                                sx={{ mb: 3, color: blackColor, fontSize: "18px" }}
                            >
                                Ready to streamline your finances and ensure compliance? Let’s discuss how we can support your business growth.
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
                                            bgcolor: "#184E77",
                                            mr: 1.5,
                                        }}
                                    />
                                    <Typography variant="body1">{point}</Typography>
                                </Box>
                            ))}
                        </Grid>

                        <Grid item size={{ xs: 12, md: 6 }}>

                            <FormOnly />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
