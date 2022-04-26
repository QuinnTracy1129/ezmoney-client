import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBBtn,
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
        <MDBNavbar color="white" light expand="md" fixed="top" scrolling>
          <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
            {/* <Logo style={{ height: "2.5rem", width: "2.5rem" }} /> */}
            <strong className="align-middle">EzMoney</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={this.toggleCollapse("mainNavbarCollapse")}
          />
          <MDBCollapse
            id="mainNavbarCollapse"
            isOpen={this.state.collapseID}
            navbar
          >
            <MDBNavbarNav left>
              {this.props.leftLink?.map((link, index) => (
                <MDBNavItem key={`navigationLeft-key-${index}`}>
                  {link.dropdown ? (
                    <MDBDropdown size="sm">
                      <MDBDropdownToggle
                        href={`#${link.path}`}
                        color="transparent"
                        className="z-depth-0 px-2 m-0"
                        style={{ fontSize: "15px" }}
                      >
                        <strong>{link.name}</strong>
                        <MDBIcon icon="caret-down" className="ml-2" />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic>
                        {link.child.map((item, index) => (
                          <MDBDropdownItem key={`${link.name}-${index}`}>
                            {item}
                          </MDBDropdownItem>
                        ))}
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  ) : (
                    <MDBBtn
                      size="sm"
                      color="transparent"
                      className="z-depth-0 px-2 m-0"
                      href={`#${link.path}`}
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      style={{ fontSize: "15px" }}
                    >
                      <strong>{link.name}</strong>
                    </MDBBtn>
                  )}
                </MDBNavItem>
              ))}
            </MDBNavbarNav>
            <MDBNavbarNav right>
              {this.props.rightLink?.map((link, index) => (
                <MDBNavItem key={`navigationRight-key-${index}`}>
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
