import { Dispatch, SetStateAction } from 'react';

import { IUser } from './user';

interface IContext {
  users: IUser[];
  isAuth: boolean;
  allUsersChecked: boolean;
  setUsers: Dispatch<SetStateAction<IUser[]>>;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  setAllUsersChecked: Dispatch<SetStateAction<boolean>>;
}

export type { IContext };
