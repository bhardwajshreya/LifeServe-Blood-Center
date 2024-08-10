import React from 'react';
import { Box, Button, TextField, Typography, Container, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Donate Blood, Save Lives
      </Typography>
      <Typography variant="body1" gutterBottom textAlign="center">
        Join our community of blood donors and help make a difference.
      </Typography>
      <Typography variant="h5" gutterBottom textAlign="center">
        Sign in to your account
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
        <TextField label="Email" variant="outlined" fullWidth />
       
        <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
          />
        <Typography variant="body2" gutterBottom textAlign="center">
        Don't have a account? <Link to="/signup">Sign up</Link>
      </Typography>
        <Button variant="contained" color="primary" size="large">
          Login 
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
