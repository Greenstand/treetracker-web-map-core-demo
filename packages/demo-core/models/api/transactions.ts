import { faker } from '@faker-js/faker';
import { Transaction } from '../entities/Transaction';

async function getTransactions(walletId: string): Promise<Transaction[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Array.from({ length: 10 }, () => ({
    id: faker.datatype.uuid(),
    amount: faker.datatype.number({ min: 1000, max: 100000 }),
    createdAt: faker.date.past(),
    walletId,
    senderId: faker.datatype.uuid(),
    senderName: faker.person.firstName(),
    senderAvatar: faker.image.avatar(),
    receiverId: faker.datatype.uuid(),
    receiverName: faker.person.firstName(),
    receiverAvatar: faker.image.avatar(),
  }));
}

export { getTransactions };
