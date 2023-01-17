import { useContext, useState } from 'react';

import { Context } from '../context/context';
import { IUser } from '../models/user';

const useUserCheck = () => {
  const [allUsersChecked, setAllUsersChecked] = useState<boolean>(false);
  const { users, setUsers } = useContext(Context);

  const isUncheckedUserExist = (): boolean => {
    return users.find(({ isChecked }) => isChecked === false) ? true : false;
  };

  const toggleUser = (currentUser: IUser): void => {
    const updatedUsers = users.map((user: IUser) => {
      if (currentUser._id === user._id) {
        return { ...user, isChecked: !currentUser.isChecked };
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  const toggleAllUsers = (users: IUser[]): void => {
    const isAnyUserUnchecked = isUncheckedUserExist();

    if (isAnyUserUnchecked) {
      const updatedTodoList = users.map((user) => (user = { ...user, isChecked: true }));

      setAllUsersChecked(true);
      setUsers(updatedTodoList);
    } else {
      if (!allUsersChecked) {
        setAllUsersChecked(true);
      } else {
        const updatedUsers = users.map((user) => (user = { ...user, isChecked: false }));

        setAllUsersChecked(false);
        setUsers(updatedUsers);
      }
    }
  };

  return { users, allUsersChecked, toggleUser, toggleAllUsers };
};

export { useUserCheck };
