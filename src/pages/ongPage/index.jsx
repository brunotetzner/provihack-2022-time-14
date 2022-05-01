import CardOngOrSchool from "../../components/cardOngOrSchool";
import { useSearchParams } from "react-router-dom";
import { CardsContainer, Title, CardsHeader } from "./style";
import Header from "../../components/header";
import Filter from "../../components/filterHeader";
import { useState } from "react";
const user = [
  {
    name: "Luz do Saber",
    description:
      "A Escola Luz E Saber oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Banda Larga, Parque Infantil, Quadra Esportiva Coberta, Sala de Leitura, Pátio Coberto, Sala do Professor e Internet.",
    address: "Rua Miguel Calmon, 3239",
    state: "Porto Velho/RO",
    causes: ["Reciclagem", "Compostagem", "Economia de energia"],
    imgUrl: "",
    cellphone: "+55 (00) 0 0000-0000",
    email: "luzdosaber@email.com",
    socialMedia: ["https://www.facebook.com/"],
    type: "ong",
    profession: "Coordenadora de sestentabilidade",
    professional: "Txai Suruí",
  },
  {
    name: "Luz do Saber",
    description:
      "A Escola Luz E Saber oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Banda Larga, Parque Infantil, Quadra Esportiva Coberta, Sala de Leitura, Pátio Coberto, Sala do Professor e Internet.",
    address: "Rua Miguel Calmon, 3239",
    state: "Porto Velho/RO",
    causes: ["Compostagem", "Reciclagem", "Economia de água"],
    imgUrl: "",
    cellphone: "+55 (00) 0 0000-0000",
    email: "luzdosaber@email.com",
    socialMedia: ["https://www.facebook.com/"],
    type: "ong",
    profession: "Coordenadora de sestentabilidade",
    professional: "Txai Suruí",
  },
  {
    name: "Luz do Saber",
    description:
      "A Escola Luz E Saber oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Banda Larga, Parque Infantil, Quadra Esportiva Coberta, Sala de Leitura, Pátio Coberto, Sala do Professor e Internet.",
    address: "Rua Miguel Calmon, 3239",
    state: "Porto Velho/RO",
    causes: ["Economia de água", "Reciclagem", "Compostagem"],
    imgUrl: "",
    cellphone: "+55 (00) 0 0000-0000",
    email: "luzdosaber@email.com",
    socialMedia: ["https://www.facebook.com/"],
    type: "ong",
    profession: "Coordenadora de sestentabilidade",
    professional: "Txai Suruí",
  },
  {
    name: "Luz do Saber",
    description:
      "A Escola Luz E Saber oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Banda Larga, Parque Infantil, Quadra Esportiva Coberta, Sala de Leitura, Pátio Coberto, Sala do Professor e Internet.",
    address: "Rua Miguel Calmon, 3239",
    state: "Porto Velho/RO",
    causes: ["Alimentos Orgânicos", "Reciclagem", "Economia de energia"],
    imgUrl: "",
    cellphone: "+55 (00) 0 0000-0000",
    email: "luzdosaber@email.com",
    socialMedia: ["https://www.facebook.com/"],
    type: "escola",
    profession: "Coordenadora de sestentabilidade",
    professional: "Txai Suruí",
  },
  {
    name: "Outra",
    description:
      "A Escola Luz E Saber oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Banda Larga, Parque Infantil, Quadra Esportiva Coberta, Sala de Leitura, Pátio Coberto, Sala do Professor e Internet.",
    address: "Rua Miguel Calmon, 3239",
    state: "Porto Velho/RO",
    causes: ["Alimentos Orgânicos", "Economia de água", "Compostagem"],
    imgUrl: "",
    cellphone: "+55 (00) 0 0000-0000",
    email: "luzdosaber@email.com",
    socialMedia: ["https://www.facebook.com/"],
    type: "escola",
    profession: "Coordenadora de sestentabilidade",
    professional: "Txai Suruí",
  },
  {
    name: "Luz do Saber",
    description:
      "A Escola Luz E Saber oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Banda Larga, Parque Infantil, Quadra Esportiva Coberta, Sala de Leitura, Pátio Coberto, Sala do Professor e Internet.",
    address: "Rua Miguel Calmon, 3239",
    state: "Porto Velho/RO",
    causes: ["Economia de energia", "Economia de água", "Reciclagem"],
    imgUrl: "",
    cellphone: "+55 (00) 0 0000-0000",
    email: "luzdosaber@email.com",
    socialMedia: ["https://www.facebook.com/"],
    type: "escola",
    profession: "Coordenadora de sestentabilidade",
    professional: "Txai Suruí",
  },
];

const OngPage = () => {
  const [searchParams] = useSearchParams();

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
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
  const onChangeCheck5 = (event) => {
    setCheck5(event.target.checked);
  };
  const onChangeNameSearch = (event) => {
    setNameSearch(event.target.value);
  };

  const filters = [check1, check2, check3, check4, check5];
  const onChangeFilters = [
    onChangeCheck1,
    onChangeCheck2,
    onChangeCheck3,
    onChangeCheck4,
    onChangeCheck5,
  ];
  const filtersCheckbox = [
    "Reciclagem",
    "Compostagem",
    "Alimentos Orgânicos",
    "Economia de água",
    "Economia de energia",
  ];
  const listOngsFilter = user
    .filter((ong) => {
      return ong.name.toUpperCase().includes(nameSearch.toUpperCase());
    })
    .filter((ong) => {
      return !check1 || ong.causes.includes("Reciclagem");
    })
    .filter((ong) => {
      return !check2 || ong.causes.includes("Compostagem");
    })
    .filter((ong) => {
      return !check3 || ong.causes.includes("Alimentos Orgânicos");
    })
    .filter((ong) => {
      return !check4 || ong.causes.includes("Economia de água");
    })
    .filter((ong) => {
      return !check5 || ong.causes.includes("Economia de energia");
    });

  return (
    <>
      <Header type="ong" />

      <Filter
        filtersCheckbox={filtersCheckbox}
        filters={filters}
        onChangeFilters={onChangeFilters}
        onChangeNameSearch={onChangeNameSearch}
        nameSearch={nameSearch}
        page={"Oportunidades"}
      />

      <CardsHeader>
        <Title>ONG's</Title>
        <span>{listOngsFilter.length} resultados</span>
      </CardsHeader>
      <CardsContainer type="ong">
        {listOngsFilter.map((item, index) => {
          return <CardOngOrSchool user={item} key={index} type="ong" />;
        })}
      </CardsContainer>
    </>
  );
};

export default OngPage;
