import React, { useEffect, useState } from 'react';
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
  const [lg, set_lg] = useState(window.innerWidth >= 787);
  const [xl, set_xl] = useState(window.innerWidth >= 1250);

  useEffect(() => {
    window.addEventListener('resize', () => {
      set_lg(window.innerWidth >= 787);
      set_xl(window.innerWidth >= 1250);
    });
  }, []);

  return (
    <>
      <div
        style={{
          width: xl ? '30vw' : lg ? '45vw' : '100vw',
          height: '10vh',
          backgroundColor: '#fff',
          zIndex: 1201,
          position: 'fixed',
          top: lg ? '0' : open ? '0' : '-10vh',
          left: xl ? (open ? '0' : '-30vw') : lg ? (open ? '0' : '-45vw') : '0',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s',
          padding: '16px',
        }}
      >
        <IconButton onClick={toggleDrawer} size="small">
          <CloseRoundedIcon sx={{ color: '#000', fontSize: '14px' }} />
        </IconButton>
        <Typography sx={{ textAlign: 'center', fontSize: '22px' }} variant="h4">
          Profile
        </Typography>
        <IconButton size="small">
          <LogoutRoundedIcon sx={{ color: '#000', fontSize: '14px' }} />
        </IconButton>
      </div>
      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        transitionDuration={300}
      >
        <Box
          sx={{
            width: xl ? '30vw' : lg ? '45vw' : '70vw',
            marginTop: '10vh',
            paddingLeft: 7,
          }}
        >
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
