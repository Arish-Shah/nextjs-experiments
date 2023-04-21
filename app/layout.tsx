import "./globals.css";

export const metadata = {
  title: "nextjs-graphql-experiments",
  description: "Next.js GraphQL Experiments",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
