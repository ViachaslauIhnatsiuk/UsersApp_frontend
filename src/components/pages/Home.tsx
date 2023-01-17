import { FC, useEffect, useState } from 'react';

import { IUser } from '../../models/user';
import { Table } from '../table/Table';
import { Toolbar } from '../toolbar/Toolbar';

const BASE_URL = 'http://localhost:4000';

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
    <div>
      <Toolbar />
      <Table users={users} />
    </div>
  );
};

export { Home };
