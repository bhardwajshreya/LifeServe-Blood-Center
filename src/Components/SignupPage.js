import React from 'react';
import { Box, Button, TextField, Typography, Container, MenuItem, Checkbox, FormControlLabel } from '@mui/material';

const SignUpPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Donate Blood, Save Lives
      </Typography>
      <Typography variant="body1" gutterBottom textAlign="center">
        Sign up to become a blood donor and help those in need.
      </Typography>
      <Box
        component="form"
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          bgcolor: '#f9f9f9',
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Phone" variant="outlined" fullWidth />
        <TextField
          label="Date of Birth"
          variant="outlined"
          fullWidth
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField select label="Blood Type" variant="outlined" fullWidth>
          <MenuItem value="A+">A+</MenuItem>
          <MenuItem value="A-">A-</MenuItem>
          <MenuItem value="B+">B+</MenuItem>
          <MenuItem value="B-">B-</MenuItem>
          <MenuItem value="AB+">AB+</MenuItem>
          <MenuItem value="AB-">AB-</MenuItem>
          <MenuItem value="O+">O+</MenuItem>
          <MenuItem value="O-">O-</MenuItem>
        </TextField>

        <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
          />
        <FormControlLabel
          control={<Checkbox />}
          label="I agree to the terms and conditions."
        />
        <Button variant="contained" color="primary" size="large">
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default SignUpPage;
