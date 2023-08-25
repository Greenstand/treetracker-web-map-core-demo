import { useEffect, useState } from "react";
import { Wallet } from "../entities/Wallet";
import * as wallets from '../api/wallets';

export default function useWalletList(userId: string| undefined) {
  const [list, setList] = useState<Wallet[]>([]);
  const [isWalletLoading, setIsWalletLoading] = useState(true);

  useEffect(() => {
    async function load(){
      setIsWalletLoading(true);
      const ws = await wallets.getWallets(userId || '');
      setIsWalletLoading(false);
      setList(ws);
    }
    load();
  }, []);

  return { list, isWalletLoading };
}
