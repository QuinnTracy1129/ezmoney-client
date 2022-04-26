import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
import Title from "../../../components/title";
import NewsCard from "./card";
import "./index.css";

const LandingNews = () => {
  return (
    <MDBContainer id="news" fluid className="flexible-height">
      <Title text="News" />
      <MDBRow>
        <MDBCol lg="6" className="py-2">
          <MDBCard reverse className="bigW-90 mx-auto">
            <MDBCardImage
              zoom
              cascade
              className="w-100"
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
              waves
            />
            <MDBCardBody cascade className="text-center">
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </MDBCardText>
              <MDBBtn href="#" size="sm" color="warning">
                Learn more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="6" className="py-2">
          {[null, null, null].map((item, index) => (
            <NewsCard key={`news-${index}`} />
          ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LandingNews;
