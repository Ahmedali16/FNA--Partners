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

export default function PrivacyData() {
  const sections = [
    {
      title: 'Purpose',
      content: `This Privacy Policy explains how FNA Partners collects, uses, discloses, and protects your personal data in accordance with applicable data protection laws of the UAE, Saudi Arabia, and where applicable, the GDPR.`,
    },
    {
      title: 'Information We Collect',
      content: `• Personal Information: Name, email, phone number, business details.
• Usage Data: IP address, browser type, pages visited.
• Cookies and Tracking: As described in our Cookie Policy.`,
    },
    {
      title: 'How We Use Your Information',
      content: `• To provide and maintain our services.
• To communicate with you regarding inquiries, proposals, or support.
• To improve our website and user experience.
• To comply with legal obligations.`,
    },
    {
      title: 'Legal Basis for Processing',
      content: `We collect your data based on:
• Your consent
• Performance of a contract
• Legal obligation
• Legitimate interest (such as marketing and analytics)`,
    },
    {
      title: 'Sharing and Disclosure',
      content: `We do not sell your personal data. We may share it with:
• IT service providers and contractors
• Legal or regulatory authorities if required by law
• Partners or affiliates under strict data processing agreements`,
    },
    {
      title: 'International Transfers',
      content: `Your information may be stored and processed in countries outside of the UAE and Saudi Arabia. We ensure such transfers are compliant with applicable laws.`,
    },
    {
      title: 'Data Retention',
      content: `We retain your personal data only as long as necessary for the purposes outlined above or as required by law.`,
    },
    {
      title: 'Your Rights',
      content: `Depending on your jurisdiction, you may have the right to:
• Access, correct, or delete your personal data
• Object to or restrict certain processing
• Withdraw consent at any time`,
    },
    {
      title: 'Security Measures',
      content: `We employ administrative, technical, and physical safeguards to protect your information.`,
    },
    {
      title: 'Third-Party Links',
      content: `Our Website may contain links to other sites. We are not responsible for their content or privacy practices.`,
    },
    {
      title: 'Contact Us',
      content: `For questions about this policy, or to exercise your rights, contact:
Email: privacy@fnapartners.com`,
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
