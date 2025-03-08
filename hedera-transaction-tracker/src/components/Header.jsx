import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useTheme } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FilterListIcon from "@mui/icons-material/FilterList";
import RefreshIcon from "@mui/icons-material/Refresh";

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar 
      position="fixed"
      sx={{
        background: `linear-gradient(120deg, ${theme.palette.primary.dark}, #2c3e50)`,
        boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(10px)',
        zIndex: theme.zIndex.drawer + 1,
        width: '100%',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <Toolbar sx={{ 
        minHeight: { xs: '64px', sm: '70px' },
        justifyContent: 'space-between',
        px: { xs: 2, sm: 4 }
      }}>
        <Typography 
          variant="h5" 
          component="div" 
          sx={{ 
            fontWeight: 700,
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            letterSpacing: '0.5px',
            color: '#ffffff',
            textAlign: 'left',
            fontFamily: '"Poppins", "Roboto", sans-serif',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: { xs: '200px', sm: '400px', md: '600px' }
          }}
        >
          Hedera Real-Time Transaction Tracker
        </Typography>

        <Box sx={{ 
          display: "flex", 
          gap: 2,
          alignItems: 'center'
        }}>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<FilterListIcon />}
            size="medium"
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              display: { xs: 'none', sm: 'flex' },
              borderColor: 'rgba(255,255,255,0.3)',
              '&:hover': {
                borderColor: 'rgba(255,255,255,0.8)',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            Filters
          </Button>

          <IconButton 
            color="inherit"
            size="medium"
            aria-label="refresh"
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            <RefreshIcon />
          </IconButton>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<AccountBalanceWalletIcon />}
            size="medium"
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              backgroundColor: theme.palette.secondary.main,
              '&:hover': {
                backgroundColor: theme.palette.secondary.dark
              }
            }}
          >
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Connect Wallet</Box>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
