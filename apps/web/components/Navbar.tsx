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

const Navbar = ({ user, open, toggleDrawer }) => {
  return (
    <>
      <Grid
        sx={{
          width: '100vw',
          backgroundColor: '#fff',
          height: '10vh',
          elevation: 30,
          zIndex: 1201,
          position: 'fixed',
          top: open ? '0' : '-10vh',
          transition: 'all 0.25s',
        }}
        container
        rowSpacing={3}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Grid
          item
          xs={2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton onClick={toggleDrawer} size="large">
            <CloseRoundedIcon fontSize="large" sx={{ color: '#000' }} />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ textAlign: 'center' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{ width: '100%', height: '5vh', textAlign: 'center' }}
            variant="h4"
          >
            Profile
          </Typography>
        </Grid>
        <Grid xs={2} sx={{ paddingBottom: 1 }}>
          <IconButton size="large">
            <LogoutRoundedIcon fontSize="large" sx={{ color: '#000' }} />
          </IconButton>
        </Grid>
      </Grid>
      <Drawer variant="temporary" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: '70vw', marginTop: '10vh', paddingLeft: 7 }}>
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
                <Typography
                  variant="h6"
                  sx={{ paddingLeft: 6, fontSize: '1rem' }}
                >
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
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
