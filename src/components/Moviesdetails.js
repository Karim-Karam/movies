import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "../App.css";

const Moviesdetails = () => {
  const param = useParams();
  const [movie, setmovie] = useState([]);

  const getmoviedetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=46a30e7e9b069d41071b00fc25455377&&language=ar`
    );
    setmovie(res.data);
  };
  useEffect(() => {
    getmoviedetails();
  }, []);

  return (
    <div>
      <Row className="justfiy-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-details d-flex align-items-center">
            <img
              className="image-mov "
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt="not found"
            />
            <div className="justfiy-content-center text-center mx-auto">
              <p className="card-text-details border-bottom">
                اسم الفيلم: {movie.original_title}{" "}
              </p>{" "}
              <p className="card-text-details border-bottom">
                تاريخ الفيلم: {movie.release_date}{" "}
              </p>{" "}
              <p className="card-text-details border-bottom">
                عدد المقيميين: {movie.vote_count}{" "}
              </p>{" "}
              <p className="card-text-details border-bottom">
                التقييم: {movie.vote_average}{" "}
              </p>{" "}
              <Row className="justfiy-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1">
                  <a
                    href={movie.homepage}
                    style={{
                      backgroundColor: "rgb(178, 37, 37)",
                      border: "none",
                    }}
                    className="btn btn-primary m-2 "
                  >
                    {" "}
                    مشاهدة الفيلم{" "}
                  </a>{" "}
                  <Link to="/">
                    <button
                      style={{
                        backgroundColor: "rgb(178, 37, 37)",
                        border: "none",
                      }}
                      className="btn btn-primary m-2 "
                    >
                      عوده للصفحة الرئيسية{" "}
                    </button>{" "}
                  </Link>{" "}
                </Col>{" "}
              </Row>{" "}
            </div>{" "}
          </div>{" "}
        </Col>{" "}
      </Row>{" "}
      <Row className="justfiy-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story  ">
            <div className="text-end p-4">
              <p className="card-text-details border-bottom"> القصة: </p>{" "}
            </div>{" "}
            <div className="text-end p-4">
              <p className="card-text-details border-bottom">
                {" "}
                {movie.overview}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </Col>{" "}
      </Row>{" "}
    </div>
  );
};
export default Moviesdetails;
