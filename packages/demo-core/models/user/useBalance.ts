import { useEffect, useState } from "react";
import * as accounts from '../api/accounts';

export default function useBalance(accountId: string | undefined) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function load(){
      if(!accountId) return;
      const balance = await accounts.getBalance(accountId);
      setBalance(balance);
    }
    load();
  }, [accountId]);

  return balance;
}
