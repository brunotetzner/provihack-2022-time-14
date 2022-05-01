import styled from "styled-components";
import { theme } from "../../themes";
import logo from "../../assets/images/background-login.svg";
export const ContainerSignInPage = styled.article`
  width: 100vw;
  height: 100vh;
  background-image: url(${logo});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerSignIn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.white.secondary};
  border-radius: 15px;
  padding: 30px 50px 50px 50px;
  h1 {
    font-size: 38px;
    font-weight: 500;
    width: 265px;
    text-align: center;
    padding-bottom: 40px;
  }
  p {
    width: 265px;
    font-weight: 300;
    text-align: center;
    padding-bottom: 40px;
  }
`;

export const ButtonSchool = styled.button`
  width: 255px;
  height: 70px;
  padding-right: 15px;
  background-color: ${theme.green.secondary};
  border: 0;
  border-radius: 10px;
  font-size: 21px;
  color: ${theme.white.primary};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10px;

  :hover {
    cursor: pointer;
    background-color: ${theme.green.primary};
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    background-color: ${theme.white.primary};
    color: ${theme.green.secondary};
    border-radius: 50%;
  }
`;
export const ButtonOng = styled.button`
  width: 255px;
  height: 70px;
  padding-right: 15px;
  background-color: ${theme.secondary.yellow};
  border: 0;
  border-radius: 10px;
  font-size: 21px;
  color: ${theme.white.primary};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  :hover {
    cursor: pointer;
    background-color: #f9923d;
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    background-color: ${theme.black.primary};
    color: ${theme.secondary.yellow};
    border-radius: 50%;
  }
`;
