import { FC } from 'react';

import { IUser } from '../../models/user';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

const Table: FC<{ users: IUser[] }> = ({ users }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <TableHead />
      <tbody className="divide-y divide-gray-200">
        {users && users.map((user: IUser) => <TableRow key={user._id} user={user} />)}
      </tbody>
    </table>
  );
};

export { Table };
