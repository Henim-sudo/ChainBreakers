import React from "react";
import { Container, Paper, Typography, Box, Grid } from "@mui/material";
import TransactionList from "../components/TransactionList";

const Transactions = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Transaction History
              </Typography>
              <Typography variant="body1" color="text.secondary">
                View and track all transactions on the Hedera network in real-time
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <TransactionList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Transactions;
