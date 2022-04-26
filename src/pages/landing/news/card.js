import {
  MDBContainer,
  MDBTypography,
  MDBBadge,
  MDBBtn,
  MDBAnimation,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

const Card = ({ item, index }) => {
  return (
    <MDBAnimation type="zoomInDown">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="2" className="d-flex align-items-center">
            <MDBIcon
              icon={index === 0 ? "star" : "newspaper"}
              size="3x"
              className={`${index === 0 && "text-warning"} mx-auto`}
            />
          </MDBCol>
          <MDBCol>
            <MDBTypography
              tag="h1"
              variant="h1-responsive"
              className="font-weight-bold"
            >
              {item.title}
            </MDBTypography>
            <MDBBadge color="dark" className="px-3 py-1">
              June 2022
            </MDBBadge>
          </MDBCol>
        </MDBRow>

        <MDBTypography className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </MDBTypography>
        <div className="text-center">
          <MDBBtn size="sm" color="warning">
            Read more
          </MDBBtn>
        </div>
      </MDBContainer>
    </MDBAnimation>
  );
};

export default Card;
