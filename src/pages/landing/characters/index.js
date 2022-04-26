import { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBView,
} from "mdbreact";
import Characters from "../../../fakeDb/characters";
import Title from "../../../components/title";
import "./index.css";

const LandingCharacters = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    setActiveIndex(Math.floor(Math.random() * Characters.length));
  }, []);

  const handlePagination = action => {
    if (action) {
      if (activeIndex !== 0) {
        setActiveIndex(activeIndex - 1);
      }
    } else {
      if (activeIndex !== Characters.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }
  };
  return (
    <MDBContainer
      id="characters"
      fluid
      className="flexible-height landing-character-bg"
    >
      <Title text="Characters" />
      <MDBRow style={{ height: "75vh" }} className="text-white pb-3">
        <MDBCol
          className={
            Characters[activeIndex - 2]
              ? "d-flex align-items-center"
              : "offset-2"
          }
          size={Characters[activeIndex - 2] ? "2" : "0"}
        >
          {Characters[activeIndex - 2] && (
            <MDBView
              onClick={() =>
                Characters[activeIndex - 2] && setActiveIndex(activeIndex - 2)
              }
              className="character-preview cursor-pointer"
            >
              <img
                src={Characters[activeIndex - 2].image}
                className="img-fluid z-depth-4"
                alt="First slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
          )}
        </MDBCol>
        <MDBCol
          className={
            Characters[activeIndex - 1]
              ? "d-flex align-items-center"
              : "offset-2"
          }
          size={Characters[activeIndex - 1] ? "2" : "0"}
        >
          {Characters[activeIndex - 1] && (
            <MDBView
              onClick={() =>
                Characters[activeIndex - 1] && setActiveIndex(activeIndex - 1)
              }
              className="character-preview cursor-pointer"
            >
              <img
                src={Characters[activeIndex - 1].image}
                className="img-fluid character-preview"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
          )}
        </MDBCol>
        <MDBCol
          size="4"
          className="d-flex align-items-center h-100 position-relative"
        >
          <img
            src={Characters[activeIndex].image}
            className="character-preview mx-auto character-active-slide"
            alt="Active slide"
          />
          <MDBContainer fluid className="carousel-button">
            <MDBBtn
              onClick={() => handlePagination(true)}
              color="light"
              className="rounded-pill px-3 sm-none"
            >
              <MDBIcon icon="angle-double-left" />
            </MDBBtn>
            <MDBBtn color="light" className="rounded-pill bigW-50 py-3">
              {Characters[activeIndex].label}
            </MDBBtn>
            <MDBBtn
              onClick={() => handlePagination(false)}
              color="light"
              className="rounded-pill px-3 sm-none"
            >
              <MDBIcon icon="angle-double-right" />
            </MDBBtn>
          </MDBContainer>
        </MDBCol>
        {Characters[activeIndex + 1] && (
          <MDBCol className="d-flex align-items-center" size="2">
            <MDBView
              onClick={() => setActiveIndex(activeIndex + 1)}
              className="character-preview cursor-pointer"
            >
              <img
                src={Characters[activeIndex + 1].image}
                className="img-fluid character-preview"
                alt="Fourth slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
          </MDBCol>
        )}
        {Characters[activeIndex + 2] && (
          <MDBCol className="d-flex align-items-center" size="2">
            <MDBView
              onClick={() => setActiveIndex(activeIndex + 2)}
              className="character-preview cursor-pointer"
            >
              <img
                src={Characters[activeIndex + 2].image}
                className="img-fluid character-preview"
                alt="Fifth slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
          </MDBCol>
        )}
      </MDBRow>
    </MDBContainer>
  );
};

export default LandingCharacters;
