import { StyledArticle } from "./style";
import Header from "../../components/header";
import CardInfoOrEdital from "../../components/cardInfoOrEdital";
const OngEditalsPage = () => {
  const mock = [
    {
      image:
        "http://images.squarespace-cdn.com/content/v1/5ce33debeef69b0001a96577/1561418326998-DGJ3TOKNO07GOMB2TCTG/greenworld_logo.png",
      title: "33º edital PPP-ECOS recebe inscrições",
      inscription: "20/04/2022 até 02/05/2022",
      financy: "Fundação Bradesco",
      tag: "aberto",
      link: "https://youtube.com",
    },
    {
      image:
        "http://images.squarespace-cdn.com/content/v1/5ce33debeef69b0001a96577/1561418326998-DGJ3TOKNO07GOMB2TCTG/greenworld_logo.png",
      title: "33º edital PPP-ECOS recebe inscrições",
      inscription: "20/04/2022 até 02/05/2022",
      financy: "Fundação Bradesco",
      tag: "aberto",
      link: "https://youtube.com",
    },
    {
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOtfWfF0TCKm_hRd-UBozFlEYkrYD_x_LK4hR8f=w1080-h608-p-no-v0",
      title: "33º edital PPP-ECOS recebe inscrições",
      inscription: "20/04/2022 até 02/05/2022",
      financy: "Fundação Bradesco",
      tag: "aberto",
      link: "https://youtube.com",
    },
  ];
  return (
    <>
      <Header type="ong" />
      <StyledArticle>
        {mock.map((item) => (
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

export default OngEditalsPage;
