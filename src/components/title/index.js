import { MDBCol, MDBRow, MDBTypography } from "mdbreact";
import { ReactComponent as Arrow } from "../../assets/image/landing/arrow.svg";

const Title = ({ text, arrows = true }) => {
  return (
    <MDBRow className="py-3">
      <MDBCol
        size={arrows ? "3" : "0"}
        className={`d-flex align-items-center px-0 offset-${
          arrows ? "1" : "4"
        }`}
      >
        {arrows && <Arrow className="w-100" />}
      </MDBCol>
      <MDBCol size="4" className="px-0 d-flex align-items-center">
        <MDBTypography className="mx-auto title-font py-0 my-0">
          {text}
        </MDBTypography>
      </MDBCol>
      {arrows && (
        <MDBCol size="3" className="d-flex align-items-center px-0">
          <Arrow style={{ transform: "rotate(180deg)" }} className="w-100" />
        </MDBCol>
      )}
    </MDBRow>
  );
};

export default Title;
