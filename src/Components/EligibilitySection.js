import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const EligibilitySection = () => {
  return (
    <Box sx={{ bgcolor: '#f7f7f7', py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Eligibility Criteria
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 5 }}>
        To ensure the safety of both donors and recipients, there are a few eligibility requirements for blood donation. Here are the most common criteria:
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Age
            </Typography>
            <Typography variant="body1">
            You must be between the ages of 16 and 69 (with parental consent for 16-17 year olds).
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Weight
            </Typography>
            <Typography variant="body1">
            You must weigh at least 110 pounds (50 kg).
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Health
            </Typography>
            <Typography variant="body1">
            You must be in good general health and not have any conditions that would disqualify you from donating.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Medications
            </Typography>
            <Typography variant="body1">
            Certain medications may affect your eligibility, so it's important to disclose any medications you're taking.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
            Travel History
            </Typography>
            <Typography variant="body1">
            If you've recently traveled to certain regions, you may need to wait before donating.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
            Frequency
            </Typography>
            <Typography variant="body1">
            Most people can donate blood every 56 days (8 weeks) for whole blood donations.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EligibilitySection;
