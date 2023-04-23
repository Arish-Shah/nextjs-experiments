import { ClerkProvider } from "@clerk/nextjs/app-beta";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
