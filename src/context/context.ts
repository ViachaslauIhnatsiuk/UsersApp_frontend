import { createContext } from 'react';

import { IContext } from '../models/contextModel';

const Context = createContext<IContext>({
  users: [],
  isAuth: false,
  allUsersChecked: false,
  setUsers: () => {},
  setIsAuth: () => false,
  setAllUsersChecked: () => false,
});

export { Context };
