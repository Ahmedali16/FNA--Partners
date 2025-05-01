'use client';

import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CookieData() {
  const sections = [
    {
      title: 'What Are Cookies?',
      content: `Cookies are small text files that are placed on your device when you visit our Website. They help us understand how users interact with the site and enhance your user experience.`,
    },
    {
      title: 'Types of Cookies We Use',
      content: `• Essential Cookies: Necessary for website functionality.
• Analytics Cookies: Help us understand user behavior using tools like Google Analytics.
• Functionality Cookies: Remember your preferences and settings.
• Marketing Cookies: Track your interaction for advertising purposes (if any).`,
    },
    {
      title: 'Consent to Use Cookies',
      content: `Upon your first visit, a banner will inform you about our cookie usage and request your consent.`,
    },
    {
      title: 'Managing Cookies',
      content: `You can modify your browser settings to block or delete cookies. Please note, this may affect your browsing experience.`,
    },
    {
      title: 'Third-Party Cookies',
      content: `We may use third-party services that place their own cookies, such as embedded YouTube videos or analytics services. These third parties have their own privacy policies.`,
    },
    {
      title: 'Updates to This Policy',
      content: `We may update our Cookie Policy from time to time. The latest version will always be available on this page.`,
    },
  ];

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', my: 4, px: 2 }}>


      {sections.map((section, idx) => (
        <Accordion key={idx} disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${idx}-content`}
            id={`panel${idx}-header`}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              {`${idx + 1}. ${section.title}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
              {section.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
