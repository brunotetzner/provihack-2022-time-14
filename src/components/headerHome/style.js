import styled from "styled-components";
import { theme } from "../../themes";

export const Header = styled.header`
    width: 100%;
    height: 97.8px;
    border: thin black;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        padding-left: 129.5px;
        width: 61.57px;
        height: 77.8px;
    }
`

export const ButtonsContainer = styled.div`
    padding-right: 120px;
`

export const LoginButton = styled.button`
    width: 120px;
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
