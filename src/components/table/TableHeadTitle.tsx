import { FC } from 'react';

import { TableTitleProps } from '../../models/tableProps';

const TableHeadTitle: FC<TableTitleProps> = ({ title }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
    >
      {title}
    </th>
  );
};

export { TableHeadTitle };
