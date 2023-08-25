import {
  Alert,
  Autocomplete,
  Avatar,
  Box,
  CircularProgress,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import Header from '../../components/Header';
import WalletIcon from '../../images/Group.svg';
import { faker } from '@faker-js/faker';
import { ArrowDownward } from '@mui/icons-material';
import React from 'react';
import { Wallet } from '../../models/entities/Wallet';
import { useRecoilState } from 'recoil';
import useTransferWizard from '../../models/transfer/useTransferWizard';
import WalletInput from '../../components/WalletInput';
import { useRouter } from 'next/router';

export default function Transfer() {
  const transferWizard = useTransferWizard();
  const router = useRouter();

  return (
    <Box>
      <Header
        title="Transfer Token"
        backLink={`/wallets/${transferWizard.wizard.fromWallet?.id}`}
        forwardLink={() => {
          transferWizard.gotoStep2(() => {
            router.push('/transfer/step2');
          });
        }}
        forwardText="Next"
      />
      <Box
        sx={{
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        {transferWizard.wizard.step1.error && (
          <Alert onClose={() => {}}>{transferWizard.wizard.step1.error}</Alert>
        )}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 7,
            marginBottom: 3,
          }}
        >
          <Avatar
            sx={{
              width: 120,
              height: 120,
              backgroundColor: '#D9F6FF',
            }}
          >
            <SvgIcon
              component={WalletIcon}
              viewBox="0 0 20 20"
              sx={{
                width: 62,
                height: 54,
                '& path': {
                  fill: '#00C3FE',
                },
              }}
            />
          </Avatar>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              justifyContent: 'flex-start',
              width: '100%',
            }}
          >
            <Avatar
              sx={{
                width: 50,
                height: 50,
                marginRight: 3,
              }}
              src={transferWizard.wizard.fromWallet?.logo}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: '600', fontSize: '15px' }}
              >
                {transferWizard.wizard.token?.id}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '11px', color: '#61697D' }}
              >
                in wallet {transferWizard.wizard.fromWallet?.name}
              </Typography>
            </Box>
          </Box>
          <Box>
            <ArrowDownward
              sx={{
                marginTop: 4,
                color: '#9597A1',
              }}
              fontSize="large"
            />
          </Box>
          <WalletInput
            onWalletSelected={(wallet) =>
              transferWizard.setWizard((c) => ({ ...c, toWallet: wallet }))
            }
          />
        </Box>
      </Box>
    </Box>
  );
}
