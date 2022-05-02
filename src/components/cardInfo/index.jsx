import { CardContainer, Description } from "./style";
const CardInfo = ({ image, title, description, tag, link }) => {
  return (
    <CardContainer>
      <img src={image} alt="imagem ilustrativa" />
      <div id="info">
        <p>
          <span>{tag}</span>
        </p>
        <h1>{title}</h1>
        <Description>
          <h5>Descrição: </h5>
          <p> {description}</p>
        </Description>
        <a href={link}>ver mais</a>
      </div>
    </CardContainer>
  );
};

export default CardInfo;
