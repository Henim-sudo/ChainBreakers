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
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        background: `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 3
          }}
        >
          <AutorenewIcon
            sx={{
              mr: 1,
              animation: 'spin 2s linear infinite',
              '@keyframes spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' }
              }
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
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
            <CircularProgress size={40} thickness={4} />
          </Box>
        ) : transactions.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 200,
              backgroundColor: 'rgba(0,0,0,0.02)',
              borderRadius: 2
            }}
          >
            <Typography color="text.secondary" align="center">
              No recent transactions
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {transactions.map((tx, index) => (
              <Fade in={true} key={tx.transaction_id || index}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main
                      }}
                    >
                      Transaction ID: {tx.transaction_id?.slice(0, 15)}...
                    </Typography>
                    <Chip
                      icon={tx.result === 'SUCCESS' ? 
                        <CheckCircleIcon sx={{ fontSize: 20, verticalAlign: 'middle' }} /> : 
                        <ErrorIcon sx={{ fontSize: 20, verticalAlign: 'middle' }} />
                      }
                      label={tx.result}
                      size="small"
                      color={tx.result === 'SUCCESS' ? 'success' : 'error'}
                      sx={{ 
                        fontWeight: 500,
                        '& .MuiChip-icon': {
                          marginLeft: '4px'
                        }
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Fee: {tx.charged_tx_fee} HBAR
                    </Typography>
                    <Typography variant="caption" sx={{ color: theme.palette.text.disabled }}>
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
