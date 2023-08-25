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
import Celebration from '@mui/icons-material/Celebration';
import { faker } from '@faker-js/faker';
import { ArrowDownward } from '@mui/icons-material';
import React from 'react';
import { Wallet } from '../../models/entities/Wallet';
import { useRecoilState } from 'recoil';
import useTransferWizard from '../../models/transfer/useTransferWizard';
import WalletInput from '../../components/WalletInput';
import { useRouter } from 'next/router';

export default function Step2() {
  const transferWizard = useTransferWizard();
  const router = useRouter();

  return (
    <Box>
      <Header title="Done!" backLink="/home" forwardLink="" forwardText="" />
      <Box
        sx={{
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        {transferWizard.wizard.step3.error && (
          <Alert onClose={() => {}}>{transferWizard.wizard.step3.error}</Alert>
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
              backgroundColor: '#ffe9f9',
              '&svg': {
                width: 72,
                height: 72,
                fill: '#ff7cdb',
              },
            }}
          >
            <Celebration
              sx={{
                width: 72,
                height: 72,
                fill: '#ff7cdb',
              }}
            />
          </Avatar>
          <Box>
            <Typography variant="body2" sx={{ marginTop: 12 }}>
              You have successfully sent the token to <br />
              {transferWizard.wizard.toWallet?.name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
