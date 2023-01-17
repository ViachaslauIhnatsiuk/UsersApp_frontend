import { FC, useEffect, useState } from 'react';

import { BASE_URL } from '../../constants/baseUrl';
import { Context } from '../../context/context';
import { IUser } from '../../models/user';
import { UsersTable } from '../table/UsersTable';
import { Toolbar } from '../toolbar/Toolbar';

const Home: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

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
        setUsers,
      }}
    >
      <div className="px-2">
        <div className="d-flex py-2 px-4 justify-content-between align-items-center">
          <h1>Users List</h1>
          <Toolbar />
        </div>
        <UsersTable users={users} />
      </div>
    </Context.Provider>
  );
};

export { Home };
