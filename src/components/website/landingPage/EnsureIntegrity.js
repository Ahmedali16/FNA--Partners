import { Box, Typography } from '@mui/material';
import React from 'react';

function EnsureIntegrity() {
  return (
    <>
      <Box
        sx={{
      
          backgroundImage: `url('/images/integrity.png'), linear-gradient(to right, #184E77, #2D91DD)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          padding: '60px 20px',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '300px',
    
        }}
      >
        <Box sx={{ maxWidth: '900px' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Ensuring Compliance & Financial Integrity
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 400 }}>
            Navigating the complex financial regulations in UAE & Saudi Arabia can be challenging. Our team stays updated with the latest tax laws, accounting standards, and compliance requirements to safeguard your business. 
            From VAT compliance in UAE to Zakat and corporate tax in Saudi Arabia, we ensure your financial operations remain fully compliant, reducing risks and avoiding costly penalties.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default EnsureIntegrity;
