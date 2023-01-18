import { useContext } from 'react';

import { Context } from '../context/context';

const useSignout = () => {
  const { setIsAuth } = useContext(Context);

  const signOut = async () => {
    localStorage.removeItem('user');
    setIsAuth(false);
  };

  return { signOut };
};

export { useSignout };
