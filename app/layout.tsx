import { Header } from "@/components/header";
import "./globals.css";
import { Content } from "@/components/content";

export const metadata = {
  title: "nextjs-experiments",
  description: "Next.js Experiments",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-twttr-blue bg-twttr-clouds bg-fixed bg-left-top bg-no-repeat">
        <main className="w-[768px] mx-auto py-[15px]">
          <Header />
          <Content>
            {children}
          </Content>
        </main>
      </body>
    </html>
  );
}
