import { FC, useContext, useEffect } from 'react';

import { BASE_URL } from '../../constants/baseUrl';
import { Context } from '../../context/context';
import { UsersTable } from '../table/UsersTable';
import { Toolbar } from '../toolbar/Toolbar';

const Home: FC = () => {
  const { users, setUsers } = useContext(Context);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const response = await fetch(`${BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const users = await response.json();

      if (response.ok) {
        setUsers(users);
      }
    };

    const user = JSON.parse(localStorage.getItem('user') as string) || '';

    if (user) {
      fetchUsers();
    }
  }, []);

  return (
    <div className="px-2">
      <Toolbar />
      <UsersTable users={users} />
    </div>
  );
};

export { Home };
