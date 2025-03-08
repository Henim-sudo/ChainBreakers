import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../services/hederaApi";
import { 
  Table, 
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Box,
  useTheme,
  Chip,
  Fade
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import TimelineIcon from '@mui/icons-material/Timeline';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const getTransactions = async () => {
      try {
        setLoading(true);
        const data = await fetchTransactions();
        setTransactions(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch transactions");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getTransactions();
    const interval = setInterval(getTransactions, 5000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight={400}>
        <CircularProgress size={50} thickness={4} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight={400}
        sx={{
          backgroundColor: theme.palette.error.light,
          borderRadius: 2,
          p: 3
        }}
      >
        <Typography color="error" variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ErrorIcon /> {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2, 
        mb: 4 
      }}>
        <TimelineIcon sx={{ 
          fontSize: 32, 
          color: theme.palette.primary.main 
        }} />
        <Typography 
          variant="h5" 
          sx={{
            fontWeight: 600,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Recent Transactions
        </Typography>
      </Box>
      
      <TableContainer 
        component={Paper}
        sx={{
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: theme.palette.primary.main }}>
              <TableCell sx={{ color: '#fff', fontWeight: 600 }}>Transaction ID</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 600 }}>Status</TableCell>
              <TableCell align="right" sx={{ color: '#fff', fontWeight: 600 }}>Fee (HBAR)</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 600 }}>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((tx) => (
              <Fade in={true} key={tx.transaction_id}>
                <TableRow 
                  sx={{
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                      transition: 'background-color 0.2s'
                    }
                  }}
                >
                  <TableCell sx={{ fontFamily: 'monospace', color: theme.palette.primary.main }}>
                    {tx.transaction_id}
                  </TableCell>
                  <TableCell>
                    <Chip
                      icon={tx.result === 'SUCCESS' ? <CheckCircleIcon /> : <ErrorIcon />}
                      label={tx.result}
                      color={tx.result === 'SUCCESS' ? 'success' : 'error'}
                      size="small"
                      sx={{ fontWeight: 500 }}
                    />
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 500 }}>
                    {tx.charged_tx_fee}
                  </TableCell>
                  <TableCell sx={{ color: theme.palette.text.secondary }}>
                    {new Date(tx.consensus_timestamp * 1000).toLocaleString()}
                  </TableCell>
                </TableRow>
              </Fade>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TransactionList;
