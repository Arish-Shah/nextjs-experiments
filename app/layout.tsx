import "./globals.css";

export const metadata = {
  title: "Twitter: What are you doing?",
  description: "Twitter is a free social messaging utility for staying connected in real-time",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-tw-blue bg-tw-clouds bg-fixed bg-no-repeat bg-left-top">
        {children}
      </body>
    </html>
  );
}
