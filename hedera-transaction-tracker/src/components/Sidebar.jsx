import React from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: { xs: 200, md: 240 },
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: { xs: 200, md: 240 },
          boxSizing: 'border-box',
          background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          color: 'white',
          borderRight: 'none',
          boxShadow: '4px 0 10px rgba(0,0,0,0.1)',
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        pt: { xs: '70px', sm: '75px', md: '80px' },
      }}>
        <Typography
          variant="h6"
          sx={{
            p: 1.5,
            textAlign: 'center',
            fontWeight: 700,
            letterSpacing: '0.5px',
            borderBottom: '1px solid rgba(255,255,255,0.15)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            fontSize: { xs: '1rem', md: '1.15rem' }
          }}
        >
          Navigation
        </Typography>
        
        <List sx={{ flex: 1, p: 1.5, gap: 0.5 }}>
          <ListItem 
            button 
            component={Link} 
            to="/"
            sx={{
              borderRadius: 2,
              mb: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.15)',
                transform: 'translateX(5px)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: 35 }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Dashboard"
              primaryTypographyProps={{
                fontSize: { xs: '0.85rem', md: '0.9rem' },
                fontWeight: 600
              }}
            />
          </ListItem>

          <ListItem 
            button 
            component={Link} 
            to="/transactions"
            sx={{
              borderRadius: 2,
              mb: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.15)',
                transform: 'translateX(5px)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: 35 }}>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Transactions"
              primaryTypographyProps={{
                fontSize: { xs: '0.85rem', md: '0.9rem' },
                fontWeight: 600
              }}
            />
          </ListItem>

          <ListItem 
            button 
            component={Link} 
            to="/wallet"
            sx={{
              borderRadius: 2,
              mb: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.15)',
                transform: 'translateX(5px)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: 35 }}>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Wallet"
              primaryTypographyProps={{
                fontSize: { xs: '0.85rem', md: '0.9rem' },
                fontWeight: 600
              }}
            />
          </ListItem>

          <ListItem 
            button 
            component={Link} 
            to="/settings"
            sx={{
              borderRadius: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.15)',
                transform: 'translateX(5px)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: 35 }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Settings"
              primaryTypographyProps={{
                fontSize: { xs: '0.85rem', md: '0.9rem' },
                fontWeight: 600
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
