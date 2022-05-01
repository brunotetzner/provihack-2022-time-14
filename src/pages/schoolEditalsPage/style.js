import styled from "styled-components";
import { theme } from "../../themes/index";
export const StyledArticle = styled.article`
  max-width: "100vw";
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  color: ${theme.secondary.darkPurple};
  font-weight: 700;
  font-size: 38px;
  width: 87%;
`;
