// HeroSection.js
import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <>
    {/*Navbar */}
    <AppBar position="static" sx={{ bgcolor: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
            LifeBlood
          </Typography>
          {/* <Button color="inherit" sx={{ color: 'white' }}>Donate Blood</Button> */}
          <Button 
            color="inherit" 
            sx={{ color: 'white' }} 
            component={Link} 
            to="/donatepage" 
          >
            Donate Blood
          </Button>
          <Button color="inherit" sx={{ color: 'white' }}>Learn More</Button>
          <Button color="inherit" sx={{ color: 'white' }}>Contact</Button>
          <Button 
            color="inherit" 
            sx={{ color: 'white' }} 
            component={Link} 
            to="/login"  // Link to the login page
          >
            LogIn
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ bgcolor: '#000000', color: 'white', pt: 10, pb: 10 }}>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" >
          <Box>
            <Typography variant="h2" component="h1" gutterBottom>
              Save a Life, Donate Blood
            </Typography>
            <Typography variant="body1" gutterBottom>
              Your donation can make a difference. Join us in our mission to ensure a safe and reliable blood supply.
            </Typography>
            <Button variant="contained" color="primary">
              Donate Blood
            </Button>
          </Box>
          
        </Box>
      </Container>
      </Box>
    </>
  );
};

export default HeroSection;
