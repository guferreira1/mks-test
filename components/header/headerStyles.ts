import styled from "styled-components";
import Colors from "../../themes/themeColors";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  color: ${Colors.text.white};
  background-color: ${Colors.primary};
`;

export const LogoName = styled.div`
  display: flex;
  gap: 5px;

  h1 {
    font-size: 2rem;
    line-height: 1.1875rem;
    font-weight: 600;
  }

  span {
    font-size: 1rem;
    line-height: 1.1875rem;
    font-weight: 300;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 52px;
  height: 26px;
  background-color: ${Colors.text.white};
  color: ${Colors.black};
  border-radius: 8px;
  transition: 0.3s ease;

  :hover {
    cursor: pointer;
    filter: brightness(0.7);
  }

  p {
    font-size: 0.75rem;
    line-height: 0.9375rem;
    font-weight: 700;
  }
`;
