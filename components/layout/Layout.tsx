import { ReactNode } from "react";
import Footer from "../footer/FooterComponent";
import HeaderComponent from "../header/HeaderComponent";
import { MainContainer } from "./LeyoutStyles";

interface iLayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: iLayoutProps) => {
  return (
    <>
      <HeaderComponent />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
