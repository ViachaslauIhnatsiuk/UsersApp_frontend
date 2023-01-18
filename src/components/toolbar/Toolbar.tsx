import { FC } from 'react';
import Button from 'react-bootstrap/Button';

import { useUsersManage } from '../../hooks/useUsersManage';

const Toolbar: FC = () => {
  const { deleteUser } = useUsersManage();

  return (
    <nav>
      <Button variant="primary">Block</Button>
      <Button variant="success">Unblock</Button>
      <Button variant="warning" onClick={deleteUser}>
        Delete
      </Button>
    </nav>
  );
};

export { Toolbar };
