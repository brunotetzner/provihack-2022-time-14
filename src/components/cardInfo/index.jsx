import { CardContainer } from "./style";
const CardInfo = ({ image, title, description, tag, link }) => {
  return (
    <CardContainer>
      <img src={image} alt="imagem ilustrativa" />
      <div id="info">
        <p>
          <span>{tag}</span>
        </p>
        <h1>{title}</h1>
        <div>
          <h5>Descrição: </h5>
          &nbsp;
          <p> {description}</p>
        </div>
        <a href={link}>ver mais</a>
      </div>
    </CardContainer>
  );
};

export default CardInfo;
