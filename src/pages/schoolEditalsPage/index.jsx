import { StyledArticle, Title } from "./style";
import Header from "../../components/header";
import CardInfoOrEdital from "../../components/cardInfoOrEdital";
import Filter from "../../components/filterHeader";
import { useState } from "react";
import { editalsMock } from "./editalsMock";
const SchoolEditalsPage = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const [nameSearch, setNameSearch] = useState("");

  const onChangeCheck1 = (event) => {
    setCheck1(event.target.checked);
  };
  const onChangeCheck2 = (event) => {
    setCheck2(event.target.checked);
  };
  const onChangeNameSearch = (event) => {
    setNameSearch(event.target.value);
  };

  const filters = [check1, check2];
  const onChangeFilters = [onChangeCheck1, onChangeCheck2];
  const filtersCheckbox = ["aberto", "fechado"];
  const listOngsFilter = editalsMock
    .filter((school) => {
      return school.title.toUpperCase().includes(nameSearch.toUpperCase());
    })
    .filter((school) => {
      return !check1 || school.tag.includes("aberto");
    })
    .filter((school) => {
      return !check2 || school.tag.includes("fechado");
    });

  return (
    <>
      <Header type="school" />
      <StyledArticle>
        <Filter
          filtersCheckbox={filtersCheckbox}
          filters={filters}
          onChangeFilters={onChangeFilters}
          onChangeNameSearch={onChangeNameSearch}
          nameSearch={nameSearch}
          page={"Editais"}
        />
        <Title>Escolas</Title>

        {listOngsFilter.map((item) => (
          <CardInfoOrEdital
            image={item.image}
            title={item.title}
            inscription={item.inscription}
            financy={item.financy}
            tag={item.tag}
            link={item.link}
          />
        ))}
      </StyledArticle>
    </>
  );
};

export default SchoolEditalsPage;
