import styled from "styled-components";
import { theme } from "../../themes";

export const CardContainer = styled.section`
  width: 87%;
  height: 288px;
  display: flex;
  flex-direction: row;
  background-color: ${theme.white.third};
  border-radius: 20px;
  margin-top: 32px;
  margin-bottom: 32px;

  img {
    width: 384px;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
  }
  span {
    font-weight: 400;
    background-color: ${theme.black.third};
    padding: 7px;

    border-radius: 13px;
    color: ${theme.white.primary};
    font-size: 12px;
  }
  h1 {
    font-size: 28px;
    color: ${theme.black.secondary};
  }
  div {
    display: flex;
  }
  h5 {
    font-size: 16px;
    color: ${theme.black.secondary};
    font-weight: 600;
  }
  p {
    font-size: 16px;
    font-weight: 300;

    color: ${theme.black.secondary};
  }

  #info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 22px;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 56px;
    background-color: ${theme.green.secondary};
    border: 0;
    border-radius: 10px;
    color: ${theme.white.primary};
    font-size: 21px;
    :hover {
      opacity: 90%;
      box-shadow: 1px 1px 5px black;
      cursor: pointer;
    }
  }
`;
