import {HiSearch} from 'react-icons/hi'
import { FilterContainer, Title, Input, Button, SearchContainer, CheckBoxList } from './style'



const Filter = (props) => {
    const checkbox = props.filtersCheckbox.map((item, index)=> {
        return(
            <label key = {index}>
                <input 
                    type = {'checkbox'} 
                    checked = {props.filters[index]}
                    onChange = {props.onChangeFilters[index]}
                />
                {item}
            </label>
        )
    })

    return (
        <FilterContainer>
            <div>
                <Title>{props.page}</Title>
            <SearchContainer>
                <Input 
                    placeholder={'Busca por nome'}
                    type = {'text'}
                    value = {props.nameSearch}
                    onChange = {props.onChangeNameSearch}
                /> 
                <Button><HiSearch /> Buscar</Button>
            </SearchContainer>
            </div>

            <CheckBoxList>
            {checkbox}
            </CheckBoxList>
        </FilterContainer>
    )
}

export default Filter