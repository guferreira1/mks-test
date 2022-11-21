import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../footer/FooterComponent";
import HeaderComponent from "../header/HeaderComponent";
import { Container, MainContainer } from "./LayoutStyles";

interface iLayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: iLayoutProps) => {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
      <Container>
        <HeaderComponent />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
