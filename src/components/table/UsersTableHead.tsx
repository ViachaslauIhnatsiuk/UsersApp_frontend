import { FC } from 'react';

import { tableHeadTitles } from '../../constants/tableHeadTitles';
import { useUserCheck } from '../../hooks/useUserCheck';
import { UsersTableHeadTitle } from './UsersTableHeadTitle';

const UsersTableHead: FC = () => {
  const { users, allUsersChecked, toggleAllUsers } = useUserCheck();

  return (
    <thead className="bg-info">
      <tr>
        <th>
          <input
            type="checkbox"
            checked={allUsersChecked}
            onChange={() => toggleAllUsers(users)}
          />
        </th>
        {tableHeadTitles.map((title) => (
          <UsersTableHeadTitle key={title} title={title} />
        ))}
      </tr>
    </thead>
  );
};

export { UsersTableHead };
