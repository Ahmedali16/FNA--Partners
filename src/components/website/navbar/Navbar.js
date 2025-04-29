'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ScaleLoader } from 'react-spinners';
import { aquaColor, blackColor, whiteColor } from '@/components/utils/Colors';

export default function Navbar() {
  const navItems = [
    { title: 'Home', route: '/' },
    { title: 'About Us', route: '/about-us' },
    { title: 'We Serve', route: '/we-serve' },
  ];

  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
   const isMobile = useMediaQuery(
       theme.breakpoints.down('md'),
       { noSsr: true }
     );

  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false); // State to track scrolling

  const handleNavigation = (route) => {
    setLoading(true);
    setDrawerOpen(false);
    router.push(route);
    setTimeout(() => setLoading(false), 1000);
  };

  // Handle scroll event to change navbar color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const drawerContent = (
    <Box sx={{ width: 250, bgcolor: whiteColor, height: '100%' }}>
      <Box display={"flex"} justifyContent={"center"} mt={2}>
        <Image
          src="/images/faPartners.png"
          alt="FA Partners Logo"
          width={110}
          height={58}
        />
      </Box>
      <List sx={{ mt: 2 }}>
        {navItems.map((item) => {
          const selected = pathname === item.route;
          return (
            <ListItem key={item.route} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.route)}
                sx={{
                  bgcolor: selected ? aquaColor : 'transparent',
                  color: selected ? whiteColor : blackColor,
                  mx: 2,
                  my: 1,
                  borderRadius: 2,
                }}
              >
                <Typography>{item.title}</Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleNavigation('/login')}
            sx={{
              bgcolor: pathname === '/login' ? aquaColor : 'transparent',
              color: pathname === '/login' ? whiteColor : blackColor,
            }}
          >
            <Typography>Login</Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.7)',
            zIndex: 20000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ScaleLoader color={aquaColor} size={80} />
        </Box>
      )}

      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0,
          width: '98%',
          py: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 1600,
          px: 2,
          backgroundColor: scrolling ? whiteColor : 'transparent', 
          boxShadow :scrolling ? 2:0,
          transition: 'background-color 0.3s ease',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255,255,255,0.5)',
            backdropFilter: 'blur(2px)',
            borderRadius: 2,
          }}
        >
          <Image
            src="/images/faPartners.png"
            alt="FA Partners Logo"
            width={100}
            height={48}
          />
        </Box>

        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navItems.map((item) => {
              const selected = pathname === item.route;
              return (
                <Box
                  key={item.route}
                  onClick={() => handleNavigation(item.route)}
                  sx={{
                    mx: 2,
                    borderRadius: 1,
                    cursor: 'pointer',
                    transition: '0.3s',
                  }}
                >
                  <Typography
                    sx={{
                      color: scrolling ? blackColor : whiteColor, 
                      transition: '0.3s',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        )}
        <Box display={['none', 'none', 'flex']}>
          <Button
            onClick={() => handleNavigation('/login')}
            sx={{ ml: 2, color: whiteColor, bgcolor: aquaColor }}
          >
            Login
          </Button>
        </Box>
        {isMobile && (
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ color: scrolling?  blackColor : whiteColor, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ zIndex: 1900 }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
