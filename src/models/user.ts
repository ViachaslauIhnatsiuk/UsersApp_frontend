interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  isBlocked: boolean;
  isChecked: boolean;
  createdAt: string;
  updatedAt: string;
}

export type { IUser };
