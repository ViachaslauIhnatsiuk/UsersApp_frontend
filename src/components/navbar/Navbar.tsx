import { FC, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { Context } from '../../context/context';
import { useSignout } from '../../hooks/useSignout';

const Navbar: FC = () => {
  const { isAuth } = useContext(Context);
  const { signOut } = useSignout();

  return (
    <div className="d-flex py-2 px-4 justify-content-between align-items-center">
      <Link to="/">
        <h1>Users List</h1>
      </Link>
      <nav>
        {isAuth ? (
          <div>
            <Link to="/">
              <Button variant="dark" onClick={signOut}>
                Sign Out
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/signup">
              <Button variant="dark">Sign Up</Button>
            </Link>
            <Link to="/signin">
              <Button variant="dark">Sign In</Button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export { Navbar };
