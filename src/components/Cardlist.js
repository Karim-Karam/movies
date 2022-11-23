import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Cardlist = ({ mov }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
            className="card_image"
            alt="kk"
          />
          <div className="card_overlay">
            <div className="overlay_text text-center p-2 w-100">
              <p> اسم الفيلم : {mov.original_title} </p>
              <p> تاريخ الاصدار : {mov.release_date}</p>
              <p> عدد التقييمات : {mov.vote_count}</p>
              <p> التقييم : {mov.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default Cardlist;
