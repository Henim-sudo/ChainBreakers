import React, { useState } from "react";
import { Button, Card, CardContent, Typography, Box } from "@mui/material";
import { HashConnect } from "hashconnect";

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [hashConnect] = useState(new HashConnect());

  const connectWallet = async () => {
    try {
      const initData = await hashConnect.init({
        name: "Hedera Transaction Tracker",
        description: "Track Hedera transactions in real-time",
        icon: "favicon.ico"
      });

      const state = await hashConnect.connect();
      if (state.topic) {
        const accountId = state.pairingData?.accountIds[0];
        setWalletAddress(accountId);
      }
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  const disconnectWallet = () => {
    hashConnect.disconnect();
    setWalletAddress(null);
  };

  return (
    <Card sx={{ margin: 2, padding: 2, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Wallet Connection</Typography>
        {walletAddress ? (
          <Box>
            <Typography sx={{ mb: 2 }}>Connected: {walletAddress}</Typography>
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
          >
            Connect HashPack Wallet
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default WalletConnect;
