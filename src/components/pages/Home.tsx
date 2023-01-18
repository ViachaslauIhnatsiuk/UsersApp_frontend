import { FC, useEffect, useState } from 'react';

import { BASE_URL } from '../../constants/baseUrl';
import { Context } from '../../context/context';
import { IUser } from '../../models/user';
import { UsersTable } from '../table/UsersTable';
import { Toolbar } from '../toolbar/Toolbar';

const Home: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const response = await fetch(`${BASE_URL}/users`);
      const receivedUsers = await response.json();

      if (response.ok) {
        setUsers(receivedUsers);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Context.Provider
      value={{
        users,
        isAuth,
        setUsers,
        setIsAuth,
      }}
    >
      <div className="px-2">
        <Toolbar />
        <UsersTable users={users} />
      </div>
    </Context.Provider>
  );
};

export { Home };
