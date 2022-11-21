import styled from "styled-components";
import Colors from "../../themes/themeColors";

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 8px 0;

  p {
    font-size: 0.75rem;
    line-height: 0.9375rem;
    font-weight: 400;
    color: ${Colors.black};
  }
`;
