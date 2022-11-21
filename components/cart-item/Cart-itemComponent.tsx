import { useDispatch } from "react-redux";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineClose,
} from "react-icons/ai";

// Utilities
import { CartProducts } from "../../types/cartTypes";
import {
  decreaseCartProductQuantity,
  increaseCartProductQuantity,
  removeProductFromCart,
} from "../../store/toolkit/cart/cart.slice";

// Styles
import {
  CartItemContainer,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton,
} from "./Cart-itemStyles";
import Image from "next/image";

interface CartItemProps {
  product: CartProducts;
}

const CartItemComponent = ({ product }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeProductFromCart(product.id));
  };

  const handleIncreaseClick = () => {
    dispatch(increaseCartProductQuantity(product.id));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseCartProductQuantity(product.id));
  };

  return (
    <CartItemContainer>
      <RemoveButton onClick={handleRemoveItem}>
        <AiOutlineClose size={25} />
      </RemoveButton>
      <div>
        <Image
          src={product.photo}
          alt={product.name}
          width="80"
          height="95"
        />
      </div>

      <CartItemInfo>
        <p>{product.name}</p>

        <div className="cartPrice">
          <CartItemQuantity>
            <AiOutlineMinus
              size={20}
              onClick={handleDecreaseClick}
            />
            <p className="quantity">{product.quantity}</p>
            <AiOutlinePlus
              size={20}
              onClick={handleIncreaseClick}
            />
          </CartItemQuantity>
          <div className="price">
            <p>
              R${" "}
              {Number(product.price)
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </p>
          </div>
        </div>
      </CartItemInfo>
    </CartItemContainer>
  );
};

export default CartItemComponent;
