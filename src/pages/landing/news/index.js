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
  MDBTypography,
  MDBBadge,
} from "mdbreact";
import Title from "../../../components/title";
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
            <MDBRow
              key={`news-${index}`}
              className="bg-light z-depth-1 my-2"
              style={{ minHeight: "250px", height: "fit-content" }}
            >
              <MDBCol
                size="6"
                style={{
                  backgroundImage:
                    "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg)",
                }}
                className="bg-danger px-0 news-list-image"
              />
              <MDBCol size="6" className="d-flex align-items-center">
                <MDBContainer fluid>
                  <MDBTypography
                    tag="h1"
                    variant="h1-responsive"
                    className="mb-0"
                  >
                    New map games
                  </MDBTypography>
                  <MDBBadge color="dark">June 2022</MDBBadge>
                  <MDBTypography className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua...
                  </MDBTypography>
                  <div className="text-center">
                    <MDBBtn size="sm" color="warning">
                      Read more
                    </MDBBtn>
                  </div>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LandingNews;
