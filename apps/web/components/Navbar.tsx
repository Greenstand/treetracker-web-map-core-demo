import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Drawer,
  Typography,
  IconButton,
  Stack,
  Grid,
  List,
  ListItem,
} from '@mui/material';
import CloseRoundedIcon from '../images/Close.svg';
import LogoutRoundedIcon from '../images/LogOut.svg';
import HistoryRoundedIcon from '../images/History.svg';
import WalletRoundedIcon from '../images/Wallet.svg';
import PasswordRoundedIcon from '../images/Key.svg';
import SettingsIcon from '../images/Settings.svg';

const DrawerList = ({ user, toggleDrawer }) => (
  <Box sx={{ width: 250, paddingLeft: 7 }}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton onClick={toggleDrawer} size="medium">
        <CloseRoundedIcon fontSize="medium" sx={{ color: '#000' }} />
      </IconButton>
    </Box>

    <Avatar
      src={user.avatar}
      sx={{
        width: 69,
        height: 69,
      }}
    />
    <Typography variant="h4" sx={{ marginTop: 3 }}>
      {user.firstName + ' ' + user.lastName}
    </Typography>
    <Typography variant="subtitle2">
      {user.firstName.toLowerCase() + '.' + user.lastName.toLowerCase()}
      @gmail.com
    </Typography>
    <List sx={{ marginTop: 8, marginLeft: 0, paddingLeft: 0 }}>
      <ListItem sx={{ marginLeft: 0, paddingLeft: 0 }}>
        <Stack
          direction="row"
          sx={{ marginTop: 1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 43,
              height: 43,
              backgroundColor: '#F1F5FF',
              borderRadius: '50%',
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HistoryRoundedIcon />
          </Box>
          <Typography variant="h6" sx={{ paddingLeft: 6, fontSize: '1rem' }}>
            Transaction History
          </Typography>
        </Stack>
      </ListItem>
      <ListItem sx={{ marginLeft: 0, paddingLeft: 0 }}>
        <Stack
          direction="row"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 43,
              height: 43,
              backgroundColor: '#F1F5FF',
              borderRadius: '50%',
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <WalletRoundedIcon />
          </Box>
          <Typography variant="h6" sx={{ paddingLeft: 6 }}>
            All Wallets
          </Typography>
        </Stack>
      </ListItem>
      <ListItem sx={{ marginLeft: 0, paddingLeft: 0 }}>
        <Stack
          direction="row"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 43,
              height: 43,
              backgroundColor: '#F1F5FF',
              borderRadius: '50%',
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PasswordRoundedIcon />
          </Box>
          <Typography variant="h6" sx={{ paddingLeft: 6 }}>
            Change Password
          </Typography>
        </Stack>
      </ListItem>
      <ListItem sx={{ marginLeft: 0, paddingLeft: 0 }}>
        <Stack
          direction="row"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 43,
              height: 43,
              backgroundColor: '#F1F5FF',
              borderRadius: '50%',
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SettingsIcon />
          </Box>
          <Typography variant="h6" sx={{ paddingLeft: 6 }}>
            Settings
          </Typography>
        </Stack>
      </ListItem>
      <ListItem sx={{ marginLeft: 0, paddingLeft: 0 }}>
        <Stack
          direction="row"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 43,
              height: 43,
              backgroundColor: '#F1F5FF',
              borderRadius: '50%',
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <LogoutRoundedIcon />
          </Box>
          <Typography variant="h6" sx={{ paddingLeft: 6 }}>
            Log out
          </Typography>
        </Stack>
      </ListItem>
    </List>
  </Box>
);

const Navbar = ({ user, open, toggleDrawer }) => {
  return (
    <Drawer variant="temporary" open={open} onClose={toggleDrawer}>
      <DrawerList user={user} toggleDrawer={toggleDrawer} />
    </Drawer>
  );
};

export default Navbar;
