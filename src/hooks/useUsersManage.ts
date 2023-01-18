import { useContext, useState } from 'react';

import { BASE_URL } from '../constants/baseUrl';
import { Context } from '../context/context';
import { useSignout } from './useSignout';

const useUsersManage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { users, setUsers, setAllUsersChecked } = useContext(Context);
  const { signOut } = useSignout();

  const deleteUser = () => {
    setIsLoading(true);

    const usersToDelete = users.filter((user) => user.isChecked === true);
    const remainingUsers = users
      .filter((user) => user.isChecked === false)
      .map((user) => ({ ...user, isChecked: false }));

    const user = JSON.parse(localStorage.getItem('user') as string) || '';

    usersToDelete.forEach(async ({ _id }) => {
      await fetch(`${BASE_URL}/users/${_id}`, {
        method: 'DELETE',
        headers: { authorization: `Bearer ${user.token}` },
      });
    });

    setUsers(remainingUsers);
    setAllUsersChecked(false);
    setIsLoading(false);

    const isCurrentUserWillBeDeleted = usersToDelete.find(
      ({ email }) => email === user.email,
    );

    if (isCurrentUserWillBeDeleted) {
      signOut();
    }
  };

  const blockUser = () => {
    setIsLoading(true);

    const usersToBlock = users.filter((user) => user.isChecked === true);
    const updatedUsers = users.map((user) => {
      if (user.isChecked) {
        return { ...user, isBlocked: true, isChecked: false };
      }
      return user;
    });

    const user = JSON.parse(localStorage.getItem('user') as string) || '';

    usersToBlock.forEach(async ({ _id }) => {
      await fetch(`${BASE_URL}/users/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ isBlocked: true }),
      });
    });

    setUsers(updatedUsers);
    setAllUsersChecked(false);
    setIsLoading(false);

    const isCurrentUserWillBeBlocked = usersToBlock.find(
      ({ email }) => email === user.email,
    );

    if (isCurrentUserWillBeBlocked) {
      signOut();
    }
  };

  const unblockUser = () => {
    setIsLoading(true);

    const usersToUnblock = users.filter((user) => user.isChecked === true);
    const updatedUsers = users.map((user) => {
      if (user.isChecked) {
        return { ...user, isBlocked: false, isChecked: false };
      }
      return user;
    });

    const user = JSON.parse(localStorage.getItem('user') as string) || '';

    usersToUnblock.forEach(async ({ _id }) => {
      await fetch(`${BASE_URL}/users/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ isBlocked: false }),
      });
    });

    setUsers(updatedUsers);
    setAllUsersChecked(false);
    setIsLoading(false);
  };

  return { deleteUser, blockUser, unblockUser, isLoading };
};

export { useUsersManage };
