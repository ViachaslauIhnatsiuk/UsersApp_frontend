import { useContext, useState } from 'react';

import { BASE_URL } from '../constants/baseUrl';
import { Context } from '../context/context';

const useUsersManage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { users, setUsers, setAllUsersChecked } = useContext(Context);

  const deleteUser = async () => {
    setIsLoading(true);

    const usersToDelete = users.filter((user) => user.isChecked === true);
    const remainingUsers = users
      .filter((user) => user.isChecked === false)
      .map((user) => ({ ...user, isChecked: false }));

    const user = JSON.parse(localStorage.getItem('user') as string) || '';

    usersToDelete.forEach(async ({ _id }) => {
      await fetch(`${BASE_URL}/users/${_id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${user.token}` },
      });
    });

    setUsers(remainingUsers);
    setAllUsersChecked(false);
    setIsLoading(false);
  };

  const blockUser = async () => {
    setIsLoading(true);

    const usersToBlock = users.filter((user) => user.isBlocked === true);

    const user = JSON.parse(localStorage.getItem('user') as string) || '';

    usersToBlock.forEach(async ({ _id }) => {
      await fetch(`${BASE_URL}/users/${_id}`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${user.token}` },
        body: JSON.stringify({ isBlocked: user.isBlocked }),
      });
    });

    setIsLoading(false);
  };

  const unblockUser = async () => {
    setIsLoading(true);

    const usersToUnblock = users.filter((user) => user.isBlocked === true);

    const user = JSON.parse(localStorage.getItem('user') as string) || '';

    usersToUnblock.forEach(async ({ _id }) => {
      await fetch(`${BASE_URL}/users/${_id}`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${user.token}` },
        body: JSON.stringify({ isBlocked: user.isBlocked }),
      });
    });

    setIsLoading(false);
  };

  return { deleteUser, blockUser, unblockUser, isLoading };
};

export { useUsersManage };
