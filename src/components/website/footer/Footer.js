
"use client"
import { aquaColor } from '@/components/utils/Colors'
import { EmailOutlined, LinkedIn, PhoneOutlined } from '@mui/icons-material'
import { Box, Grid, Icon, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <Box bgcolor={"#F8F8F8"} px={4} py={4} >


          <Grid container spacing={4}>
            <Grid  size={{xs:12,sm:6,md:3}}>
            <Image
                src="/images/faPartners.png"
                alt="FA Partners Logo"
                width={170}
                height={78}
            />
            </Grid>
            <Grid size={{xs:12,sm:6,md:3}}>
            <Box display={"flex"} flexDirection={"column"} >
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
            </Grid>
            <Grid size={{xs:12,sm:6,md:3}}>
            <Box display={"flex"} flexDirection={"column"} >
                <Typography fontWeight={"bold"} >
                    Quick Links
                </Typography>
                <Link href={"/privacy-policy"} style={{ textDecoration: "none", color: "black" }}>
                    <Typography sx={{ ":hover": { color: aquaColor,transition:"0.3s" },transition:"0.3s" }}>Privacy Policy</Typography>
                </Link>
                <Link href={"/terms-and-condition"} style={{ textDecoration: "none", color: "black" }}>
                    <Typography sx={{ ":hover": { color: aquaColor,transition:"0.3s" },transition:"0.3s" }}> Terms and conditions  </Typography>
                </Link>
                <Link href={"/cookie-policy"} style={{ textDecoration: "none", color: "black" }}>
                    <Typography sx={{ ":hover": { color: aquaColor,transition:"0.3s" },transition:"0.3s" }}> Cookie Policy  </Typography>
                </Link>
            </Box>
            </Grid>
            <Grid size={{xs:12,sm:6,md:3}}>
            <Box display={"flex"} flexDirection={"column"} >
                <Typography fontWeight={"bold"} >
                    Contact Us
                </Typography>
<Box display={"flex"} alignItems={"center"}>
    <PhoneOutlined sx={{fontSize:18}}/>
    <Typography ml={2} sx={{ ":hover": { color: aquaColor,transition:"0.3s" },transition:"0.3s" }}>050-2405436</Typography>

    </Box>                 
    <Box display={"flex"} alignItems={"center"}>
    <EmailOutlined sx={{fontSize:18}}/>
    <Typography ml={2} sx={{ ":hover": { color: aquaColor,transition:"0.3s" },transition:"0.3s" }}>info@fna-partners.com  </Typography>

    </Box>  
    <Box mt={1}>
<IconButton href='https://www.linkedin.com/company/fna-partners-gcc/' target='_blank'>

        <LinkedIn  sx={{color:aquaColor}} />
</IconButton>
    </Box>

              
            </Box>
            </Grid>
          </Grid>
          
        </Box>
    )
}

export default Footer