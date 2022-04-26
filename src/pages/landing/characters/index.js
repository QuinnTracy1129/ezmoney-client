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
  const [maxWidth, setMaxWidth] = useState(true);

  useEffect(() => {
    setActiveIndex(Math.floor(Math.random() * Characters.length));
    if (window.innerWidth <= 500) {
      setMaxWidth(false);
    } else {
      setMaxWidth(true);
    }
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
      <MDBRow className="text-white characters-carousel pb-3">
        {maxWidth && (
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
        )}
        <MDBCol
          className={
            Characters[activeIndex - 1]
              ? "d-flex align-items-center"
              : maxWidth
              ? "offset-2"
              : "offset-3"
          }
          size={Characters[activeIndex - 1] ? (maxWidth ? "2" : "3") : "0"}
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
          size={maxWidth ? "4" : "6"}
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
            <MDBBtn
              size={maxWidth ? "" : "sm"}
              color="light"
              className={`rounded-pill bigW-50 py-${maxWidth ? "3" : "2"}`}
            >
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
          <MDBCol
            className="d-flex align-items-center"
            size={maxWidth ? "2" : "3"}
          >
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
        {maxWidth && Characters[activeIndex + 2] && (
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
