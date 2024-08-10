import React from 'react';
import { Box, Container, Typography,Link, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'white', py: 3 }}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* Left side - Logo and Name */}
          <Box display="flex" alignItems="center">
            {/* <img
              src="C:\Users\Shreya\OneDrive\Desktop\blood donation\lifeblood\src\logo.svg" // Replace with your actual logo path
              alt="LifeBlood Logo"
              style={{ marginRight: '10px' }}
            /> */}
           
             <Typography variant="h6" color="textPrimary">
              LifeBlood
            </Typography> 
            
          </Box>

          {/* Center - Links */}
          <Box display="flex" justifyContent="center">
            <Link href="#" underline="none" color="textSecondary" sx={{ mx: 2 }}>
              Privacy Policy
            </Link>
            <Link href="#" underline="none" color="textSecondary" sx={{ mx: 2 }}>
              Terms of Service
            </Link>
            <Link href="#" underline="none" color="textSecondary" sx={{ mx: 2 }}>
              Contact Us
            </Link>
          </Box>

          {/* Right side - Social Media Icons */}
          <Box>
            <IconButton href="#" sx={{ color: 'textSecondary' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'textSecondary' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'textSecondary' }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
