import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";

class NavigationBar extends Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: "" });
  };

  handleLogout = () => {
    window.location.replace("/");
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    return (
      <>
        <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling>
          <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
            {/* <Logo style={{ height: "2.5rem", width: "2.5rem" }} /> */}
            <strong className="align-middle">MDB React</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={this.toggleCollapse("mainNavbarCollapse")}
          />
          <MDBCollapse
            id="mainNavbarCollapse"
            isOpen={this.state.collapseID}
            navbar
          >
            <MDBNavbarNav right>
              {this.props.links?.map((link, index) => (
                <MDBNavItem key={`navigationBar-key-${index}`}>
                  <MDBNavLink
                    exact
                    to={`/${link.path}`}
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>{link.name}</strong>
                  </MDBNavLink>
                </MDBNavItem>
              ))}
              {this.props.logout && (
                <MDBNavItem
                  className="nav-link text-white cursor-pointer"
                  onClick={this.handleLogout}
                >
                  <strong>Logout</strong>
                </MDBNavItem>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        {this.state.collapseID && overlay}
      </>
    );
  }
}

export default NavigationBar;
