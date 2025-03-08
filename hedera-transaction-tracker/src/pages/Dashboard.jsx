import React from "react";
import { Grid, Container, Paper, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionList from "../components/TransactionList";
import WalletConnect from "../pages/WalletConnect";
import LiveUpdates from "../components/LiveUpdates";
import NotFound from "../pages/NotFound";
import Transaction from "../pages/Transactions";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BrowserRouter>
      <Box sx={{ 
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default
      }}>
        <Header />
        <Sidebar />
        <Box component="main" sx={{ 
          flexGrow: 1, 
          p: { xs: 2, sm: 3 },
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}>
          <Container maxWidth="lg" sx={{ 
            mt: { xs: 7, sm: 8, md: 9 }, 
            mb: 4,
            animation: 'fadeIn 0.5s ease-in'
          }}>
            <Routes>
              <Route path="/" element={
                <Grid container spacing={3}>
                  {/* Header Section */}
                  <Grid item xs={12}>
                    <Paper sx={{ 
                      p: { xs: 2, sm: 3 },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      borderRadius: 2,
                      boxShadow: theme.shadows[3],
                      background: `linear-gradient(120deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                      color: 'white'
                    }}>
                      <Typography 
                        variant={isMobile ? "h5" : "h4"} 
                        component="h1" 
                        gutterBottom
                        sx={{
                          fontWeight: 'bold',
                          textAlign: 'center',
                          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                        }}
                      >
                        Hedera Real-Time Transaction Tracker
                      </Typography>
                      <Box sx={{ 
                        width: '100%', 
                        maxWidth: 500,
                        mb: 2,
                        mx: 'auto'
                      }}>
                        <WalletConnect />
                      </Box>
                    </Paper>
                  </Grid>

                  {/* Live Updates Section */}
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ 
                      height: '100%',
                      p: { xs: 2, sm: 3 },
                      borderRadius: 2,
                      boxShadow: theme.shadows[2],
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: theme.shadows[4]
                      }
                    }}>
                      <LiveUpdates />
                    </Paper>
                  </Grid>

                  {/* Transaction List Section */}
                  <Grid item xs={12} md={8}>
                    <Paper sx={{ 
                      p: { xs: 2, sm: 3 },
                      borderRadius: 2,
                      boxShadow: theme.shadows[2],
                      display: 'flex',
                      flexDirection: 'column',
                      minHeight: 400,
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: theme.shadows[4]
                      }
                    }}>
                      <TransactionList />
                    </Paper>
                  </Grid>
                </Grid>
              } />
              <Route path="/transaction/:id" element={<Transaction />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default Dashboard;
