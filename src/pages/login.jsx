import React, { Component } from "react";
import Header from "../components/header";
import Button from "./../components/button";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import {
  LoginAction,
  LoginActionThunk,
  ResetActionthunk,
} from "./../redux/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Alert } from "reactstrap";
import Loader from "react-loader-spinner";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import FormControl from "@material-ui/core/FormControl";
import "react-slideshow-image/dist/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Style = {
  root: {
    "& label.Mui-focused": {
      color: "#0bbd9a",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#0bbd9a",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#0bbd9a",
      },
      "&:hover fieldset": {
        borderColor: "#0bbd9a",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0bbd9a",
      },
    },
  },
};

class Login extends Component {
  state = {
    isVisible: false,
    username: "",
    password: "",
  };

  toggle = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.username);
    const { username, password } = this.state;
    var data = {
      username: username,
      password,
    };
    this.props.LoginActionThunk(data);
  };

  render() {
    const { classes } = this.props;
    if (this.props.dataUser.islogin) {
      return <Redirect to="/" />;
    }
    // const settings = {
    //   className: "center",
    //   centerMode: true,
    //   infinite: true,
    //   centerPadding: "100px",
    //   slidesToShow: 1,
    //   speed: 500,
    //   dots: true,
    // };
    return (
      <div>
        <Header />
        <div className="container mt-4 py-4">
          <div className="row " style={{ height: "70vh" }}>
            <div className="col-md-7">
              <Slider autoplay>
                <div>
                  <div className="px-2">
                    <img
                      src="https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InNsaWRlci1pbWFnZXMvM2U4ZTM4M2UwMTI5ZThjZTYxZWUzMDFjYWY4NjU0MGUuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTUwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfX19"
                      alt="iklan1"
                      width="100%"
                      height="500px"
                    />
                  </div>
                </div>
                <div>
                  <div className="px-2">
                    <img
                      src="https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InNsaWRlci1pbWFnZXMvYjMxMjEyNjVkZjE0MGUxZTU2NzMxNmFhNzZiYmYxY2YuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTUwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfX19"
                      alt="iklan1"
                      width="100%"
                      height="500px"
                    />
                  </div>
                </div>
                <div>
                  <div className="px-2">
                    <img
                      src="https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InNsaWRlci1pbWFnZXMvMWU0NzgyNTUyZWM2OWMyMDkyNGIyYmMyZmJlMGViNzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTUwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfX19"
                      alt="iklan1"
                      width="100%"
                      height="500px"
                    />
                  </div>
                </div>
              </Slider>
            </div>
            <div className="rounded col-md-5 d-flex justify-content-center align-items-center shadow">
              <form onSubmit={this.onLoginSubmit} style={{ width: "50%" }}>
                <h1 style={{ color: "#0bbd9a" }}>Login</h1>
                <input
                  type="text"
                  placeholder="username"
                  className="form-control my-3 inp"
                  name="username"
                  onChange={this.onInputChange}
                  value={this.state.username}
                />
                <FormControl variant="outlined" className={classes.root}>
                  <InputLabel
                    className="warna"
                    htmlFor="outlined-adornment-password"
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={this.state.isVisible ? "text" : "password"}
                    value={this.state.password}
                    onChange={this.onInputChange}
                    name="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.toggle}
                        >
                          {this.state.isVisible ? (
                            <AiFillEye style={{ color: "#0bbd9a" }} />
                          ) : (
                            <AiFillEyeInvisible style={{ color: "#9f9f9f" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>
                <div className="mt-3 ">
                  {this.props.dataUser.loading ? (
                    <Loader type="Rings" color="#0bbd9a" />
                  ) : (
                    <Button submit={true} className="px-4 py-2 w-50 ">
                      Login
                    </Button>
                  )}
                </div>
                {this.props.dataUser.error ? (
                  <Alert color="danger mt-2">
                    {this.props.dataUser.error}{" "}
                    <span
                      className="float-right"
                      onClick={this.props.ResetActionthunk}
                    >
                      X
                    </span>
                  </Alert>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MaptstatetoProps = (state) => {
  return {
    dataUser: state.Auth,
  };
};

export default withStyles(Style)(
  connect(MaptstatetoProps, {
    LoginAction,
    LoginActionThunk,
    ResetActionthunk,
  })(Login)
);
