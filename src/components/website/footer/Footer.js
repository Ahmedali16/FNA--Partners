
"use client"
import { aquaColor } from '@/components/utils/Colors'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <Box bgcolor={"#F8F8F8"} px={4} py={4} display={"flex"} flexDirection={["column", "column", "row"]}>


            <Image
                src="/images/faPartners.png"
                alt="FA Partners Logo"
                width={140}
                height={78}
            />
            <Box display={"flex"} flexDirection={"column"} ml={[0, 0, 7]}>
                <Typography fontWeight={"bold"} >
                    Site Map
                </Typography>
                <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
                    <Typography sx={{ ":hover": { color: aquaColor,transition:"0.3s" },transition:"0.3s" }}>Home</Typography>
                </Link>
                <Link href={"/about-us"} style={{ textDecoration: "none", color: "black" }}>
                    <Typography sx={{ ":hover": { color: aquaColor,transition:"0.3s" },transition:"0.3s" }}>    About Us  </Typography>
                </Link>
                <Link href={"/contact-us"} style={{ textDecoration: "none", color: "black" }}>
                    <Typography sx={{ ":hover": { color: aquaColor,transition:"0.3s" },transition:"0.3s" }}>  Contact Us  </Typography>
                </Link>
            </Box>
        </Box>
    )
}

export default Footer