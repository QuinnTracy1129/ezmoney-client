import { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBTypography,
  MDBBadge,
  MDBTabContent,
  MDBTabPane,
} from "mdbreact";
import Title from "../../../components/title";
import News from "../../../fakeDb/news";
import "./index.css";
import Card from "./card";

const LandingNews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMapping = () => {
    let cssIndex = -1;

    return News.map((item, index) => {
      if (activeIndex === index) {
        return (
          <MDBContainer
            key={`active-news-${index}`}
            className="news-highlight px-0 overflow-hidden rounded-circle d-flex align-items-center z-depth-3 border"
          >
            <img height="100%" width="auto" src={item.image} alt="Highlight" />
          </MDBContainer>
        );
      } else {
        cssIndex += 1;
        return (
          <MDBContainer
            key={`active-news-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`news-dot news-${
              cssIndex + 1
            } bg-primary rounded-circle px-0 overflow-hidden z-depth-3 border`}
          >
            <img
              height="100%"
              width="auto"
              className="cursor-pointer"
              src={item.image}
              alt="Highlight"
            />
          </MDBContainer>
        );
      }
    });
  };
  return (
    <MDBContainer id="news" fluid className="flexible-height">
      <Title text="News" />
      <MDBRow>
        <MDBCol lg="6" className="py-2">
          <MDBContainer className="news-highlight rounded-circle d-flex align-items-center px-0 position-relative">
            {handleMapping()}
          </MDBContainer>
        </MDBCol>
        <MDBCol lg="6" className="py-2 d-flex align-items-center">
          <MDBTabContent activeItem={activeIndex}>
            {News.map((item, index) => (
              <MDBTabPane
                key={`news-content-${index}`}
                tabId={index}
                role="tabpanel"
              >
                <Card item={item} />
              </MDBTabPane>
            ))}
          </MDBTabContent>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LandingNews;
