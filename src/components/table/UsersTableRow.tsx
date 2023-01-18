import { FC } from 'react';

import { convertCreatedDate, convertSigninDate } from '../../helpers/convertDate';
import { useUserCheck } from '../../hooks/useUserCheck';
import { IUser } from '../../models/user';

const UsersTableRow: FC<{ user: IUser; index: number }> = ({ user, index }) => {
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
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{convertCreatedDate(user.createdAt)}</td>
      <td>{convertSigninDate(user.lastSignin)}</td>
      <td>
        {user.isBlocked ? (
          <span className="text-danger">blocked</span>
        ) : (
          <span className="text-success">not blocked</span>
        )}
      </td>
    </tr>
  );
};

export { UsersTableRow };
