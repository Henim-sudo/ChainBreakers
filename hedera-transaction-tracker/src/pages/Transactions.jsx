import React from "react";
import { Container, Paper, Typography, Box, Grid, useTheme } from "@mui/material";
import TransactionList from "../components/TransactionList";

const Transactions = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper 
            elevation={3}
            sx={{ 
              p: 4, 
              mb: 3,
              background: `linear-gradient(145deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 48px rgba(0,0,0,0.15)'
              }
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom
                sx={{
                  color: '#fff',
                  fontWeight: 700,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                  letterSpacing: '0.5px',
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
                }}>
                Transaction History
              </Typography>
              <Typography 
                variant="body1" 
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  maxWidth: '800px',
                  lineHeight: 1.6
                }}>
                View and track all transactions on the Hedera network in real-time
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper 
            elevation={2}
            sx={{ 
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: 3,
              backgroundColor: theme.palette.background.paper,
              boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
              '&:hover': {
                boxShadow: '0 6px 32px rgba(0,0,0,0.08)'
              },
              transition: 'box-shadow 0.3s ease-in-out'
            }}>
            <TransactionList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Transactions;
