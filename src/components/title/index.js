import { MDBTypography } from "mdbreact";

const Title = ({ text }) => {
  return (
    <MDBTypography className="text-center title-font py-0 my-0">
      {text}
    </MDBTypography>
  );
};

export default Title;
