import styled from "styled-components";
import { theme } from "../../themes";

export const FilterContainer = styled.div`
    padding: 96px 120px 80px 120px;
`
export const Input = styled.input`
    width: 995px;
    font-size: 21px;
    padding: 22px;
    border: 1px solid #4D4D4D;
    box-sizing: border-box;
    border-radius: 10px;
    outline: none;
`
export const Select = styled.select`
    font-size: 21px;
    padding: 22px;
    border: 1px solid #4D4D4D;
    box-sizing: border-box;
    border-radius: 10px;
    outline: none;
`
export const Title = styled.h4`
    font-weight: 700;
    font-size: 38px;
    line-height: 120%;
    color: black !important;
    margin-bottom: 24px;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap:3.5px;
    font-weight: 400;
    font-size: 21px;
    line-height: 120%;
    padding: 22px 42px;
    border:none;
    outline: none;
    border-radius: 10px;
    background-color: ${theme.secondary.darkPurple};
    color: white;
`

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap:30px;
`

export const CheckBoxList = styled.div`
    display: flex;
    align-items: center;
    gap:38px;
    margin-top: 16px;
`