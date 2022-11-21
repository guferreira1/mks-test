import Image from "next/image";
import { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";

import { CardContainer } from "./CardStyles";

interface iProducts {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

const CardComponent = () => {
  const [isProduct, setIsProduct] = useState<iProducts[]>(
    []
  );

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await fetch(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      );

      const data = await res.json();

      setIsProduct(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CardContainer>
        <ul>
          {isProduct.map((product) => (
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
              <button>
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
