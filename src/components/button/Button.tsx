import { FC } from 'react';

const Button: FC<{ name: string; color: string }> = ({ name, color }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: color }}
      className="py-1 px-2 rounded-md text-sm text-white"
    >
      {name}
    </button>
  );
};

export { Button };
