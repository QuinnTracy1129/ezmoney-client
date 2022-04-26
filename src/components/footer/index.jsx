import {
  MDBBtn,
  MDBBtnGroup,
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdbreact";
import Teen from "../../assets/image/landing/footer/teen.jpg";

const Socials = [
  {
    icon: "facebook-f",
    link: "fb",
  },
  {
    icon: "instagram",
    link: "fb",
  },
  {
    icon: "twitter",
    link: "fb",
  },
  {
    icon: "telegram-plane",
    link: "fb",
  },
  {
    icon: "youtube",
    link: "fb",
  },
];

const Footer = () => (
  <MDBContainer id="support" fluid className="px-0">
    <MDBContainer fluid className="custom-footer">
      <MDBCol md="6" className="h-100 d-flex align-items-center">
        <MDBContainer className="text-center">
          <MDBTypography className="display-2 text-muted mb-0">
            JOIN IN THE
          </MDBTypography>
          <MDBTypography className="display-2 text-white">
            CUTE JOURNEY
          </MDBTypography>
          <MDBBtn outline color="light">
            play free now
          </MDBBtn>
        </MDBContainer>
      </MDBCol>
    </MDBContainer>
    <MDBFooter color="unique-color-dark">
      <MDBContainer fluid className="pt-3">
        <MDBRow className="text-center">
          <MDBCol size="12">
            <img src={Teen} className="img-fluid" alt="footer" />
          </MDBCol>
          <MDBCol size="12" className="mt-3">
            <MDBBtnGroup>
              {Socials.map((social, index) => (
                <MDBBtn
                  className="rounded-pill"
                  color="grey"
                  size="sm"
                  key={`social-${index}`}
                >
                  <MDBIcon icon={social.icon} fab size="2x" />
                </MDBBtn>
              ))}
            </MDBBtnGroup>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <p className="mb-0 pt-3 text-center">
        PlayStation Family Mark, "PS5 logo" and "PS4 logo" are registered
        trademarks or trademarks of Sony Interactive Entertainment Inc.
      </p>
      <p className="mb-0 text-center">
        Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic
        Online Services are trademarks and/or registered trademarks of Epic
        Games.
      </p>
      <p className="mb-0 pb-3 text-center">
        All other trademarks are the property of their respective owners.
      </p>
    </MDBFooter>
  </MDBContainer>
);

export default Footer;
