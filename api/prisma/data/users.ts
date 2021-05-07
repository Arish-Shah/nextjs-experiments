import { User } from "@prisma/client";

export const users: Pick<User, "id" | "email" | "username" | "password">[] = [
  {
    id: 1,
    email: "tom@mail.com",
    username: "tom",
    password: "tom",
  },
  {
    id: 2,
    email: "bob@mail.com",
    username: "bob",
    password: "bob",
  },
  {
    id: 3,
    email: "alice@mail.com",
    username: "alice",
    password: "alice",
  },
];
