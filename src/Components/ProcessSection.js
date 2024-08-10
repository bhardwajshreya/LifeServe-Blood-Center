import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const ProcessSection = () => {
  return (
    <Box sx={{ bgcolor: '#e1ded7', py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          The Blood Donation Process
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 5 }}>
          Donating blood is a simple and safe process that typically takes less than an hour. Here’s what you can expect:
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Registration
            </Typography>
            <Typography variant="body1">
              You'll be asked to provide some basic information and answer a few health-related questions.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Mini-Physical
            </Typography>
            <Typography variant="body1">
              Your temperature, blood pressure, pulse, and hemoglobin levels will be checked to ensure you're eligible to donate.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Blood Donation
            </Typography>
            <Typography variant="body1">
              The actual blood donation process takes about 8-10 minutes. You'll be asked to relax and remain seated or lying down during this time.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Refreshments
            </Typography>
            <Typography variant="body1">
              After donating, you'll be asked to rest and have a snack and drink to help replace the donated blood.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Aftercare
            </Typography>
            <Typography variant="body1">
              You'll be monitored for a short time before being released. You may experience some minor side effects, but these are usually mild and temporary.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Impact
            </Typography>
            <Typography variant="body1">
              Your single donation can help save up to three lives. It’s a simple way to make a significant difference in your community.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProcessSection;
