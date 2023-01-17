import { FC } from 'react';

import { convertDate } from '../../helpers/convertDate';
import { useUserCheck } from '../../hooks/useUserCheck';
import { IUser } from '../../models/user';

const UsersTableRow: FC<{ user: IUser }> = ({ user }) => {
  const { toggleUser } = useUserCheck();

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={user.isChecked}
          onChange={() => toggleUser(user)}
        />
      </td>
      <td>{user._id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{convertDate(user.createdAt)}</td>
      <td>{convertDate(user.updatedAt)}</td>
      <td>{user.isBlocked ? 'yes' : 'no'}</td>
    </tr>
  );
};

export { UsersTableRow };
