'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
    Container,
    Box,
    Grid,
    Typography,
    useTheme
} from '@mui/material'
import { aquaColor } from '@/components/utils/Colors'
import { Circle } from '@mui/icons-material'

const guaranteeData = [
    {
        title: 'Regulatory Expertise',
        points: [
            'In-depth knowledge of evolving VAT, Zakat & corporate tax regulations',
            'Compliance audits aligned with UAE & KSA statutory guidelines',
            'Expert guidance on IFRS, local GAAP & regulatory filings'
        ]
    },
    {
        title: 'Structured Compliance Framework',
        points: [
            'Risk assessments tailored to your operational processes',
            'Documented policies, procedures & internal controls',
            'Regular gap analyses and remediation roadmaps'
        ]
    },
    {
        title: 'Technology-Driven Accuracy',
        points: [
            'Automated reconciliations via best-in-class software',
            'Real-time data validation & reporting dashboards',
            'Secure cloud platform ensuring data integrity'
        ]
    },
    {
        title: 'Continuous Monitoring & Updates',
        points: [
            'Ongoing compliance health checks & performance metrics',
            'Instant notifications on regulatory changes',
            'Proactive audit readiness and support'
        ]
    }
]

export default function GuaranteeCompliance() {
    const theme = useTheme()

    useEffect(() => {
        AOS.init({
            offset: 0,
            duration: 600,
            easing: 'ease-out',
            once: true,
            anchorPlacement: 'top-center'
        })
    }, [])

    return (
        <Box bgcolor={"#F8F8F8"} >
            <Box mx={3}>
                <Box maxWidth={"850px"} mx={"auto"} py={5}>
                    <Typography
                        component="h2"
                        variant="h4"
                        align="center"
                        sx={{ fontWeight: 500, mb: 2, fontSize: ["26px", "28px", "30px"] }}
                    >
                        How We Guarantee Compliance & Financial Accuracy
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

                    <Grid container spacing={4}>
                        {guaranteeData.map((section, i) => (
                            <Grid
                                item

                                size={{ xs: 12, md: 6 }}
                                sx={{ my: 1 }}
                                key={section.title}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}

                            >
                                <Box
                                    sx={{
                                        borderTop: `4px solid ${aquaColor}`,
                                        borderLeft: `4px solid ${aquaColor}`,
                                        borderRadius: 1,
                                        bgcolor: "white",
                                        p: 3,
                                        minHeight: '180px',
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 540, mb: 1, fontSize: "20px" }}
                                    >
                                        {section.title}
                                    </Typography>

                                    <Box

                                        sx={{
                                            m: 0,
                                            p: 0,
                                            listStyle: 'inside',
                                        }}
                                    >
                                        {section.points.map((pt) => (
                                            <Box display={"flex"} key={pt} alignItems={"center"} >
                                                <Circle sx={{ height: "10px", width: "10px", mr: 1 }} />
                                                <Typography
                                                    // component="li"
                                                    variant="body2"
                                                    sx={{ mb: 0.5, fontSize: "14px" }}

                                                >
                                                    {pt}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

        </Box>
    )
}
