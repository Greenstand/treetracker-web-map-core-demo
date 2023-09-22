import { User } from "demo-core/models/user/User";
import { RecoilState, atom } from "recoil";

const currentUser: RecoilState<User | null> = atom<User | null>({
  key: "currentUser",
  default: null,
});

export default currentUser;
