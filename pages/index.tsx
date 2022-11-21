import Head from "next/head";
import Image from "next/image";
import CardComponent from "../components/card-component/Card-Component";
import CartComponent from "../components/cart/Cart-component";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <CardComponent />
      <CartComponent />
    </>
  );
};

export default Home;
