import { faker } from '@faker-js/faker';
import { User } from '../user/User';

async function login(user: string, password: string): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    userId: faker.datatype.uuid(),
    token: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
  };
}

async function getBalance(userId: string): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return faker.datatype.number({ min: 1000, max: 100000 });
}

export { login, getBalance };
