import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, CircularProgress, Box, useTheme, Fade, Chip } from "@mui/material";
import { fetchTransactions } from "../services/hederaApi";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

const LiveUpdates = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data.slice(0, 5)); // Only show latest 5 transactions
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    getTransactions();
    const interval = setInterval(getTransactions, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      sx={{
        margin: 2,
        padding: 2,
        minHeight: 300,
        borderRadius: 4,
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        background: `linear-gradient(165deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light}15 100%)`,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.18)',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 48px rgba(0,0,0,0.2)'
        }
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 3,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}20, transparent)`,
            p: 2,
            borderRadius: 3
          }}
        >
          <AutorenewIcon
            sx={{
              mr: 2,
              color: theme.palette.primary.main,
              animation: 'spin 2s linear infinite',
              '@keyframes spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' }
              },
              fontSize: '2rem'
            }}
          />
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 700,
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.5px'
            }}
          >
            Live Transaction Updates
          </Typography>
        </Box>

        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={200}
          >
            <CircularProgress 
              size={50} 
              thickness={4}
              sx={{
                color: theme.palette.primary.main,
                '& .MuiCircularProgress-circle': {
                  strokeLinecap: 'round'
                }
              }}
            />
          </Box>
        ) : transactions.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 200,
              backgroundColor: 'rgba(0,0,0,0.03)',
              borderRadius: 3,
              border: '2px dashed rgba(0,0,0,0.1)'
            }}
          >
            <Typography 
              color="text.secondary" 
              align="center"
              sx={{ 
                fontSize: '1.1rem',
                fontWeight: 500,
                opacity: 0.7
              }}
            >
              No recent transactions
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {transactions.map((tx, index) => (
              <Fade in={true} key={tx.transaction_id || index} timeout={500}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease-in-out',
                    border: '1px solid rgba(0,0,0,0.05)',
                    '&:hover': {
                      transform: 'translateY(-3px) scale(1.01)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                      backgroundColor: 'rgba(255,255,255,0.95)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1.5
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.primary.dark,
                        letterSpacing: '0.3px',
                        fontSize: '0.95rem'
                      }}
                    >
                      Transaction ID: {tx.transaction_id?.slice(0, 15)}...
                    </Typography>
                    <Chip
                      icon={tx.result === 'SUCCESS' ? 
                        <CheckCircleIcon sx={{ fontSize: 18 }} /> : 
                        <ErrorIcon sx={{ fontSize: 18 }} />
                      }
                      label={tx.result}
                      size="small"
                      color={tx.result === 'SUCCESS' ? 'success' : 'error'}
                      sx={{ 
                        fontWeight: 600,
                        padding: '8px 4px',
                        height: '28px',
                        '& .MuiChip-icon': {
                          marginLeft: '6px'
                        },
                        '& .MuiChip-label': {
                          fontSize: '0.8rem'
                        }
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mt: 1
                    }}
                  >
                    <Typography 
                      variant="body2" 
                      sx={{
                        color: theme.palette.text.secondary,
                        fontWeight: 500,
                        fontSize: '0.9rem'
                      }}
                    >
                      Fee: {tx.charged_tx_fee} HBAR
                    </Typography>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: theme.palette.primary.main,
                        fontWeight: 500,
                        backgroundColor: theme.palette.primary.light + '20',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '0.75rem'
                      }}
                    >
                      {new Date().toLocaleTimeString()}
                    </Typography>
                  </Box>
                </Box>
              </Fade>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default LiveUpdates;
