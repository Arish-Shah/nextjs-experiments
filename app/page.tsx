import { prisma } from "@/prisma/db";

async function getUsers() {
  const users = await prisma.user.findMany();
  return users.map((user) => user.username);
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </main>
  );
}
