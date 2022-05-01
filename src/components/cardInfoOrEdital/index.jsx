import { CardContainer } from "./style";
const CardInfoOrEdital = ({
  image,
  title,
  inscription,
  financy,
  tag,
  link,
}) => {
  return (
    <CardContainer>
      <img src={image} target="imagem ilustrativa" />
      <div id="info">
        <p>
          <span>{tag}</span>
        </p>
        <h1>{title}</h1>
        <div>
          <h5>Inscrições: </h5>
          &nbsp;
          <p> {inscription}</p>
        </div>
        <div>
          <h5>Financiado por:</h5>
          &nbsp;
          <p>{financy}</p>
        </div>
        <a href={link}>ver mais</a>
      </div>
    </CardContainer>
  );
};

export default CardInfoOrEdital;
