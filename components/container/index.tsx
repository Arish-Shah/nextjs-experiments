import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";

interface ContainerProps {
  children: React.ReactNode;
  forIndex?: boolean;
}

export function Container({ children, forIndex }: ContainerProps) {
  return (
    <main className="w-[763px] mx-auto p-[16px_0px]">
      <Header forIndex={forIndex} />
      <Content>
        {children}
        {forIndex && <Footer />}
      </Content>
      {!forIndex && <Footer />}
    </main>
  );
}
