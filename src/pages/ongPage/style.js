import styled from "styled-components"
import backgroundOng from '../../assets/images/backgroundOngs.svg'
import { theme } from "../../themes"

export const OngPageContainer = styled.div`
    div{
        h4{
            color: ${theme.secondary.darkPurple};
            font-weight: 700;
            font-size: 38px;
            line-height: 120%;
            padding: 40px 127px;
        }
    }
`
export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 376px);
    grid-template-rows:auto;
    row-gap: 25px;
    column-gap: 25px;
    justify-content: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundOng});
    background-size: cover;
    padding: 112px 0px;
   

`

export const IconContainer = styled.span`
    font-size: 1.3rem;
`
