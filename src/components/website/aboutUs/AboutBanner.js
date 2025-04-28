
'use client';

import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutBanner() {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 1000,
          easing: 'ease-in-out',
          once: false,
          mirror: false,
          anchorPlacement: 'center-center',
        });
      }, []);

  return (
    <>
      <Head>

<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>
  About Us | FA Partners
</title>
<meta
  name="description"
  content="FA Partners offers expert accounting, auditing, VAT & Zakat compliance, bookkeeping, payroll, tax filing, and business advisory services across UAE & Saudi Arabia. Free financial consultation available."
/>
<meta
  name="keywords"
  content="FA Partners, best accounting services UAE, best accounting services United Arab Emirates,FA Partners, best accounting services Dubai,FA Partners, best accounting services Abu Dhabi, best accounting services Sharjah, best accounting services Ajman,FA Partners, best accounting services Ras Al Khaimah, best accounting services Fujairah, best accounting services Umm Al Quwain, best accounting services Saudi Arabia, best accounting services KSA, FA Partners,best accounting services Riyadh,FA Partners, best accounting services Jeddah, best accounting services Dammam, best accounting services Khobar, best accounting services Makkah, best accounting services Medina, best accounting services Al Khobar,FA Partners, top accounting services UAE, top accounting services United Arab Emirates, top accounting services Dubai, top accounting services Abu Dhabi, top accounting services Sharjah,FA Partners, top accounting services Ajman,FA Partners, top accounting services Ras Al Khaimah, best auditing services UAE, top bookkeeping services Dubai,FA Partners, trusted VAT compliance UAE,FA Partners, corporate tax planning, FA Partners,Zakat advisory,FA Partners, forensic accounting services, business advisory UAE, financial management solutions, FA Partners,payroll outsourcing services, tax consultancy,FA Partners, company formation services, FA Partners,SME accounting solutions,FA Partners, internal audit services, risk assessment,FA Partners,FA Partners, IFRS compliance, remote CFO services, FA Partners,digital transformation finance,FA Partners" />
<meta name="robots" content="index, follow" />
<meta
  property="og:title"
  content="Leading Accounting & Auditing Services in UAE & Saudi Arabia | FA Partners"
/>
<meta
  property="og:description"
  content="Streamline your finances and ensure full compliance with FA Partners—your trusted accounting & auditing experts in UAE & Saudi Arabia."
/>
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta
  name="twitter:title"
  content="Leading Accounting & Auditing Services in UAE & Saudi Arabia | FA Partners"
/>
<meta
  name="twitter:description"
  content="Expert accounting, auditing, VAT compliance & business advisory services in UAE & Saudi Arabia. Free consultation!"
/>

</Head>

<Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '50vh',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/images/aboutUsBanner.png"
          alt="About Us Banner"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />

        <Box
          data-aos="fade-up"
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: 500,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textAlign: 'center',
            }}
          >
            About Us
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default AboutBanner;
