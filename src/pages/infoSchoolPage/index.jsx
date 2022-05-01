import { StyledArticle, Title } from "./style";
import Header from "../../components/header";
import CardInfo from "../../components/cardInfo";
import Filter from "../../components/filterHeader";
import { useState, useEffect } from "react";

import { infoMock } from "./infoMock";
import Footer from "../../components/footer";

const InfoSchoolPage = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const [nameSearch, setNameSearch] = useState("");
  const [schoolsToRender, setSchoolsToRender] = useState([]);

  const searchForName = () => {
    setSchoolsToRender(
      infoMock.filter((ong) =>
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
  const onChangeCheck3 = (event) => {
    setCheck3(event.target.checked);
  };
  const onChangeCheck4 = (event) => {
    setCheck4(event.target.checked);
  };
  const onChangeNameSearch = (event) => {
    setNameSearch(event.target.value);
  };

  const filters = [check1, check2, check3, check4];
  const onChangeFilters = [
    onChangeCheck1,
    onChangeCheck2,
    onChangeCheck3,
    onChangeCheck4,
  ];
  const filtersCheckbox = [
    "captação de investimento",
    "financiamento",
    "monetização",
    "estratégia",
  ];

  const listOngsFilter =
    infoMock &&
    infoMock
      .filter((ong) => {
        return !check1 || ong.tag.includes("captação de investimento");
      })
      .filter((ong) => {
        return !check2 || ong.tag.includes("financiamento");
      })
      .filter((ong) => {
        return !check3 || ong.tag.includes("monetização");
      })
      .filter((ong) => {
        return !check4 || ong.tag.includes("estratégia");
      });

  useEffect(() => {
    !nameSearch && setSchoolsToRender(infoMock);
    (check1 || check2 || check3 || check4) &&
      setSchoolsToRender(listOngsFilter);
  }, [nameSearch, check1, check2, check3, check4]);
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
          page={"Material de apoio"}
          onCLickSearch={searchForName}
        />
        <div id="quantity">
          <Title>Escolas</Title>
          <h5>{schoolsToRender.length} resultados</h5>
        </div>
        {schoolsToRender && schoolsToRender.length > 0 ? (
          schoolsToRender.map((item) => (
            <CardInfo
              image={item.image}
              title={item.title}
              description={item.description}
              tag={item.tag}
              link={item.link}
            />
          ))
        ) : (
          <p>Infelizmente não encontramos nenhum resultado :( </p>
        )}
      </StyledArticle>
      <Footer />
    </>
  );
};

export default InfoSchoolPage;
