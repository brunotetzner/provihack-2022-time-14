import styled from "styled-components"
import { theme } from "../../themes"

export const CardContainer = styled.div`
    color: ${theme.secondary.darkPurple};
    max-width: 376px; 
    min-height: 416px; 
`
export const CausesContainer = styled.span`
    background-color: ${theme.secondary.darkPurple};
    padding: 6px 15px;
    border-radius: 30px;
    font-size: 0.75rem;
    color: white;

`
export const IconContainer = styled.span`
display: flex;
justify-content: space-between;
    font-size: 1.5rem;
    margin-bottom: 24px;
    color:#000000;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 416px;
    p{
        font-weight: bold;
        font-size: 1rem;
    }
    >div{
        display: flex;
        flex-direction: column;
        gap: 45px;
        >div{
            display: flex;
            flex-direction: column;
            gap:10px;
        }
    }

`
export const Title = styled.h6`
    font-size: 21px;
    line-height: 120%;
`
export const BackHeader = styled.div`
    padding: 20px;
    background-color: ${theme.black.secondary};
    color:${theme.white.primary};
    width: 100%;
    border-radius: 27px 27px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const BackInfo = styled.div`
    margin-top: 8px;
    margin-bottom: 19px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85%;
    >p{
        font-weight: 400;
        line-height: 150%;
    }
    >div{
        div{
            display: flex;
        }
        p{
            font-weight: 400;
            line-height: 150%;
        }
        span{
            display: flex;
            align-items: center;
            font-weight: 400;
            font-size: 21px;
            line-height: 150%;
            margin-right: 8px;
        }
    }
`
export const Top = styled.p`
    font-weight: 400;
    font-size: 21px;
    line-height: 150%;
    margin-right: 8px;
`
export const Address = styled.div`
    margin-top: 24px;
    margin-bottom: 16px;
`
export const Mail = styled.div`
    margin-top: 20px;
`
export const Phone = styled.div`
    margin-top: 24px;
    margin-bottom: 16px;
`
export const CausesLisContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content: left;
    gap:8px;
    
`
export const Button = styled.button`
    cursor: pointer;
    border:none;
    outline: none;
    background-color: ${props => props.color==='school' ? theme.green.secondary : theme.secondary.yellow};
    color:  ${props => props.color==='school' ? theme.white.secondary : theme.black.secondary};
    padding: 20px;
    border-radius: 10px;
    /* margin-top: 32px; */
    align-self: left;
    font-size: 1.5rem;
    font-weight: 700;
    width: 100%;
    /* position: absolute;
    bottom:20px; */
    /* left: 0px; */
    :hover{

        box-shadow:1px 1px 1px black;
        background-color:${props => props.color==='school' ? theme.green.primary : '#B97100'};

    }

`

