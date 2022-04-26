import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import { ReactComponent as Logo } from "../../assets/image/logo.svg";

class NavigationBar extends Component {
  state = {
    collapseID: "",
    fontSize: "1vw",
  };

  componentDidMount() {
    if (window.innerWidth >= 1200) {
      this.setState({ fontSize: "1vw" });
    } else if (window.innerWidth >= 550) {
      this.setState({ fontSize: "17.5px" });
    } else {
      this.setState({ fontSize: "20px" });
    }
  }

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
        <MDBNavbar
          color="white"
          light
          expand="md"
          fixed="top"
          scrolling
          className="mt-2 p-0"
        >
          <MDBNavbarBrand className="py-0 position-relative logo-width">
            <Logo className="logo-width logo-icon" />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={this.toggleCollapse("mainNavbarCollapse")}
          />
          <MDBCollapse
            id="mainNavbarCollapse"
            isOpen={this.state.collapseID}
            className="navbar-buttons"
            navbar
          >
            <MDBNavbarNav left className="text-center">
              {this.props.leftLink?.map((link, index) => (
                <MDBNavItem
                  key={`navigationLeft-key-${index}`}
                  className="mx-2"
                >
                  {link.dropdown ? (
                    <MDBDropdown size="sm">
                      <MDBDropdownToggle
                        href={`#${link.path}`}
                        color="transparent"
                        className="z-depth-0 px-2 m-0"
                        style={{ fontSize: this.state.fontSize }}
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
                      style={{ fontSize: this.state.fontSize }}
                    >
                      <strong>{link.name}</strong>
                    </MDBBtn>
                  )}
                </MDBNavItem>
              ))}
            </MDBNavbarNav>
            <MDBNavbarNav
              right
              style={{ fontSize: this.state.fontSize }}
              className="text-center"
            >
              {this.props.rightLink?.map((link, index) => (
                <MDBNavItem
                  key={`navigationRight-key-${index}`}
                  className={`bg-${link.color} p-3`}
                >
                  <MDBNavLink
                    exact
                    to={`/${link.path}`}
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>
                      {link.name} {link.icon && <MDBIcon icon={link.icon} />}
                    </strong>
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
