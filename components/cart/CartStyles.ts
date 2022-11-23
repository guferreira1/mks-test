import styled from "styled-components";
import Colors from "../../themes/themeColors";

interface CartContainerPros {
  isVisible: boolean;
}

export const CartContainer = styled.div<CartContainerPros>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) =>
    props.isVisible ? "visible" : "hidden"};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;
  p {
    color: ${Colors.black};
  }
`;

export const CartEscapeArea = styled.div`
  width: 100%;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-width: 500px;
  z-index: 200;
  background-color: ${Colors.primary};
  padding: 10px;
  overflow-y: auto;

  @media (max-width: 768px) {
    min-width: 280px;
  }

  .finishButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65px;
    background-color: ${Colors.black};
    border: none;
    border-radius: 8px;
    font-size: 1.25rem;
    line-height: 0.9375rem;
    font-weight: 700;
    color: ${Colors.text.white};
    cursor: pointer;
    transition: 0.5s ease;

    :hover {
      background-color: ${Colors.gray1};
    }
  }

  .headerCart {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    p {
      font-size: 1.6875rem;
      line-height: 2.0625rem;
      font-weight: 700;
      color: ${Colors.text.white};
    }

    .closeCart {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50px;
      background-color: ${Colors.black};
      color: ${Colors.text.white};
      cursor: pointer;
      transition: 0.3s ease;

      :hover {
        background-color: ${Colors.gray1};
      }
    }
  }

  .separatePrice {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 35px;

    p {
      color: ${Colors.text.white};
      font-weight: 600;
      font-size: 1.125rem;
      margin-bottom: 15px;
    }

    span {
      color: ${Colors.text.white};
      font-weight: 600;
      font-size: 1.125rem;
      margin-bottom: 15px;
    }
  }
`;
