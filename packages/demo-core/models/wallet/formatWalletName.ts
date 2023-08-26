import { Wallet } from '../entities/Wallet';

export default function formatWalletName(wallet: Wallet): string {
  // cut if name is too long
  return wallet.name.length > 12
    ? `${wallet.name.slice(0, 12)}...`
    : wallet.name;
}
