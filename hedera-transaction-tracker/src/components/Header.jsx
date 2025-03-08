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
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        zIndex: theme.zIndex.drawer + 1, // Ensure header appears above sidebar
        width: { xs: '100%', md: `calc(100% - 240px)` }, // Adjust width based on sidebar
        ml: { xs: 0, md: '240px' }, // Add margin to account for sidebar on desktop
      }}
    >
      <Toolbar sx={{ 
        minHeight: { xs: '64px', sm: '70px' },
        pr: { xs: 1, sm: 2 }, // Add padding to prevent content from touching edges
      }}>
        <Typography 
          variant="h5" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            fontWeight: 700,
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            letterSpacing: '0.5px',
            color: '#ffffff',
            textAlign: 'left',
            marginLeft: { xs: '0px', sm: '10px' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          Hedera Real-Time Transaction Tracker
        </Typography>

        <Box sx={{ 
          display: "flex", 
          gap: { xs: 1, sm: 2 }, 
          alignItems: 'center'
        }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FilterListIcon />}
            size="medium"
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              display: { xs: 'none', sm: 'flex' }, // Hide on mobile
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              },
              transition: 'all 0.2s ease-in-out'
            }}
          >
            Filters
          </Button>

          <IconButton 
            color="secondary"
            size="medium"
            aria-label="refresh"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
                transform: 'rotate(180deg)',
              },
              transition: 'all 0.3s ease-in-out'
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
              borderRadius: '20px',
              textTransform: 'none',
              background: 'linear-gradient(45deg, #2196f3, #1976d2)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              minWidth: { xs: 'auto', sm: 'initial' }, // Compact on mobile
              '& .MuiButton-startIcon': {
                marginRight: { xs: 0, sm: 1 } // Hide text on mobile
              },
              '& .MuiButton-endIcon': {
                margin: { xs: 0, sm: 1 }
              },
              '&:hover': {
                background: 'linear-gradient(45deg, #1976d2, #1565c0)',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              },
              transition: 'all 0.2s ease-in-out'
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
