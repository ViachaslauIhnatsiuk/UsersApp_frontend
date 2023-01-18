import { FC, useContext } from 'react';
import Button from 'react-bootstrap/Button';

import { Context } from '../../context/context';
import { useUsersManage } from '../../hooks/useUsersManage';

const Toolbar: FC = () => {
  const { deleteUser, blockUser, unblockUser } = useUsersManage();
  const { users } = useContext(Context);

  const isButtonShouldBeDisabled = () => {
    return users.find((user) => user.isChecked === true) ? false : true;
  };

  return (
    <nav>
      <Button variant="primary" disabled={isButtonShouldBeDisabled()} onClick={blockUser}>
        Block
      </Button>
      <Button
        variant="success"
        disabled={isButtonShouldBeDisabled()}
        onClick={unblockUser}
      >
        Unblock
      </Button>
      <Button
        variant="warning"
        disabled={isButtonShouldBeDisabled()}
        onClick={deleteUser}
      >
        Delete
      </Button>
    </nav>
  );
};

export { Toolbar };
