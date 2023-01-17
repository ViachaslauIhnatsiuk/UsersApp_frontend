import { FC } from 'react';

import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

const Table: FC = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <TableHead />
      <tbody className="divide-y divide-gray-200">
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
};

export { Table };
