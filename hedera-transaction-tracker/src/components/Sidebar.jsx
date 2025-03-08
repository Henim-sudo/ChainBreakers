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
        width: { xs: 220, md: 260 },
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: { xs: 220, md: 260 },
          boxSizing: 'border-box',
          background: `linear-gradient(165deg, ${theme.palette.primary.dark}, #1a237e)`,
          color: 'white',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '4px 0 25px rgba(0,0,0,0.15)',
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
        pt: { xs: '75px', sm: '80px', md: '85px' },
        background: 'rgba(255,255,255,0.03)'
      }}>
        <Typography
          variant="h6"
          sx={{
            p: 2,
            textAlign: 'center',
            fontWeight: 800,
            letterSpacing: '1px',
            borderBottom: '2px solid rgba(255,255,255,0.1)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            background: `linear-gradient(90deg, ${theme.palette.primary.light}, #fff)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Navigation
        </Typography>
        
        <List sx={{ flex: 1, p: 2, gap: 1 }}>
          <ListItem 
            button 
            component={Link} 
            to="/"
            sx={{
              borderRadius: 3,
              mb: 1.5,
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255,255,255,0.05)',
              transition: 'all 0.4s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.15)',
                transform: 'translateX(8px) scale(1.02)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }
            }}
          >
            <ListItemIcon sx={{ color: '#fff', minWidth: 40 }}>
              <DashboardIcon sx={{ fontSize: '1.5rem' }}/>
            </ListItemIcon>
            <ListItemText 
              primary="Dashboard"
              primaryTypographyProps={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 700,
                letterSpacing: '0.5px'
              }}
            />
          </ListItem>

          <ListItem 
            button 
            component={Link} 
            to="/transactions"
            sx={{
              borderRadius: 3,
              mb: 1.5,
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255,255,255,0.05)',
              transition: 'all 0.4s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.15)',
                transform: 'translateX(8px) scale(1.02)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }
            }}
          >
            <ListItemIcon sx={{ color: '#fff', minWidth: 40 }}>
              <ReceiptIcon sx={{ fontSize: '1.5rem' }}/>
            </ListItemIcon>
            <ListItemText 
              primary="Transactions"
              primaryTypographyProps={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 700,
                letterSpacing: '0.5px'
              }}
            />
          </ListItem>

          <ListItem 
            button 
            component={Link} 
            to="/wallet"
            sx={{
              borderRadius: 3,
              mb: 1.5,
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255,255,255,0.05)',
              transition: 'all 0.4s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.15)',
                transform: 'translateX(8px) scale(1.02)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }
            }}
          >
            <ListItemIcon sx={{ color: '#fff', minWidth: 40 }}>
              <AccountBalanceWalletIcon sx={{ fontSize: '1.5rem' }}/>
            </ListItemIcon>
            <ListItemText 
              primary="Wallet"
              primaryTypographyProps={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 700,
                letterSpacing: '0.5px'
              }}
            />
          </ListItem>

          <ListItem 
            button 
            component={Link} 
            to="/settings"
            sx={{
              borderRadius: 3,
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255,255,255,0.05)',
              transition: 'all 0.4s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.15)',
                transform: 'translateX(8px) scale(1.02)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }
            }}
          >
            <ListItemIcon sx={{ color: '#fff', minWidth: 40 }}>
              <SettingsIcon sx={{ fontSize: '1.5rem' }}/>
            </ListItemIcon>
            <ListItemText 
              primary="Settings"
              primaryTypographyProps={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 700,
                letterSpacing: '0.5px'
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
