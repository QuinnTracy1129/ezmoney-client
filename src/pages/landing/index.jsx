import React from "react";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
} from "mdbreact";
import "./index.css";
import NavigationBar from "../../components/navbar";
import Footer from "../../components/footer";
import LandingHeader from "./header";
import LandingNews from "./news";
import LandingCharacters from "./characters";
import LandingModes from "./modes";

class LandingPage extends React.Component {
  render() {
    const leftLink = [
      {
        name: "NEWS",
        path: "news",
        dropdown: false,
      },
      {
        name: "CHARACTERS",
        path: "characters",
        dropdown: false,
      },
      {
        name: "Game",
        path: "game",
        dropdown: true,
        child: ["EZ PLAY", "EZ JUETENG", "EZ SCRATCH", "EZ RIPA"],
      },
      {
        name: "Support",
        path: "support",
        dropdown: true,
        child: ["Support 1", "Support 2", "Support 3"],
      },
    ];

    const rightLink = [
      {
        name: "Others",
        path: "others",
      },
      {
        name: "Login",
        path: "home",
      },
    ];
    return (
      <>
        <NavigationBar leftLink={leftLink} rightLink={rightLink} />
        <LandingHeader />
        <LandingNews />
        <LandingCharacters />
        <LandingModes />
        <Footer />
      </>
    );
  }
}

export default LandingPage;
