import { FC, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { Context } from '../../context/context';
import { useSignout } from '../../hooks/useSignout';

const Navbar: FC = () => {
  const { isAuth } = useContext(Context);
  const { signOut } = useSignout();

  return (
    <div className="d-flex pt-2 pb-5 px-2 justify-content-between align-items-center">
      <Link to="/" className="text-decoration-none text-secondary h1">
        Users List
      </Link>
      {isAuth ? (
        <Link to="/">
          <Button variant="primary" onClick={signOut}>
            Sign Out
          </Button>
        </Link>
      ) : (
        <div className="d-flex gap-2">
          <Link to="/signup">
            <Button variant="primary">Sign Up</Button>
          </Link>
          <Link to="/signin">
            <Button variant="primary">Sign In</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export { Navbar };
