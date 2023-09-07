import { useEffect, useState } from "react";
import { Transaction } from "../entities/Transaction";
import { Wallet } from "../entities/Wallet";
import * as transactions from '../api/transactions';

export default function useTransactionList(walletId: string) {
  const [list, setList] = useState<Transaction[]>([]);
  const [isTransactionLoading, setIsTransactionLoading] = useState(true);

  useEffect(() => {
    async function load(){
      console.log('useTransactionList', walletId);
      setIsTransactionLoading(true);
      const ts = await transactions.getTransactions(walletId);
      console.log('useTransactionList', ts);
      setIsTransactionLoading(false);
      setList(ts);
    }
    load();
  }, [walletId]);

  return { list, isTransactionLoading };
}
