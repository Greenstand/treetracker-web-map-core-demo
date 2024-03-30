import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Wallet } from 'demo-core/models/entities/Wallet';
import formatWalletName from 'demo-core/models/wallet/formatWalletName';
import shortenUuid from 'demo-core/models/common/shortenUuid';
import { Token } from 'demo-core/models/entities/Token';
import useTransferWizard from 'demo-core/models/transfer/useTransferWizard';

export default function Wallet() {
  const [currentWallet, setCurrentWallet] = useState<Wallet | null>(null);
  const [chosenToken, setChosenToken] = useState<Token | null>(null);
  const transferWizard = useTransferWizard();

  //init transferWizard
  useEffect(() => {
    async function load() {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (transferWizard.wizard.fromWallet && transferWizard.wizard.token) {
        setCurrentWallet(transferWizard.wizard.fromWallet);
        setChosenToken(transferWizard.wizard.token);
      } else {
        const wallet = {
          id: faker.datatype.uuid(),
          name: 'wallet2',
          balance: faker.datatype.number({ min: 1000, max: 100000 }),
          createdAt: faker.date.past(),
          logo: faker.image.url(),
        };
        setCurrentWallet(wallet);
      }
    }

    load();
  }, []);

  useEffect(() => {
    transferWizard.setWizard((current) => {
      return {
        ...current,
        fromWallet: currentWallet,
        token: chosenToken,
      };
    });
  }, [currentWallet, chosenToken]);

  const title =
    (chosenToken && 'Token #' + shortenUuid(chosenToken.id)) ||
    (currentWallet && formatWalletName(currentWallet)) ||
    '';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
      }}
    >
      <Header
        title={title}
        backLink="/home"
        forwardLink={transferWizard.isTransferable ? '/transfer/step1' : ''}
        forwardText={transferWizard.isTransferable ? 'Transfer' : ''}
      />
      <Box
        sx={{
          backgroundColor: '#F5F6FA',
          flexGrow: 1,
        }}
      >
        <iframe
          //src="https://alpha-dev.treetracker.org/trees/1000249?bounds=-77.3876738548279,40.367375653694786,-77.37879037857057,40.38084568185104"
          src="https://map.treetracker.org/wallets/9e143717-b34b-4e53-b810-6668d371adda?bounds=36.460189819335945,-0.23878028414651437,36.51889801025391,-0.16230561483658262&tree_id=1400272"
          height="100%"
          width="100%"
          style={{ border: 'none' }}
          ref={(iframe) => {
            console.log('xxx iframe: ', iframe);
            // listen for messages from the iframe
            window.addEventListener(
              'message',
              (event) => {
                console.log('xxx mother page get event: ', event);
                const token = {
                  id: faker.datatype.uuid(),
                  walletId: currentWallet?.id || 'no',
                  createdAt: faker.date.past(),
                };
                setChosenToken(token);
              },
              false,
            );
          }}
        />
      </Box>
    </Box>
  );
}
