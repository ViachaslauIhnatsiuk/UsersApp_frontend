import { useContext } from 'react';

import { BASE_URL } from '../constants/baseUrl';
import { Context } from '../context/context';

const useSignout = () => {
  const { setIsAuth } = useContext(Context);

  const signOut = async (): Promise<void> => {
    const user = JSON.parse(localStorage.getItem('user') as string) || '';

    await fetch(`${BASE_URL}/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ lastSignin: Date.now() }),
    });

    localStorage.removeItem('user');
    setIsAuth(false);
  };

  return { signOut };
};

export { useSignout };
