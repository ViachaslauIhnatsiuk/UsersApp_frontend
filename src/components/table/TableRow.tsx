import { FC } from 'react';

import { convertDate } from '../../helpers/convertDate';
import { IUser } from '../../models/user';

const TableRow: FC<{ user: IUser }> = ({ user }) => {
  return (
    <tr>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
        <input type="checkbox" />
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
        {user._id}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{user.name}</td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{user.email}</td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
        {convertDate(user.createdAt)}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
        {convertDate(user.updatedAt)}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
        {user.isBlocked ? 'yes' : 'no'}
      </td>
    </tr>
  );
};

export { TableRow };
