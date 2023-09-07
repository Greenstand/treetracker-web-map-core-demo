import { faker } from '@faker-js/faker';
import { Wallet } from '../entities/Wallet';

async function getWallets(userId: string): Promise<Wallet[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Array.from({ length: 3 }, () => ({
    id: faker.datatype.uuid(),
    name: faker.internet.userName(),
    balance: faker.datatype.number({ min: 1000, max: 100000 }),
    createdAt: faker.date.past(),
    logo: faker.image.url(),
  }));
}

const wallets = Array.from({ length: 10 }, () => ({
  id: faker.datatype.uuid(),
  name: faker.internet.userName(),
  balance: faker.datatype.number({ min: 1000, max: 100000 }),
  createdAt: faker.date.past(),
  logo: faker.image.url(),
}));

async function getWalletByKeyword(keyword: string): Promise<Wallet[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return wallets.filter((option) =>
    option.name.toLowerCase().includes(keyword.toLowerCase()),
  );
}
export { getWallets, getWalletByKeyword };
