import { useContext, useState } from 'react';

import { Context } from '../context/context';
import { BASE_URL } from './../constants/baseUrl';

const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { setIsAuth } = useContext(Context);

  const signUp = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
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

  return { signUp, isLoading, error };
};

export { useAuth };
