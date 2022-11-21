import styled from "styled-components";
import Colors from "../../themes/themeColors";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 15px;
  width: 250px;
  height: 220px;
  background-color: ${Colors.text.white};
  border-radius: 8px;

  p {
    color: ${Colors.black};
  }
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 20px;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }

  .cartPrice {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 90%;

    p {
      font-size: 0.9375rem;
      font-weight: 500;
    }

    .price {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 35px;
      background-color: ${Colors.gray1};
      border-radius: 5px;

      p {
        font-size: 0.9375rem;
        line-height: 0.9375rem;
        font-weight: 700;
        color: ${Colors.text.white};
      }
    }
  }
`;

export const CartItemQuantity = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;

  p {
    margin-left: 10px;
    margin-right: 10px;
  }

  svg:hover {
    cursor: pointer;
  }
`;

export const RemoveButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;
