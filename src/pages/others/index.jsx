import { MDBContainer } from "mdbreact";
import NavigationBar from "../../components/navbar";

const Others = () => {
  const Links = [
    {
      name: "Home",
      path: "",
    },
    {
      name: "Login",
      path: "home",
    },
  ];
  return (
    <>
      <NavigationBar links={Links} />
      <MDBContainer>WHAT DA FOK, im in others</MDBContainer>
    </>
  );
};

export default Others;
