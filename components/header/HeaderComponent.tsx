import { useDispatch } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";

import useAppSelector from "../../hooks/redux.hooks";
import { selectProductsCount } from "../../store/toolkit/cart/cart.selector";
import { toggleCart } from "../../store/toolkit/cart/cart.slice";

// Styles
import { CartInfo, Header, LogoName } from "./headerStyles";

const HeaderComponent = () => {
  const dispatch = useDispatch();

  const productsCount = useAppSelector(selectProductsCount);

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  return (
    <Header>
      <LogoName>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </LogoName>
      <CartInfo onClick={handleCartClick}>
        <TiShoppingCart size={15} />
        <p>{productsCount}</p>
      </CartInfo>
    </Header>
  );
};

export default HeaderComponent;
