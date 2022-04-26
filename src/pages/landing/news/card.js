import {
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBBadge,
  MDBBtn,
  MDBView,
} from "mdbreact";

const NewsCard = () => {
  return (
    <MDBRow className="border my-3 z-depth-1 mx-1 rounded">
      <MDBCol md="4">
        <MDBView hover zoom waves cascade>
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
          />
        </MDBView>
      </MDBCol>
      <MDBCol md="8">
        <MDBTypography tag="h1" variant="h1-responsive" className="mb-0">
          Game title
        </MDBTypography>
        <MDBBadge color="dark" className="py-2 px-3">
          June 2022
        </MDBBadge>
        <MDBTypography className="mb-0 my-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </MDBTypography>
        <div className="text-center">
          <MDBBtn color="warning" size="sm">
            Read more
          </MDBBtn>
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default NewsCard;
