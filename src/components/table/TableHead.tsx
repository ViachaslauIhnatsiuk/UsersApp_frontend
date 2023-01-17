import { FC } from 'react';

import { tableHeadTitles } from '../../constants/tableHeadTitles';
import { TableHeadTitle } from './TableHeadTitle';

const TableHead: FC = () => {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th
          scope="col"
          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
        >
          <input type="checkbox" />
        </th>
        {tableHeadTitles.map((title) => (
          <TableHeadTitle key={title} title={title} />
        ))}
      </tr>
    </thead>
  );
};

export { TableHead };
