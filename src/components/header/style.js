import styled from "styled-components";
import { theme } from "../../themes";
console.log(theme);
export const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background: ${theme.green.secondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div {
    background-color: ${theme.white.primary};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: "12px";
  }
  img {
    width: 35px;
    height: 35px;
    position: absolute;
    bottom: 9px;
  }
  #logout {
    cursor: pointer;
  }
`;

export const StyledNavegation = styled.section`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: ${theme.white.primary};
  nav {
    cursor: pointer;
  }
`;
