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
        <div className="flex justify-between items-center py-2 px-6 text-2xl font-semibold text-gray-700">
          <h1>Users List</h1>
          <Toolbar />
        </div>
        <Table users={users} />
      </div>
    </Context.Provider>
  );
};

export { Home };
