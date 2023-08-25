import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Card,
  CircularProgress,
  Drawer,
  Paper,
  SvgIcon,
  Tooltip,
  Typography,
  IconButton,
  Stack,
  Grid,
  List,
  ListItem,
} from '@mui/material';
import Head from 'next/head';
import NotificationIcon from '../images/Notification.svg';
import SearchIcon from '../images/Search.svg';
import Profile from '../images/profile.png';
import ArrowIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '../images/home.svg';
import V3Icon from '../images/v3.svg';
import V4Icon from '../images/v4.svg';
import OfferIcon from '../images/offer.svg';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import currentUser from '../states/currentUser';
import { useEffect, useState } from 'react';
import * as accounts from '../models/api/accounts';
import * as wallets from '../models/api/wallets';
import { Wallet } from '../models/entities/Wallet';
import { Transaction } from '../models/entities/Transaction';
import moment from 'moment';
import MapIcon from '@mui/icons-material/Map';
import Link from 'next/link';
import useTransactionList from '../models/transaction/useTransactionList';
import { tr } from '@faker-js/faker';
import useBalance from '../models/user/useBalance';
import useWalletList from '../models/wallet/useWalletList';
import useTab from '../models/common/useTab';

import CloseRoundedIcon from '../images/Close.svg';
import LogoutRoundedIcon from '../images/Logout.svg';
import HistoryRoundedIcon from '../images/History.svg';
import WalletRoundedIcon from '../images/Wallet.svg';
import PasswordRoundedIcon from '../images/Key.svg';
import SettingsIcon from '../images/Settings.svg';
import Navbar from '../components/Navbar';

function TransactionComponent({ transaction }) {
  return (
    <Box
      sx={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 7,
        paddingRight: 7,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
        }}
      >
        <Avatar
          sx={{
            width: 49,
            height: 49,
            marginRight: 3,
          }}
          src={transaction.senderAvatar}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start',
          }}
        >
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              marginTop: -1,
            }}
            variant="body1"
          >
            {transaction.senderName}
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              color: '#61697D',
            }}
            variant="body2"
          >
            {moment(transaction.createdAt).format('MMM DD, YYYY')}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2">
        - <span style={{ fontSize: '14px' }}>TOKEN</span>{' '}
        {transaction.amount && transaction.amount.toLocaleString()}
      </Typography>
    </Box>
  );
}

function WalletCard({ wallet, active, handleClick }) {
  const nextRouter = useRouter();
  return (
    <Card
      sx={{
        minWidth: 210,
        width: 198,
        minHeight: 230,
        backgroundColor: active
          ? (theme) => theme.palette.primary.main
          : '#F1F5FF',
        marginLeft: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between',
        padding: 5,
        color: active ? 'white' : '#474B4F',
        borderRadius: 5,
      }}
      elevation={0}
      onClick={handleClick}
    >
      <Tooltip
        title={'Please click me'}
        placement="bottom"
        open={active}
        arrow={true}
      >
        <Link href={`/wallets/${wallet.id}`}>
          <MapIcon sx={{ fontSize: 32 }} />
        </Link>
      </Tooltip>
      <Box>
        <Typography variant="h5">
          Token {wallet.balance && wallet.balance.toLocaleString()}
        </Typography>
        <Typography variant="body2">
          {moment(wallet.createdAt).format('MMM DD, YYYY')}
        </Typography>
      </Box>
      <Box>
        <Typography variant="caption">WALLET</Typography>
        <Typography variant="body2">{wallet.name}</Typography>
      </Box>
    </Card>
  );
}

export default function Home() {
  const [user, setUser] = useRecoilState(currentUser);
  console.log('home user:', user);
  const balance = useBalance(user?.userId);
  const walletList = useWalletList(user?.userId);
  const tab = useTab<Wallet>(walletList.list);
  const transactionList = useTransactionList(tab.activeTabItem?.id);

  if (!user) {
    return (
      <div>
        Need to login, <a href="/">click here</a>
      </div>
    );
  }

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar user={user} open={open} toggleDrawer={toggleDrawer} />
      <main>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginTop: 8,
            paddingLeft: 7,
            paddingRight: 7,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Avatar
              src={user.avatar}
              sx={{
                width: 49,
                height: 49,
                marginRight: 3,
              }}
              onClick={toggleDrawer}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: '14px',
                }}
              >
                Total Balance
              </Typography>
              <Typography
                sx={{
                  fontSize: '22px',
                  fontWeight: '600',
                  marginTop: 0.8,
                }}
                variant="h2"
              >
                Token {balance && balance.toLocaleString()}
              </Typography>
            </Box>
          </Box>
          <SvgIcon
            component={SearchIcon}
            sx={{
              width: 28,
              height: 28,
            }}
            viewBox="0 0 28 28"
          />
          <SvgIcon
            component={NotificationIcon}
            sx={{
              width: 28,
              height: 30,
              marginLeft: 7,
            }}
            viewBox="0 0 28 30"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginTop: 9.5,
            paddingLeft: 7,
            paddingRight: 7,
          }}
        >
          <Typography variant="h5">Wallets</Typography>
          <ArrowIcon />
        </Box>
        <Box
          sx={{
            marginTop: 9,
            display: 'flex',
            flexDirection: 'row',
            wrap: 'nowrap',
            overflow: 'auto',
            overflowX: 'scroll',
          }}
        >
          {!walletList.isWalletLoading &&
            walletList.list.map((wallet, index) => (
              <WalletCard
                wallet={wallet}
                active={wallet.id === tab.activeTabItem.id}
                handleClick={() => tab.setActiveTabIndex(index)}
              />
            ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginTop: 9.5,
            paddingLeft: 7,
            paddingRight: 7,
          }}
        >
          <Typography variant="h5">Last Transactions</Typography>
          <ArrowIcon />
        </Box>
        {transactionList.isTransactionLoading && (
          <Box
            sx={{
              width: '100%',
              marginTop: 9,
              paddingLeft: 7,
              paddingRight: 7,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        )}
        {!transactionList.isTransactionLoading &&
          transactionList.list?.map((transaction, index) => (
            <Box>
              <TransactionComponent transaction={transaction} />
            </Box>
          ))}
        <Paper
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: 90,
          }}
          elevation={0}
        >
          <BottomNavigation
            value={'Recents'}
            sx={{
              height: 90,
              '& svg': {
                width: 31,
                height: 31,
              },
            }}
          >
            <BottomNavigationAction label="Recents" icon={<HomeIcon />} />
            <BottomNavigationAction label="v3" icon={<V3Icon />} />
            <BottomNavigationAction label="v4" icon={<V4Icon />} />
            <BottomNavigationAction label="offer" icon={<OfferIcon />} />
          </BottomNavigation>
        </Paper>
      </main>
    </div>
  );
}
