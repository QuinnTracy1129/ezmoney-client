import { useState } from "react";
import { MDBCol, MDBContainer } from "mdbreact";

const labels = ["PLAY", "JUETENG", "SCRATCH", "RIPA"];

const GamemodeCard = ({
  setDidClick,
  didClick,
  item,
  index,
  setActiveIndex,
  activeIndex,
}) => {
  const [overlay, setOverlay] = useState(true);

  return (
    <MDBCol
      onClick={() => {
        setDidClick(true);
        setActiveIndex(index);
      }}
      onMouseOver={() => setOverlay(false)}
      onMouseOut={() => setOverlay(true)}
      className="gamemode-card bg-danger z-depth-5 cursor-pointer px-0"
      style={{
        backgroundImage: `url(${item})`,
      }}
      md={didClick ? (activeIndex === index ? "9" : "1") : "3"}
    >
      {didClick ? (
        activeIndex === index ? (
          <MDBContainer fluid className="d-flex align-items-center h-100 px-0">
            <MDBContainer fluid className="gamemode-active">
              EZ {labels[index]}
            </MDBContainer>
          </MDBContainer>
        ) : (
          <>
            {overlay && <MDBContainer className="box-overlay" />}
            <MDBContainer
              style={{ bottom: overlay ? "-250px" : "0" }}
              className="gamemode-label"
            >
              EZ {labels[index]}
            </MDBContainer>
          </>
        )
      ) : (
        <>
          {overlay && <MDBContainer className="box-overlay" />}
          <MDBContainer
            style={{ bottom: overlay ? "-250px" : "0" }}
            className="gamemode-label"
          >
            EZ {labels[index]}
          </MDBContainer>
        </>
      )}
    </MDBCol>
  );
};

export default GamemodeCard;
