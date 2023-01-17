import { FC } from 'react';

import { Button } from '../button/Button';

const Toolbar: FC = () => {
  return (
    <nav className="flex gap-x-2 p-2">
      <Button name="Block" color="red" />
      <Button name="Unblock" color="green" />
      <Button name="Delete" color="blue" />
    </nav>
  );
};

export { Toolbar };
