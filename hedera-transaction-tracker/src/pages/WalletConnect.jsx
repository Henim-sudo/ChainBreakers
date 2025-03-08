import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography, Box, CircularProgress } from "@mui/material";
import { HashConnect } from "hashconnect";

// HashConnect configuration
const appMetadata = {
  name: "Hedera Transaction Tracker",
  description: "Track Hedera transactions in real-time", 
  icon: "favicon.ico",
  url: window.location.origin,
  debug: true
};

const hashConnectConfig = {
  network: "mainnet", // or "testnet"
  metaData: appMetadata
};

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [hashConnect] = useState(new HashConnect()); // Remove debug mode
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    try {
      setIsLoading(true);
      
      
      // Initialize HashConnect with proper configuration
      const initData = await hashConnect.init(hashConnectConfig.metaData, hashConnectConfig.network, false);
      await hashConnect.connect(hashConnectConfig.network, initData);

      // Generate connection data
      const state = await hashConnect.generatePairingString(hashConnectConfig.network, false);
      console.log("Connection state:", state); // Debug log

      if (state && state.topic) {
        const accountId = state.pairingData?.accountIds[0];
        setWalletAddress(accountId);
        
        // Subscribe to transaction events
        hashConnect.pairingEvent.on("transaction", (transaction) => {
          setTransactions(prev => [...prev, transaction]);
        });
      }
    } catch (error) {
      console.error("Wallet connection failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    if (hashConnect) {
      hashConnect.disconnect();
      setWalletAddress(null);
      setTransactions([]);
    }
  };

  // Cleanup subscription on unmount
  useEffect(() => {
    return () => {
      if (hashConnect) {
        hashConnect.disconnect();
      }
    };
  }, [hashConnect]);

  return (
    <Card sx={{ margin: 2, padding: 2, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Wallet Connection</Typography>
        {walletAddress ? (
          <Box>
            <Typography sx={{ mb: 2 }}>Connected: {walletAddress}</Typography>
            <Typography variant="subtitle2" sx={{ mb: 2 }}>
              Recent Transactions: {transactions.length}
            </Typography>
            <Button 
              variant="outlined" 
              color="error" 
              onClick={disconnectWallet}
            >
              Disconnect Wallet
            </Button>
          </Box>
        ) : (
          <Button 
            variant="contained" 
            color="primary" 
            onClick={connectWallet}
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={20} /> : null}
          >
            {isLoading ? 'Connecting...' : 'Connect HashPack Wallet'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default WalletConnect;
