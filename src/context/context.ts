import { createContext } from 'react';

import { IContext } from '../models/contextModel';

const Context = createContext<IContext>({
  users: [],
  setUsers: () => {},
});

export { Context };
