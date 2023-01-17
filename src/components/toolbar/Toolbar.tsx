import { FC } from 'react';
import Button from 'react-bootstrap/Button';

const Toolbar: FC = () => {
  return (
    <nav>
      <Button variant="primary">Block</Button>
      <Button variant="success">Unblock</Button>
      <Button variant="warning">Delete</Button>
    </nav>
  );
};

export { Toolbar };
