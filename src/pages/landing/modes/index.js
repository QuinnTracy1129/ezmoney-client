import { useState } from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import Title from "../../../components/title";
import Header from "../../../fakeDb/header";
import GamemodeCard from "./card";
import "./index.css";

const LandingModes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [didClick, setDidClick] = useState(false);

  return (
    <MDBContainer id="game" fluid className="flexible-height">
      <Title text="Game Modes" />
      <MDBRow>
        {Header.map((item, index) => (
          <GamemodeCard
            didClick={didClick}
            setDidClick={setDidClick}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            index={index}
            item={item}
            key={`gamemode-${index}`}
          />
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default LandingModes;
