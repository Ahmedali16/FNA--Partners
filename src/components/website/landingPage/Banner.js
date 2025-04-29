"use client"
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Head from 'next/head';
import React from 'react';
import { aquaColor } from '@/components/utils/Colors';
import { useRef, useLayoutEffect  } from 'react';
import gsap from 'gsap';

function Banner() {
  const headingRef = useRef(null)
  const subRef     = useRef(null)
  const btnRef     = useRef(null)

  useLayoutEffect(() => {
    const runAnimation = () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from(headingRef.current, { y: 60, opacity: 0, duration: 1.2 })
          .from(subRef.current,     { y: 40, opacity: 0, duration: 1   }, '-=0.8')
          .from(btnRef.current,     { scale: 0.8, opacity: 0, duration: 0.8 }, '-=0.6')

        const btn = btnRef.current
        btn.addEventListener('mouseenter', () =>
          gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
        )
        btn.addEventListener('mouseleave', () =>
          gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' })
        )
      })

      return () => ctx.revert()
    }

    if (document.readyState === 'complete') {
      return runAnimation()
    } else {
      window.addEventListener('load', runAnimation, { once: true })
      return () => window.removeEventListener('load', runAnimation)
    }
  }, [])
  return (
    <>
      <Head>
      <link
    rel="preload"
    // href="/videos/banner.mp4"
     href="/videos/dubai.mp4"
    as="video"
    type="video/mp4"
     crossOrigin="anonymous"
  />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Leading Accounting & Auditing Services in UAE & Saudi Arabia | FA Partners
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
          height: '90vh',
          overflow: 'hidden',
        }}
      >
        {/* <Image
          src="/images/banner.png"
          alt="Banner"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        /> */}
<Box
  sx={{
    position: 'relative',
    width: '100%',
    height: '97vh',
    overflow: 'hidden',
  }}
>
  <video
    src="/videos/dubai.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -2,         // sit behind the overlay
    }}
  />

  {/* ← Add this overlay */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',  // 50% black
      zIndex: -1,
    }}
  />


        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: { xs: '90%', sm: '80%', md: '80%', lg: '80%' },
            minWidth: '300px',
            maxWidth: '1000px',
            px: 2,
            color: '#fff',
          }}
        >
          <Typography
            ref={headingRef}
            component="h1"
            sx={{
              fontWeight: 500,
              lineHeight: 1.2,
              mb: 2,
              fontSize: { xs: '33px', sm: '34px', md: '40px' },
            }}
          >
            Leading Accounting & Auditing Services<br />
            in UAE & Saudi Arabia | FNA Partners
          </Typography>

          <Typography
            ref={subRef}
            variant="subtitle1"
            sx={{
              mb: 4,
              fontSize: { xs: '17px', sm: '18px', md: '20px' },
            }}
          >
            Precision Accounting. Proactive Auditing. Your Growth. Guaranteed.
          </Typography>

          <Button
            ref={btnRef}
            variant="contained"
            size="medium"
            sx={{
              bgcolor: aquaColor,
              textTransform: 'none',
              px: 2,
              py: 1,
              fontSize: { xs: '0.875rem', sm: '1rem' },
            }}
            href="/contact-us"
          >
            Get Your Free Financial Consultation
          </Button>
        </Box>
      </Box>
      </Box>
    </>
  );
}

export default Banner;
