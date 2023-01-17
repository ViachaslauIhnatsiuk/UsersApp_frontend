import { FC } from 'react';

const TableRow: FC = () => {
  return (
    <tr>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
        <input type="checkbox" />
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">1</td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Name</td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        name@gmail.com
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
        Registration
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
        Last login
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
        Status
      </td>
    </tr>
  );
};

export { TableRow };
