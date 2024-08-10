import React from 'react';
import { Box, Container, Grid, TextField, Typography, Button, MenuItem } from '@mui/material';

const Form = () => {
  const genderOptions = ['Male', 'Female', 'Other'];
  const bloodTypeOptions = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  const donationLocationOptions = ['Location 1', 'Location 2', 'Location 3'];
  const donationTimeOptions = ['Morning', 'Afternoon', 'Evening'];
  const hospitalOptions = ['Hospital 1', 'Hospital 2', 'Hospital 3'];

  return (
    <Box sx={{ bgcolor: '#f9f9f9', py: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Blood Donation Form
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Fill out the form below to schedule your blood donation. After reviewing your information, a hospital representative will contact you to arrange for physical tests.
        </Typography>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Name" variant="outlined" defaultValue="John Doe" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Age" variant="outlined" defaultValue="25" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth label="Gender" variant="outlined">
              {genderOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth label="Blood Type" variant="outlined">
              {bloodTypeOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Phone" variant="outlined" defaultValue="(123) 456-7890" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" variant="outlined" defaultValue="john@example.com" />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Medical History"
              variant="outlined"
              multiline
              rows={4}
              placeholder="List any medications, recent illnesses, or conditions"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth label="Donation Location" variant="outlined">
              {donationLocationOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth label="Donation Time" variant="outlined">
              {donationTimeOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth label="Preferred Hospital" variant="outlined">
              {hospitalOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" sx={{ mt: 3, bgcolor: 'black' }}>
          Submit Donation
        </Button>
      </Container>
    </Box>
  );
};

export default Form;
