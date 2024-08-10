// CardSection.js
import React from 'react';
import { Box, Card, CardContent, Typography, Container, Grid, Link } from '@mui/material';
import BloodDropIcon from '@mui/icons-material/Bloodtype';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const CardSection = () => {
  const cards = [
    {
      icon: <BloodDropIcon style={{ fontSize: 40 }} />,
      title: 'Why Donate?',
      description: 'Blood donation is a simple way to make a profound impact on the lives of others.',
      linkText: 'Learn More',
    },
    {
      icon: <BloodDropIcon style={{ fontSize: 40 }} />,
      title: 'The Donation Process',
      description: 'Donating blood is a simple and safe process that takes around an hour.',
      linkText: 'Donate Now',
    },
    {
      icon: <FavoriteBorderIcon style={{ fontSize: 40 }} />,
      title: 'Your Impact',
      description: 'Your blood donation can have a profound impact on the lives of patients in need.',
      linkText: 'Learn More',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#e1ded7', py: 5 }}>
      <Container>
        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ mb: 2 }}>{card.icon}</Box>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    {card.description}
                  </Typography>
                  <Link href="#" underline="none" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {card.linkText} →
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CardSection;
