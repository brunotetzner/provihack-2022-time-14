import styled from "styled-components";
import { theme } from "../../themes/index";
export const StyledArticle = styled.article`
  max-width: "100vw";
  display: flex;
  flex-direction: column;
  align-items: center;

  #quantity {
    width: 86%;
    display: flex;
    justify-content: space-between;
  }
  h5 {
    font-weight: 300;
    font-size: 22px;
  }
`;
export const Title = styled.h1`
  color: ${theme.secondary.darkPurple};
  font-weight: 700;
  font-size: 38px;
  width: 87%;
`;
