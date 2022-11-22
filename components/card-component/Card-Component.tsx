import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FiShoppingBag } from "react-icons/fi";

import { CardContainer } from "./Card-Styles";
import { addProductToCart } from "../../store/toolkit/cart/cart.slice";
import UseAppSelector from "../../hooks/redux.hooks";
import { fetchProducts } from "../../store/toolkit/product/product.slice";
import { Product } from "../../types/productTypes";

export const getStaticProps = () => {
  const { products } = UseAppSelector(
    (state) => state.productReducer
  );
  const res = products;

  return {
    props: {
      products: res,
    },
  };
};

interface CardComponentProps {
  products: Product[];
}

const CardComponent = ({
  products,
}: CardComponentProps) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProducts() as any);
  // }, []);

  return (
    <>
      <CardContainer>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Image
                src={product.photo}
                alt={product.name}
                width="127"
                height="158"
              />
              <div className="itemInfo">
                <div className="itemName">
                  <h2>{product.name}</h2>
                </div>
                <div className="itemPrice">
                  <span>
                    R${" "}
                    {Number(product.price)
                      .toFixed(2)
                      .toString()
                      .replace(".", ",")}
                  </span>
                </div>
              </div>
              <p>{product.description}</p>
              <button
                onClick={() =>
                  dispatch(addProductToCart(product))
                }
              >
                <FiShoppingBag />
                COMPRAR
              </button>
            </li>
          ))}
        </ul>
      </CardContainer>
    </>
  );
};

export default CardComponent;
