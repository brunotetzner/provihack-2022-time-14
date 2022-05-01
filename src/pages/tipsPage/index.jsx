import Footer from "../../components/footer";
import HeaderHome from "../../components/headerHome";
import { Bike, Drop, Grape, Lamp, Paper, Plastic, Recycling, TipItem, TipPageContainer, TipsGrid, TipsSection, Trash, Tree } from "./style";
import { GiWaterDrop, GiFruitBowl, GiDutchBike } from 'react-icons/gi';
import { VscTrash } from 'react-icons/vsc';
import { RiSeedlingFill, RiLightbulbLine } from 'react-icons/ri';
import { GrNote } from 'react-icons/gr';
import { MdRecycling } from 'react-icons/md';
import { BsCupStraw } from 'react-icons/bs';

const TipsPage = () => {
  return (
    <>
      <TipsSection>
      <HeaderHome />
        <h4>10 atitudes sustentáveis para um mundo melhor</h4>
        <TipsGrid>
          <TipItem>
            <Drop>
              <GiWaterDrop />
            </Drop>
            <p>Gaste menos água</p>
          </TipItem>

          <TipItem>
            <Trash>
              <VscTrash />
            </Trash>
            <p>Reduza e recicle o seu lixo</p>
          </TipItem>

          <TipItem>
            <Paper>
              <GrNote />
            </Paper>
            <p>Reduza as impressões e utilize os dois lados da folha</p>
          </TipItem>

          <TipItem>
            <Recycling>
              <MdRecycling />
            </Recycling>
            <p>Faça compras sustentáveis</p>
          </TipItem>

          <TipItem>
            <Lamp>
              <RiLightbulbLine />
            </Lamp>
            <p>Apague as luzes e economize energia</p>
          </TipItem>

          <TipItem>
            <Plastic>
              <BsCupStraw />
            </Plastic>
            <p>Reduza os descartáveis</p>
          </TipItem>

          <TipItem>
            <Grape>
              <GiFruitBowl />
            </Grape>
            <p>Não desperdice alimentos</p>
          </TipItem>

          <TipItem>
            <Tree>
              <RiSeedlingFill />
            </Tree>
            <p>Plante seus alimentos</p>
          </TipItem>

          <TipItem>
            <Bike>
              <GiDutchBike />
            </Bike>
            <p>Menos carros, mais bikes</p>
          </TipItem>
        </TipsGrid>
      </TipsSection>
    </>
  );
};

export default TipsPage;
