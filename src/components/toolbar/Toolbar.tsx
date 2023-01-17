import { FC } from 'react';

const Toolbar: FC = () => {
  return (
    <nav className="flex gap-x-2 p-2">
      <button type="button" className="py-1 px-2 rounded-md bg-red-500 text-sm">
        Block
      </button>
      <button type="button" className="py-1 px-2 rounded-md bg-red-500 text-sm">
        Unblock
      </button>
      <button type="button" className="py-1 px-2 rounded-md bg-red-500 text-sm">
        Delete
      </button>
    </nav>
  );
};

export { Toolbar };
