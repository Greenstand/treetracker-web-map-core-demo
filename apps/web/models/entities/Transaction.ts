export type Transaction = {
  id: string;
  amount: number;
  createdAt: Date;
  walletId: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  receiverId: string;
  receiverName: string;
  receiverAvatar: string;
};
