import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <div className="d-flex py-2 px-4 justify-content-between align-items-center">
      <Link to="/">
        <h1>Users List</h1>
      </Link>
      <nav>
        <Link to="/signup">
          <Button variant="dark">SignUp</Button>
        </Link>
        <Link to="/signin">
          <Button variant="dark">SignIn</Button>
        </Link>
      </nav>
    </div>
  );
};

export { Navbar };
