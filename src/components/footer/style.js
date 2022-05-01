import styled from "styled-components";
import { theme } from "../../themes";

export const FooterContainer = styled.footer`
    height: 203px;
    background-color: ${theme.black.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        color: ${theme.white.secondary};
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
    }
`