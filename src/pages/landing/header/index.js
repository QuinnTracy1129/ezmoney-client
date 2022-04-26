import { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtnGroup,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import Header from "../../../fakeDb/header";
import Google from "../../../assets/image/landing/header/google.png";
import Apk from "../../../assets/image/landing/header/apk.png";
import "./index.css";

const LandingHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let time = 0;
    setInterval(() => {
      if (time < Header.length - 1) {
        time++;
        setActiveIndex(time);
      } else {
        time = 0;
        setActiveIndex(0);
      }
    }, 5000);
  }, []);

  return (
    <MDBContainer className="landing-header-bg flexible-height px-0" fluid>
      <img src={Header[activeIndex]} className="img-fluid w-100" />

      <MDBContainer fluid className="header-dots text-center">
        <MDBRow>
          <MDBCol size="6" className="text-right">
            <MDBBtn className="z-depth-0 p-0" color="transparent">
              <img src={Google} className="header-dl" alt="Google Play" />
            </MDBBtn>
          </MDBCol>
          <MDBCol size="6" className="text-left">
            <MDBBtn className="z-depth-0 p-0" color="transparent">
              <img src={Apk} className="header-dl" alt="Application" />
            </MDBBtn>
          </MDBCol>
          <MDBCol size="12" className="mt-2">
            <MDBBtnGroup>
              {Header.map((item, index) => (
                <MDBBtn
                  color="transparent"
                  key={`${item}-${index}`}
                  className="p-0 z-depth-0 mx-2 mb-0 rounded-circle text-dark"
                  onClick={() => setActiveIndex(index)}
                >
                  <MDBIcon
                    className="header-icon"
                    icon={activeIndex === index ? "dot-circle" : "circle"}
                  />
                </MDBBtn>
              ))}
            </MDBBtnGroup>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
};

export default LandingHeader;
