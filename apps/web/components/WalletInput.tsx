import React from 'react';
import * as wallets from '../models/api/wallets';
import { Wallet } from '../models/entities/Wallet';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';

export default function WalletInput({
  onWalletSelected,
}: {
  onWalletSelected: (wallet: Wallet) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly Wallet[]>([]);
  const loading = open && options.length === 0;
  const [value, setValue] = React.useState<Wallet | null>(null);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        wallets.getWalletByKeyword('').then((wallets: Wallet[]) => {
          setOptions([...wallets]);
        });
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  const fetch = async (
    value: string,
    callback: (results: readonly Wallet[]) => void,
  ) => {
    const options = await wallets.getWalletByKeyword(value);
    callback(options);
  };

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  React.useEffect(() => {
    fetch(inputValue, (options) => {
      console.log('fetching');
      setOptions([...options]);
    });
  }, [value, inputValue]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      filterOptions={(x) => x}
      value={value}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(event: any, newValue: any | null) => {
        console.log('event:', event, 'newValue:', newValue);
        onWalletSelected(newValue);
      }}
      renderInput={(params) => (
        <TextField
          sx={{
            width: '100%',
            marginTop: '0.5rem',
            height: 60,
            fontSize: '0.9rem',
            backgroundColor: '#F3F6FF',
          }}
          {...params}
          label=""
          placeholder="Send to wallet, input name here"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
