import { useEffect, useState } from "react";
import CardOngOrSchool from "../../components/cardOngOrSchool";
import Filter from "../../components/filterHeader";
import Header from "../../components/header";
import { CardsContainer, CardsHeader, Title, LoaderContainer, TextNotFound } from "./style";
import { getRequest, getRequestSearchFilter } from "../../services/requests";
import { Loader } from "../../components/Loader";
import Footer from "../../components/footer";

const SchoolPage = () => {

  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(false)
  const [check5, setCheck5] = useState(false)
  const [nameSearch, setNameSearch] = useState('')

  const [loading, setLoading] = useState(true)
  const [schools, setSchools] = useState({})

  useEffect(() => {
    !nameSearch && getRequest(setSchools, setLoading, 'schools')
  }, [nameSearch])

  const onChangeCheck1 = (event) => {
    setCheck1(event.target.checked)
  }
  const onChangeCheck2 = (event) => {
    setCheck2(event.target.checked)
  }
  const onChangeCheck3 = (event) => {
    setCheck3(event.target.checked)
  }
  const onChangeCheck4 = (event) => {
    setCheck4(event.target.checked)
  }
  const onChangeCheck5 = (event) => {
    setCheck5(event.target.checked)
  }
  const onChangeNameSearch = (event) => {
    setNameSearch(event.target.value)
  }
  const onChangeStateSearch = (event) => {
    getRequestSearchFilter(setSchools, setLoading, 'schools', null, event.target.value)
  }
  const onCLickSearch = () => {
    getRequestSearchFilter(setSchools, setLoading, 'schools', nameSearch)
  }

  const filters = [check1, check2, check3, check4, check5]
  const onChangeFilters = [onChangeCheck1, onChangeCheck2, onChangeCheck3, onChangeCheck4, onChangeCheck5]
  const filtersCheckbox = ['Reciclagem', 'Compostagem', 'Alimentos Orgânicos', 'Economia de água', 'Economia de energia']
  const listSchoolsFilter = schools.schoolsList && schools.schoolsList
    .filter((school) => {
      return !check1 || school.cause.includes('Reciclagem')
    })
    .filter((school) => {
      return !check2 || school.cause.includes('Compostagem')
    })
    .filter((school) => {
      return !check3 || school.cause.includes('Alimentos Orgânicos')
    })
    .filter((school) => {
      return !check4 || school.cause.includes('Economia de água')
    })
    .filter((school) => {
      return !check5 || school.cause.includes('Economia de energia')
    })
  return (
    <>
      <Header type="school" />
      <Filter
        filtersCheckbox={filtersCheckbox}
        filters={filters}
        onChangeFilters={onChangeFilters}
        onChangeNameSearch={onChangeNameSearch}
        onChangeStateSearch={onChangeStateSearch}
        nameSearch={nameSearch}
        page={'Oportunidades'}
        onCLickSearch={onCLickSearch}
      />
      {
        loading ?

          <LoaderContainer>
            <Loader />
          </LoaderContainer>
          :
          listSchoolsFilter && listSchoolsFilter.length > 0 ?
            <>
              <CardsHeader>
                <Title>Escolas</Title>
                <span>{listSchoolsFilter.length} resultados</span>

              </CardsHeader>

              <CardsContainer type="school">

                {
                  listSchoolsFilter.map((item, index) => {
                    return <CardOngOrSchool org={item} key={index} type="school" />
                  })
                }
              </CardsContainer>
            </>
            :
            <TextNotFound>Infelizmente não encontramos nenhuma Escola cadastrada com esse perfil :( </TextNotFound>
      }
      <Footer />
    </>
  );
};

export default SchoolPage;
