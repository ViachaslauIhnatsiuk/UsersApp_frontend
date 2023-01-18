import { FC } from 'react';
import Table from 'react-bootstrap/Table';

import { IUser } from '../../models/user';
import { UsersTableHead } from './UsersTableHead';
import { UsersTableRow } from './UsersTableRow';

const UsersTable: FC<{ users: IUser[] }> = ({ users }) => {
  return (
    <Table striped className="border border-light">
      <UsersTableHead />
      <tbody>
        {users &&
          users.map((user: IUser, index: number) => (
            <UsersTableRow key={user._id} user={user} index={index} />
          ))}
      </tbody>
    </Table>
  );
};

export { UsersTable };
