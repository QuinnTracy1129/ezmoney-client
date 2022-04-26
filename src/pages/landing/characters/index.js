import { MDBContainer } from "mdbreact";
import Title from "../../../components/title";
import "./index.css";

const LandingCharacters = () => {
  return (
    <MDBContainer
      id="characters"
      fluid
      className="flexible-height landing-character-bg"
    >
      <Title text="Characters" />
    </MDBContainer>
  );
};

export default LandingCharacters;
