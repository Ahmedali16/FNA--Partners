import { aquaColor } from '@/components/utils/Colors';
import { Money } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
function BookkeepingSolutions() {
  return (
    <>
   <Box px={2}>
   <Box maxWidth="1100px" mx="auto" sx={{ py: 6 }}>
        <Box textAlign="center" maxWidth="900px" mx="auto" mb={4}>
          <Typography component="h1" variant="h4" sx={{ fontWeight: 500, mb: 1 }}>
            Our Comprehensive Bookkeeping Solutions
          </Typography>

          <Box
            sx={{
              maxWidth: '500px',
              height: 4,
              bgcolor: aquaColor,
              mx: 'auto',
              mb: 4,
            }}
          />
          <Typography component="h2" variant="h6" sx={{ mb: 2, fontWeight: 400 }}>
            Precision Accounting. Proactive Auditing. <br /> Your Growth, Guaranteed.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center">
          
          <Grid item size={{xs:12,sm:4}}>
           <Box display={"flex"}>
           <Box borderRadius={100} boxShadow={2} height={40} px={1} display={"flex"} alignItems={"center"}  width={40} >
        <CurrencyExchangeOutlinedIcon/>
      </Box>  
      <Box display={"flex"} flexDirection={"column"} ml={2}>
      <Typography variant="body1" sx={{ fontWeight: 400,fontSize:"20px"}}>
             
              Daily Transaction Recording
           
           
            </Typography>
            <Typography sx={{ fontWeight: 400, mb: 2 ,fontSize:"12px"}}>
            We accurately record all financial transactions, including sales, purchases, receipts, and payments, ensuring your books are always audit-ready.
            </Typography>
      </Box>
           </Box>
           <Box display={"flex"} ml={[0,0,-2]}>
           <Box borderRadius={100} boxShadow={2} height={40} px={1} display={"flex"} alignItems={"center"}  width={40} >
        <AccountBalanceOutlinedIcon/>
      </Box>  
      <Box display={"flex"} flexDirection={"column"} ml={2}>
      <Typography variant="body1" sx={{ fontWeight: 400,fontSize:"20px"}}>
      Bank Reconciliation

           
            </Typography>
            <Typography sx={{ fontWeight: 400, mb: 2 ,fontSize:"12px"}}>
            Regular reconciliation of bank statements with your books to detect discrepancies and maintain financial accuracy.
            </Typography>
      </Box>
           </Box>
           <Box display={"flex"}>
           <Box borderRadius={100} boxShadow={2} height={40} px={1} display={"flex"} alignItems={"center"}  width={40} >
        <BadgeOutlinedIcon  />
      </Box>  
      <Box display={"flex"} flexDirection={"column"} ml={2}> 
      <Typography variant="body1" sx={{ fontWeight: 400,fontSize:"20px"}}>
      Accounts Payable & Receivable Management

            </Typography>
            <Typography sx={{ fontWeight: 400, mb: 2 ,fontSize:"12px"}}>
            Efficient tracking of invoices, payments, and outstanding dues to improve cash flow.
            </Typography>
      </Box>
           </Box>
          </Grid>

       
          <Grid item size={{xs:12,sm:4}} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src="/images/Solutions.png" // Change the path to the correct one if needed
              width={300} // Adjust size as necessary
              height={300}
              alt="Top image"
              style={{
                objectFit: 'cover',
                height: 'auto',
                width: '100%',
              }}
              priority
            />
          </Grid>

          <Grid item size={{xs:12,sm:4}}>
           <Box display={"flex"}>
     
      <Box display={"flex"} flexDirection={"column"} mr={2}>
      <Typography variant="body1" sx={{ fontWeight: 400,fontSize:"20px" ,textAlign:"right"}}>
      Payroll Processing
           
           
            </Typography>
            <Typography sx={{ fontWeight: 400, mb: 2 ,fontSize:"12px"}}>
            Timely and accurate payroll calculations, deductions, and compliance with labor laws in UAE & Saudi Arabia.
            </Typography>
      </Box>
      <Box borderRadius={100} boxShadow={2} height={40} px={1} display={"flex"} alignItems={"center"}  width={40} >
        <CloudSyncOutlinedIcon/>
      </Box>    
           </Box>
           <Box display={"flex"} mr={[0,0,-2]}>
    
      <Box display={"flex"} flexDirection={"column"} mr={2}>
      <Typography variant="body1" sx={{ fontWeight: 400,fontSize:"20px",textAlign:"right"}}>
      Financial Reporting

           
            </Typography>
            <Typography sx={{ fontWeight: 400, mb: 2 ,fontSize:"12px"}}>
            Customized reports (P&L, balance sheets, cash flow statements) to help you monitor business performance.
            </Typography>
      </Box>
      <Box borderRadius={100} boxShadow={2} height={40} px={1} display={"flex"} alignItems={"center"}  width={40} >
        <DescriptionOutlinedIcon/>
      </Box>  
           </Box>
           <Box display={"flex"}>
     
      <Box display={"flex"} flexDirection={"column"} mr={2}>
      <Typography variant="body1" sx={{ fontWeight: 400,fontSize:"20px",textAlign:"right" }}>
      VAT & Tax Compliance

            </Typography>
            <Typography sx={{ fontWeight: 400, mb: 2 ,fontSize:"12px"}}>
            Expert handling of VAT filings, tax returns, and compliance with UAE & KSA regulations.
            </Typography>
      </Box>
      <Box borderRadius={100} boxShadow={2} height={40} px={1} display={"flex"} alignItems={"center"}  width={40} >
        <RequestQuoteOutlinedIcon/>
      </Box>  
           </Box>
          </Grid>
        </Grid>
      </Box>
   </Box>
    </>
  );
}

export default BookkeepingSolutions;
