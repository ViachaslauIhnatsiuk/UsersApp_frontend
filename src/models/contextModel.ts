import { Dispatch, SetStateAction } from 'react';

import { IUser } from './user';

interface IContext {
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
}

export type { IContext };
