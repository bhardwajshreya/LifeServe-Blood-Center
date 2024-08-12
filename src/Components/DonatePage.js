
import React, {useRef} from 'react';
import { AppBar, Toolbar, Box, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Eligibility from './EligibilitySection';
import Process from './ProcessSection';
import FAQ from './FAQSection';
const DonatePage = () => {
  const processRef = useRef(null);
  const eligibilityRef = useRef(null);
  const faqRef = useRef(null);

  const handleScrollToProcess = () => {
    processRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToEligibility = () => {
    eligibilityRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToFAQs = () => {
    faqRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    {/*Navbar */}
    <AppBar position="static" sx={{ bgcolor: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
            LifeBlood
          </Typography>
          {/* <Button color="inherit" sx={{ color: 'white' }}>About</Button> */}
          <Button 
            color="inherit" 
            sx={{ color: 'white' }} 
            component={Link} 
            to="/"  
          >
            About
          </Button>
          <Button 
            color="inherit" 
            sx={{ color: 'white' }} 
            // component={Link} 
            // to="/eligibilitySection" 
            onClick={handleScrollToEligibility}
          >
            Eligilibility
          </Button>
          <Button 
            color="inherit" 
            sx={{ color: 'white' }} 
            // component={Link} 
            // to="/processSection" 
            onClick={handleScrollToProcess}
          >
            Process
          </Button>
          <Button 
            color="inherit" 
            sx={{ color: 'white' }} 
            // component={Link} 
            // to="/FAQSection" 
            onClick={handleScrollToFAQs}
          >
            FAQs
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
            <Button 
                variant="contained" 
                color="primary" 
                sx={{ mt: 2 }}
                component={Link} 
                to="/form"
              >
                Donate Blood
              </Button>
          </Box>
          
        </Box>
      </Container>
      </Box>
     {/* Sections */}
     <div ref={eligibilityRef}>
        <Eligibility />
      </div>

      <div ref={processRef}>
        <Process />
      </div>

      <div ref={faqRef}>
        <FAQ />
      </div>
    </>
  );
};

export default DonatePage;
