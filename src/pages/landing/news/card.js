import {
  MDBContainer,
  MDBTypography,
  MDBBadge,
  MDBBtn,
  MDBAnimation,
} from "mdbreact";

const Card = ({ item }) => {
  return (
    <MDBAnimation type="fadeIn">
      <MDBContainer fluid>
        <MDBTypography tag="h1" variant="h1-responsive">
          {item.title}
        </MDBTypography>
        <MDBBadge color="dark" className="px-3 py-1">
          June 2022
        </MDBBadge>
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
