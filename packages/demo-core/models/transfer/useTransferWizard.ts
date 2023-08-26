import {
  RecoilState,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { Wallet } from '../entities/Wallet';
import { Token } from '../entities/Token';

const transferWizardState = atom<{
  step: number;
  fromWallet: Wallet | null;
  toWallet: Wallet | null;
  token: Token | null;
  step1: {
    error: string | null;
  };
  step2: {
    error: string | null;
  };
  step3: {
    error: string | null;
  };
}>({
  key: 'transfer/transferWizard',
  default: {
    step: 0,
    fromWallet: null,
    toWallet: null,
    token: null,
    step1: {
      error: null,
    },
    step2: {
      error: null,
    },
    step3: {
      error: null,
    },
  },
});

const isTransferableState = selector({
  key: 'transfer/isTransferable',
  get: function ({ get }: any) {
    const { fromWallet, token } = get(transferWizardState);
    console.log('isTransferable', fromWallet, token);
    return fromWallet && token;
  },
});

export default function useTransferWizard() {
  const [wizard, setWizard] = useRecoilState(transferWizardState);

  const isTransferable = useRecoilValue(isTransferableState);

  function gotoStep2(onSuccess: Function) {
    if (!wizard.toWallet) {
      setWizard({
        ...wizard,
        step1: { ...wizard.step1, error: 'Please select a wallet' },
      });
      return;
    }
    onSuccess();
  }

  async function transfer(onSuccess: Function) {
    console.log('transfer');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    onSuccess();
  }

  return {
    wizard,
    setWizard,
    isTransferable,
    gotoStep2,
    transfer,
  };
}
