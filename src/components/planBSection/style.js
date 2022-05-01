import styled from "styled-components";
import bgImage from "../../assets/images/bgHomePlanB.svg"
import { theme } from "../../themes";

export const SectionPlanB = styled.div`
    width: 100%;
    height: 728px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(${bgImage});
    background-size: cover;
    background-position: 50% 100%;
    
`
export const Content = styled.div`
    margin-top: 95.2px;
    margin-left: 120px;
    width: 524px;
    height: 335px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h2 {
        color: ${theme.secondary.darkPurple};
        font-weight: 700;
        font-size: 67px;
        line-height: 110%;
    }

    h6 {
        color: ${theme.black.primary};
        font-weight: 400;
        font-size: 21px;
        line-height: 120%;

    }
`

export const SeeHowButton = styled.button`
    width: 200px;
    height: 56px;
    font-weight: 700;
    font-size: 21px;
    line-height: 120%;
    color: ${theme.white.secondary};
    background-color: ${theme.green.secondary};
    border-radius: 10px;
    border: none;
    cursor: pointer;

    :hover {
        background-color: ${theme.green.primary};
    }
`