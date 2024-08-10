import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const InfoSection = () => {
  return (
    <Box sx={{ bgcolor: '#e1ded7', py: 10 }}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          {/* Frequently Asked Questions */}
          <Box flexBasis="45%">
            <Typography variant="h4" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" gutterBottom>
              Find answers to common questions about blood donation.
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Who can donate blood?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Generally, any healthy adult who meets the eligibility criteria can donate blood.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>What is the donation process?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The donation process usually takes around an hour and includes registration, a health check, the donation itself, and a short recovery period.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Is donating blood safe?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, donating blood is safe. The needles and equipment used are sterile and discarded after each use.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>

          {/* Upcoming Blood Drives */}
          <Box flexBasis="45%">
            <Typography variant="h4" gutterBottom>
              Upcoming Blood Drives
            </Typography>
            <Typography variant="body1" gutterBottom>
              Check out our upcoming blood drives and find one near you.
            </Typography>

            <Box bgcolor="#f0f0f0" p={3} borderRadius={2} mb={3}>
              <Typography variant="h6" gutterBottom>
                Downtown Blood Drive
              </Typography>
              <Typography variant="body2">
                June 15, 2023 | 10:00 AM – 4:00 PM<br />
                123 Main Street, Anytown USA
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ mt: 2 }}
                component={Link} 
                to="/signup"
              >
                Sign Up
              </Button>
            </Box>

            <Box bgcolor="#f0f0f0" p={3} borderRadius={2}>
              <Typography variant="h6" gutterBottom>
                Community Center Drive
              </Typography>
              <Typography variant="body2">
                July 20, 2023 | 12:00 PM – 6:00 PM<br />
                456 Oak Street, Anytown USA
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ mt: 2 }}
                component={Link} 
                to="/signup"
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default InfoSection;
