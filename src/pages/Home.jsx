import React, { Component } from "react";
import Header from "../components/header";
import "react-slideshow-image/dist/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Button from "../components/button";
import axios from "axios";
import { API_URL, currencyFormatter } from "../helper";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get(`${API_URL}/products?_limit=4&_expand=category`)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderProducts = () => {
    return this.state.data.map((val, index) => {
      return (
        <div key={index} className="col-md-3 p-2">
          <Card>
            <CardImg
              top
              width="100%"
              src={val.image}
              alt="Card image cap"
              height="200vh"
            />
            <CardBody>
              <CardTitle tag="h5">{val.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {currencyFormatter(val.harga)}
              </CardSubtitle>
              <Link
                to={{ pathname: `/product/${val.id}`, state: { product: val } }}
              >
                <Button className="w-100 py-2">Details</Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      );
    });
  };

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 1,
      speed: 500,
      dots: true,
    };
    return (
      <div>
        <Header />
        <div className="container mt-5">
          <Slider {...settings} autoplay>
            <div>
              <div className="px-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4EMFvnHsa2oXLxilffIgW5_Nr8pXxIP-RQ&usqp=CAU"
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
        <section className="shadow d-flex justify-content-center align-items-center mt-5 mb-5 py-5 garis garisbwh bgck">
          <h1>silahkan di cek barang rare nya mas</h1>
        </section>
        <section className="container mb-4">
          <div className="d-flex justify-content-end">
            <Link to="/products">
              <Button className="px-2 py-2 ">View All Products</Button>
            </Link>
          </div>
          <div className="row">{this.renderProducts()}</div>
        </section>
      </div>
    );
  }
}

export default Home;
