import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import {
  selectProductsCount,
  selectProductsTotalPrice,
} from "../../store/toolkit/cart/cart.selector";

// Utilities
import { toggleCart } from "../../store/toolkit/cart/cart.slice";
import useAppSelector from "../../hooks/redux.hooks";

// Components
import CartItemComponent from "../cart-item/Cart-itemComponent";

// Styles
import {
  CartContainer,
  CartEscapeArea,
  CartContent,
} from "./CartStyles";

const CartComponent = () => {
  const { isVisible, products } = useAppSelector(
    (state) => state.cartReducer
  );

  const productsTotalPrice = useAppSelector(
    selectProductsTotalPrice
  );
  const productsCount = useAppSelector(selectProductsCount);

  const dispatch = useDispatch();

  const handleEscapeAreaClick = () => {
    dispatch(toggleCart());
  };

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />

      <CartContent>
        <div className="headerCart">
          <p>Seu Carrinho</p>
          <div
            className="closeCart"
            onClick={handleEscapeAreaClick}
          >
            <AiOutlineClose size={25} />
          </div>
        </div>

        {products.map((product) => (
          <CartItemComponent
            key={product.id}
            product={product}
          />
        ))}

        {productsCount > 0 && (
          <p>
            Total:{" "}
            {productsTotalPrice
              .toFixed(2)
              .toString()
              .replace(".", ",")}
          </p>
        )}

        {productsCount > 0 && (
          <button className="finishButton">
            Finalizar Compra
          </button>
        )}

        {productsCount === 0 && (
          <p>Seu carrinho está vazio!</p>
        )}
      </CartContent>
    </CartContainer>
  );
};

export default CartComponent;
