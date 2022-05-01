import {HiSearch} from 'react-icons/hi'
import { FilterContainer, Title, Input, Button, SearchContainer, CheckBoxList, Select } from './style'



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
                    placeholder={'Digite o nome da Instituição'}
                    type = {'text'}
                    value = {props.nameSearch}
                    onChange = {props.onChangeNameSearch}
                /> 
                {
                    props.page==='Oportunidades' && <Select onChange={props.onChangeStateSearch}>
                        
                        <option value={''} disabled>Selecione o estado</option>
                        <option value = {"AC"}>AC</option>
                        <option value = {'AL'}>AL</option>
                        <option value = {'AP'}>AP</option>
                        <option value = {'AM'}>AM</option>
                        <option value = {'BA'}>BA</option>
                        <option value = {'CE'}>CE</option>
                        <option value = {'DF'}>DF</option>
                        <option value = {'ES'}>ES</option>
                        <option value = {'GO'}>GO</option>
                        <option value = {'MA'}>MA</option>
                        <option value = {'MT'}>MT</option>
                        <option value = {'MS'}>MS</option>
                        <option value = {'MG'}>MG</option>
                        <option value = {'PA'}>PA</option>
                        <option value = {'PB'}>PB</option>
                        <option value = {'PR'}>PR</option>
                        <option value = {'PE'}>PE</option>
                        <option value = {'PI'}>PI</option>
                        <option value = {'RJ'}>RJ</option>
                        <option value = {'RN'}>RN</option>
                        <option value = {'RS'}>RS</option>
                        <option value = {'RS'}>RS</option>
                        <option value = {'RO'}>RO</option>
                        <option value = {'RR'}>RR</option>
                        <option value = {'SC'}>SC</option>
                        <option value = {'SP'}>SP</option>
                        <option value = {'SE'}>SE</option>
                        <option value = {'TO'}>TO</option>
                    </Select>

                }
                <Button onClick={props.onCLickSearch}><HiSearch /> Buscar</Button>
            </SearchContainer>
            </div>

            <CheckBoxList>
            {checkbox}
            </CheckBoxList>
        </FilterContainer>
    )
}

export default Filter