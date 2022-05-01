import styled from "styled-components";
import BgImage from "../../assets/images/aboutUs.svg"
import { theme } from "../../themes";


export const SectionAboutUs = styled.div`
    width: 100%;
    height: 665px;
    background: linear-gradient(270.15deg, rgba(0, 0, 0, 0.2) -0.31%, rgba(0, 0, 0, 0) 99.26%), url(${BgImage});
    background-size: cover;
    padding-top: 174px;

    display: flex;
    flex-direction: column;
`
export const Content = styled.div`
    height: 346px;
    width: 401px;
    align-self: flex-end;
    padding-right: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const Text = styled.div`
    height: 256px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h3 {
        color: ${theme.white.primary};
        font-weight: 700;
        font-size: 51px;
        line-height: 110%;
    }

    h6 {
        color: ${theme.white.primary};
        font-weight: 400;
        font-size: 21px;
        line-height: 150%;
    }
`

export const Button = styled.button`
    cursor: pointer;
    border:none;
    outline: none;
    background-color: ${theme.secondary.yellow};
    color:  ${theme.black.secondary};
    padding: 16px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 21px;
    line-height: 120%;
    width: 246px;
    height: 56px;

    :hover{
        background-color:${'#B97100'};
    }
`