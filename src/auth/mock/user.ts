export enum Role {
  Reader = 'Reader',
  Writer = 'Writer',
  SuperAdmin = 'SuperAdmin',
}

export interface User {
  name: string;
  email: string;
  password: string;
  role: Role;
}

export const mockUsers: User[] = [
  {
    name: 'Reader',
    email: 'reader@example.com',
    password: 'readerPass123',
    role: Role.Reader,
  },
  {
    name: 'Writer',
    email: 'writer@example.com',
    password: 'writerPass123',
    role: Role.Writer,
  },
  {
    name: 'SuperAdmin',
    email: 'admin@example.com',
    password: 'adminPass123',
    role: Role.SuperAdmin,
  },
];
