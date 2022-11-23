import styled from "styled-components";
import Colors from "../../themes/themeColors";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto;

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;
    gap: 20px;
    width: 80%;
    margin: 20px auto;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 20px;
      width: 250px;
      height: 328px;
      background-color: ${Colors.text.white};
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
      border-radius: 8px;

      @media (min-width: 500px) {
        width: 220px;
      }

      @media (min-width: 800px) {
        width: 250px;
      }

      img {
        align-self: center;
      }

      .itemInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 10px;

        .itemName {
          width: 50%;

          h2 {
            font-size: 1rem;
            line-height: 1.1875rem;
            font-weight: 400;
          }
        }

        .itemPrice {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40%;
          height: 30px;
          background-color: ${Colors.gray1};
          border-radius: 8px;

          span {
            font-size: 0.9375rem;
            line-height: 0.9375rem;
            font-weight: 700;
            color: ${Colors.text.white};

            @media (min-width: 500px) {
              font-size: 0.75rem;
            }

            @media (min-width: 800px) {
              font-size: 0.9375rem;
            }
          }
        }
      }

      p {
        padding: 0 10px;
        font-size: 0.75rem;
        line-height: 0.75rem;
        font-weight: 300;
        color: ${Colors.text.gray};
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 36px;
    background-color: ${Colors.primary};
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border: none;
    color: ${Colors.text.white};
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;

    :hover {
      filter: brightness(0.9);
    }
  }
`;
