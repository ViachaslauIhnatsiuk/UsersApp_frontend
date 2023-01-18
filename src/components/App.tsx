import 'bootstrap/dist/css/bootstrap.min.css';

import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Context } from '../context/context';
import { IUser } from '../models/user';
import { Navbar } from './navbar/Navbar';
import { Home } from './pages/Home';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as string) || '';
    if (user) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Context.Provider
          value={{
            users,
            isAuth,
            setUsers,
            setIsAuth,
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
};

export { App };
