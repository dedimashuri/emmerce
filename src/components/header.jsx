import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./header.css";
import { FaRobot, FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { LogoutAction } from "../redux/actions";
class Header extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  onLogoutClick = () => {
    localStorage.removeItem("id");
    this.props.LogoutAction();
    toast.success("Logout Berhasil", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <div>
        <Navbar className="header-bg px-5 shadow " light expand="md">
          <NavbarBrand href="/">
            <span
              className="font-weight-bold header-brand"
              style={{ color: "#0bbd9a" }}
            >
              <FaRobot /> TOYS BOY
            </span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.props.dataUser.islogin ? (
                <>
                  {this.props.dataUser.role === "admin" ? null : (
                    <>
                      <Link to="/history">
                        <NavItem className="py-2 mx-2">History</NavItem>
                      </Link>
                      <NavItem className="py-2 mx-2">
                        <Link to="/cart">
                          <FaCartArrowDown
                            style={{ fontSize: "25px", color: "black" }}
                          />
                        </Link>
                        {this.props.dataUser.cart.length ? (
                          <Badge
                            style={{
                              position: "relative",
                              bottom: 10,
                              right: 5,
                              backgroundColor: "#fcd13d",
                            }}
                            className="px-1 rounded-circle text-center"
                          >
                            {this.props.dataUser.cart.length}
                          </Badge>
                        ) : null}
                      </NavItem>
                    </>
                  )}
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                      {this.props.dataUser.username}
                    </DropdownToggle>
                    <DropdownMenu right>
                      {this.props.dataUser.role === "admin" ? (
                        <Link to="/manageProd" className="normal-link">
                          <DropdownItem>Manage Product</DropdownItem>
                        </Link>
                      ) : null}
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />

                      <DropdownItem onClick={this.onLogoutClick}>
                        LogOut
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
              ) : (
                <>
                  <NavItem className="mx-2">
                    <Link to="/login">
                      <button className=" bg-tombol rounded px-4 py-2 font-weight-bold">
                        Login
                      </button>
                    </Link>
                  </NavItem>
                  <NavItem className="mx-2">
                    <Link to="/register">
                      <button className="header-login rounded px-4 py-2 font-weight-bold">
                        Sign Up
                      </button>
                    </Link>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const MaptstatetoProps = (state) => {
  return {
    dataUser: state.Auth,
  };
};

export default connect(MaptstatetoProps, { LogoutAction })(Header);
