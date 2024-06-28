export type User = {
  id?: number;
  pseudo: string;
  fullName?: string | null;
  email: string;
  password: string;
  password_confirmation?: string;
  createAt?: Date;
  updatedAt?: Date | null;
};
