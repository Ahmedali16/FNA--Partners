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

export default function TermsData() {
  const sections = [
    {
      title: 'Introduction',
      content: `Welcome to FNA Partners. These Terms and Conditions ("Terms") govern your use of our website [www.fnapartners.com] ("Website"). By accessing or using our Website, you agree to be legally bound by these Terms.`,
    },
    {
      title: 'Company Information',
      content: `FNA Partners is a professional accounting and financial advisory firm, legally operating under the laws of the United Arab Emirates and the Kingdom of Saudi Arabia.`,
    },
    {
      title: 'Use of the Website',
      content: `• You agree to use this Website only for lawful purposes.
• You must not use the Website in any way that breaches any applicable local, national, or international law.
• Unauthorized use of this Website may give rise to a claim for damages and/or be a criminal offense.`,
    },
    {
      title: 'Intellectual Property',
      content: `All content on this Website, including text, graphics, logos, and software, is the property of FNA Partners unless otherwise stated. Unauthorized use may violate copyright, trademark, and other laws.`,
    },
    {
      title: 'Disclaimers',
      content: `• FNA Partners provides the Website on an "as is" and "as available" basis.
• We make no warranties or guarantees as to the accuracy, completeness, or timeliness of the content.
• Professional accounting or financial advice is not provided via this Website unless otherwise stated.`,
    },
    {
      title: 'Limitation of Liability',
      content: `To the fullest extent permitted by law, FNA Partners disclaims any liability for any direct, indirect, incidental, or consequential loss or damage arising out of or related to your use of the Website.`,
    },
    {
      title: 'Third-Party Links',
      content: `Our Website may contain links to third-party websites. We do not endorse or accept responsibility for the content or privacy practices of such third parties.`,
    },
    {
      title: 'User Accounts',
      content: `If the Website allows the creation of user accounts:
• You are responsible for maintaining the confidentiality of your login information.
• FNA Partners reserves the right to terminate or suspend accounts that violate our Terms.`,
    },
    {
      title: 'Governing Law',
      content: `These Terms are governed by and construed in accordance with the laws of:
• The United Arab Emirates for UAE-based users.
• The Kingdom of Saudi Arabia for KSA-based users.`,
    },
    {
      title: 'Amendments',
      content: `FNA Partners reserves the right to amend these Terms at any time. Your continued use of the Website constitutes acceptance of the updated Terms.`,
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
