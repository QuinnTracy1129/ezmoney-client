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
        path: "dropdown",
        dropdown: true,
        child: ["Game 1", "Game 2", "Game 3"],
      },
      {
        name: "Support",
        path: "dropdown",
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
        {/* <Footer /> */}
      </>
    );
  }
}

export default LandingPage;
