import { RecoilState, atom } from 'recoil';
import { User } from 'demo-core/models/user/User';

const currentUser: RecoilState<User | null> = atom<User | null>({
  key: 'currentUser',
  default: null,
});

export default currentUser;
