// pages/login.tsx  (or wherever your Login component lives)

import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

export default function Login() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #184E77 0%, #2D91DD 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,

        // floating icon animation
        '@keyframes float': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      }}
    >
      <ConstructionIcon
        sx={{
          fontSize: 80,
          color: 'rgba(255,255,255,0.9)',
          mb: 2,
          animation: 'float 3s ease-in-out infinite',
        }}
      />

      <Typography variant="h3" component="h1" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
        Page Under Construction
      </Typography>

      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 4, maxWidth: 600 }}>
        We’re busy building something awesome. Check back soon, or head back home for more.
      </Typography>

      <Button
        component={Link}
        href="/"
        variant="contained"
        size="large"
        sx={{
          bgcolor: 'white',
          color: '#184E77',
          fontWeight: 600,
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.9)',
          },
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
}
