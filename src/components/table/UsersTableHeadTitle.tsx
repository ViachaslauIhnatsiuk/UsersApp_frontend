import { FC } from 'react';

import { ITableTitleProps } from '../../models/tableProps';

const UsersTableHeadTitle: FC<ITableTitleProps> = ({ title }) => {
  return <th>{title}</th>;
};

export { UsersTableHeadTitle };
