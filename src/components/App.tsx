import jwtDecode from 'jwt-decode';
import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Context } from '../context/context';
import { convertSigninDate } from '../helpers/convertDate';
import { IUser } from '../models/user';
import { Navbar } from './navbar/Navbar';
import { Home } from './pages/Home';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [allUsersChecked, setAllUsersChecked] = useState<boolean>(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as string) || '';
    if (user) {
      setIsAuth(true);
    }
  }, []);

  const getSigninDate = (): string => {
    const { token } = JSON.parse(window.localStorage.getItem('user') as string);

    const { iat } = jwtDecode<{ iat: number }>(token);
    const convertedDate = convertSigninDate(iat);
    return convertedDate;
  };

  useEffect(() => {
    getSigninDate();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Context.Provider
          value={{
            users,
            isAuth,
            allUsersChecked,
            setUsers,
            setIsAuth,
            setAllUsersChecked,
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={isAuth ? <Home /> : <Navigate to="/signin" />} />
            <Route path="/signin" element={!isAuth ? <Signin /> : <Navigate to="/" />} />
            <Route path="/signup" element={!isAuth ? <Signup /> : <Navigate to="/" />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
};

export { App };
