import { createContext } from 'react';

import { IContext } from '../models/contextModel';

const Context = createContext<IContext>({
  users: [],
  isAuth: false,
  setUsers: () => {},
  setIsAuth: () => false,
});

export { Context };
