import { TiShoppingCart } from "react-icons/ti";

// Styles
import { CartInfo, Header, LogoName } from "./headerStyles";

const HeaderComponent = () => {
  return (
    <Header>
      <LogoName>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </LogoName>
      <CartInfo>
        <TiShoppingCart size={15} />
        <p>0</p>
      </CartInfo>
    </Header>
  );
};

export default HeaderComponent;
