import { Header } from "@/components/layout/header";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
