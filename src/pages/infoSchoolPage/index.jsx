import Header from "../../components/header";
import { StyledArticle, Title } from "./style";
import Filter from "../../components/filterHeader";
import { useState } from "react";
import CardInfoOrEdital from "../../components/cardInfoOrEdital";
const InfoSchoolPage = () => {
  const mock = [
    {
      image:
        "http://images.squarespace-cdn.com/content/v1/5ce33debeef69b0001a96577/1561418326998-DGJ3TOKNO07GOMB2TCTG/greenworld_logo.png",
      title: "33º edital PPP-ECOS recebe inscrições",
      inscription: "20/04/2022 até 02/05/2022",
      financy: "Fundação Bradesco",
      tag: "estratégia",
      link: "https://youtube.com",
    },
    {
      image:
        "http://images.squarespace-cdn.com/content/v1/5ce33debeef69b0001a96577/1561418326998-DGJ3TOKNO07GOMB2TCTG/greenworld_logo.png",
      title: "33º edital PPP-ECOS recebe inscrições",
      inscription: "20/04/2022 até 02/05/2022",
      financy: "Fundação Bradesco",
      tag: "estratégia",
      link: "https://youtube.com",
    },
    {
      image:
        "http://images.squarespace-cdn.com/content/v1/5ce33debeef69b0001a96577/1561418326998-DGJ3TOKNO07GOMB2TCTG/greenworld_logo.png",
      title: "33º edital PPP-ECOS recebe inscrições",
      inscription: "20/04/2022 até 02/05/2022",
      financy: "Fundação Bradesco",
      tag: "estratégia",
      link: "https://youtube.com",
    },
    {
      image:
        "http://images.squarespace-cdn.com/content/v1/5ce33debeef69b0001a96577/1561418326998-DGJ3TOKNO07GOMB2TCTG/greenworld_logo.png",
      title: "33º edital PPP-ECOS recebe inscrições",
      inscription: "20/04/2022 até 02/05/2022",
      financy: "Fundação Bradesco",
      tag: "captação de investimento",
      link: "https://youtube.com",
    },
    {
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOtfWfF0TCKm_hRd-UBozFlEYkrYD_x_LK4hR8f=w1080-h608-p-no-v0",
      title: "33º edital PPP-ECOS recebe inscrições",
      inscription: "20/04/2022 até 02/05/2022",
      financy: "Fundação Bradesco",
      tag: "financiamento",
      link: "https://youtube.com",
    },
    {
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOtfWfF0TCKm_hRd-UBozFlEYkrYD_x_LK4hR8f=w1080-h608-p-no-v0",
      title: "33º edital PPP-ECOS recebe inscrições",
      inscription: "20/04/2022 até 02/05/2022",
      financy: "Fundação Bradesco",
      tag: "financiamento",
      link: "https://youtube.com",
    },
    {
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOtfWfF0TCKm_hRd-UBozFlEYkrYD_x_LK4hR8f=w1080-h608-p-no-v0",
      title: "33º edital PPP-ECOS recebe inscrições",
      inscription: "20/04/2022 até 02/05/2022",
      financy: "Fundação Bradesco",
      tag: "financiamento",
      link: "https://youtube.com",
    },
    {
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOtfWfF0TCKm_hRd-UBozFlEYkrYD_x_LK4hR8f=w1080-h608-p-no-v0",
      title: "33º edital PPP-ECOS recebe inscrições",
      inscription: "20/04/2022 até 02/05/2022",
      financy: "Fundação Bradesco",
      tag: "financiamento",
      link: "https://youtube.com",
    },
    {
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOtfWfF0TCKm_hRd-UBozFlEYkrYD_x_LK4hR8f=w1080-h608-p-no-v0",
      title: "33º edital PPP-ECOS recebe inscrições",
      inscription: "20/04/2022 até 02/05/2022",
      financy: "Fundação Bradesco",
      tag: "financiamento",
      link: "https://youtube.com",
    },
  ];

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [nameSearch, setNameSearch] = useState("");

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
    "reciclagem",
    "captação de investimento",
    "monetização",
    "estratégia",
  ];
  const listOngsFilter = mock
    .filter((ong) => {
      return ong.title.toUpperCase().includes(nameSearch.toUpperCase());
    })
    .filter((ong) => {
      return !check1 || ong.tag.includes("reciclagem");
    })
    .filter((ong) => {
      return !check2 || ong.tag.includes("captação de investimento");
    })
    .filter((ong) => {
      return !check3 || ong.tag.includes("monetização");
    })
    .filter((ong) => {
      return !check4 || ong.tag.includes("estratégia");
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
          page={"Material de apoio"}
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

export default InfoSchoolPage;
