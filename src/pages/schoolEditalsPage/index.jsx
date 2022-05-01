import { StyledArticle, Title } from "./style";
import Header from "../../components/header";
import CardInfoOrEdital from "../../components/cardInfoOrEdital";
import Filter from "../../components/filterHeader";
import { useState, useEffect } from "react";

import { editalsMock } from "./editalsMock";

const SchoolEditalsPage = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [nameSearch, setNameSearch] = useState("");
  const [ongsToRender, setOngsToRender] = useState([]);

  const searchForName = () => {
    setOngsToRender(
      editalsMock.filter((ong) =>
        ong.title.toLowerCase().includes(nameSearch.toLowerCase())
      )
    );
  };

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

  const listOngsFilter =
    editalsMock &&
    editalsMock
      .filter((ong) => {
        return !check1 || ong.tag.includes("aberto");
      })
      .filter((ong) => {
        return !check2 || ong.tag.includes("fechado");
      });

  useEffect(() => {
    !nameSearch && setOngsToRender(editalsMock);
    (check1 || check2) && setOngsToRender(listOngsFilter);
  }, [nameSearch, check1, check2]);
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
          onCLickSearch={searchForName}
        />
        <div id="quantity">
          <Title>Escolas</Title>
          <h5>{ongsToRender.length} resultados</h5>
        </div>
        {ongsToRender && ongsToRender.length > 0 ? (
          ongsToRender.map((item) => (
            <CardInfoOrEdital
              image={item.image}
              title={item.title}
              inscription={item.inscription}
              financy={item.financy}
              tag={item.tag}
              link={item.link}
            />
          ))
        ) : (
          <p>Infelizmente não encontramos nenhum resultado :( </p>
        )}
      </StyledArticle>
    </>
  );
};

export default SchoolEditalsPage;
