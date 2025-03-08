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
        backgroundColor: theme.palette.background.default,
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.dark}10 100%)`
      }}>
        <Header />
        {/* <Sidebar /> */}
        <Box component="main" sx={{ 
          flexGrow: 1, 
          p: { xs: 2, sm: 3, md: 4 },
          transition: theme.transitions.create(['margin', 'padding'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),
        }}>
          <Container maxWidth="lg" sx={{ 
            mt: { xs: 8, sm: 9, md: 10 }, 
            mb: 4,
            animation: 'fadeIn 0.6s ease-in',
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(20px)' },
              to: { opacity: 1, transform: 'translateY(0)' }
            }
          }}>
            <Routes>
              <Route path="/" element={
                <Grid container spacing={4}>
                  {/* Header Section */}
                  <Grid item xs={12}>
                    <Paper sx={{ 
                      p: { xs: 3, sm: 4, md: 5 },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      borderRadius: 4,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      color: 'white',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 12px 48px rgba(0,0,0,0.18)'
                      }
                    }}>
                      <Typography 
                        variant={isMobile ? "h5" : "h4"} 
                        component="h1" 
                        gutterBottom
                        sx={{
                          fontWeight: 800,
                          textAlign: 'center',
                          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                          letterSpacing: '0.5px',
                          mb: 3
                        }}
                      >
                        Hedera Real-Time Transaction Tracker
                      </Typography>
                      <Box sx={{ 
                        width: '100%', 
                        maxWidth: 600,
                        mb: 2,
                        mx: 'auto'
                      }}>
                        <WalletConnect />
                      </Box>
                    </Paper>
                  </Grid>

                  {/* Transaction Sections Container */}
                  <Grid item xs={12}>
                    <Grid container spacing={4}>
                      {/* Live Updates Section */}
                      <Grid item xs={12} md={6}>
                        <Paper sx={{ 
                          height: '600px', // Fixed height for both sections
                          p: { xs: 3, sm: 4 },
                          borderRadius: 3,
                          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                          background: theme.palette.background.paper,
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          overflow: 'auto', // Add scroll if content overflows
                          '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
                          }
                        }}>
                          <LiveUpdates />
                        </Paper>
                      </Grid>

                      {/* Transaction List Section */}
                      <Grid item xs={12} md={6}>
                        <Paper sx={{ 
                          height: '600px', // Fixed height for both sections
                          p: { xs: 3, sm: 4 },
                          borderRadius: 3,
                          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                          background: theme.palette.background.paper,
                          backdropFilter: 'blur(10px)',
                          display: 'flex',
                          flexDirection: 'column',
                          overflow: 'auto', // Add scroll if content overflows
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
                          }
                        }}>
                          <TransactionList />
                        </Paper>
                      </Grid>
                    </Grid>
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
