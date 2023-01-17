import { FC, useEffect, useState } from 'react';

import { BASE_URL } from '../../constants/baseUrl';
import { Context } from '../../context/context';
import { IUser } from '../../models/user';
import { Table } from '../table/Table';
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
      <div>
        <Toolbar />
        <Table users={users} />
      </div>
    </Context.Provider>
  );
};

export { Home };
