import { FC } from 'react';
import Button from 'react-bootstrap/Button';

import { useUsersManage } from '../../hooks/useUsersManage';

const Toolbar: FC = () => {
  const { deleteUser, blockUser, unblockUser } = useUsersManage();

  return (
    <nav>
      <Button variant="primary" onClick={blockUser}>
        Block
      </Button>
      <Button variant="success" onClick={unblockUser}>
        Unblock
      </Button>
      <Button variant="warning" onClick={deleteUser}>
        Delete
      </Button>
    </nav>
  );
};

export { Toolbar };
