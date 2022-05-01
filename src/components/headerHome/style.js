import styled from "styled-components";
import { theme } from "../../themes";

export const Header = styled.header`
    max-width: 100vw;
    height: 97.8px;
    border: thin black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 129.5px;
    padding-right: 120px;

    img {
        width: 61.57px;
        height: 77.8px;
    }
`

export const LoginButton = styled.button`
    width: 92px;
    height: 56px;
    background-color: transparent;
    color: ${theme.black.third};
    font-weight: 400;
    font-size: 21px;
    line-height: 120%;
    border: 1px solid ${theme.black.primary};
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;

    :hover {
        border: 1px solid ${theme.black.third};
    }
`

export const JoinButton = styled.button`
    width: 176px;
    height: 56px;
    font-weight: 700;
    font-size: 21px;
    line-height: 120%;
    color: ${theme.white.secondary};
    background-color: ${theme.green.secondary};
    border-radius: 10px;
    border: none;
    margin-left: 28px;
    cursor: pointer;

    :hover {
        background-color: ${theme.green.primary};
    }
`