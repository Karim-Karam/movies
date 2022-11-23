import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import logo from "../images/logo.WEBP";

const Searchbar = ({ search }) => {
  const onsearch = (word) => {
    search(word);
  };
  return (
    <div className="nav-style w-100">
      <Container>
        <Row>
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="kk" />
            </a>
          </Col>{" "}
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <input
                onChange={(e) => onsearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </div>
  );
};

export default Searchbar;
