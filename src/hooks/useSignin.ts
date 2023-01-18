import { useContext, useState } from 'react';

import { BASE_URL } from '../constants/baseUrl';
import { Context } from '../context/context';

const useSignin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { setIsAuth } = useContext(Context);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const user = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(user.error);
    }

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(user));

      setIsAuth(true);
      setIsLoading(false);
    }
  };

  return { signIn, isLoading, error };
};

export { useSignin };
