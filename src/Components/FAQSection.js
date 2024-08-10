import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  return (
    <Box sx={{ bgcolor: '#e1ded7', py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
          Here are some common questions and answers about blood donation.
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
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
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>How long does the donation process take?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The donation process usually takes around an hour, including registration, a health check, the donation itself, and a short recovery period.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Can I donate if I have a cold or the flu?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  No, you should not donate blood if you are feeling unwell, including if you have a cold or the flu.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Can I donate if I have a tattoo or piercing?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, you can donate if you have a tattoo or piercing, but there may be a waiting period depending on how recent it was.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Will donating blood hurt?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Most donors feel only a slight pinch or sting when the needle is inserted. The discomfort is usually minimal and brief.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Can I donate if I have a medical condition?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It depends on the condition. Some medical conditions may prevent you from donating, while others may not. It's best to consult with the donation center or your healthcare provider.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQSection;
