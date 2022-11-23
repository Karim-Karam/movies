import React from "react";
import Cardlist from "./Cardlist";
import PageNumber from "./PageNumber";
import { Row } from "react-bootstrap";

const Movieslist = ({ movies, getpage }) => {
  return (
    <Row className="mt-3">
      {" "}
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <Cardlist key={mov.id} mov={mov} />;
        })
      ) : (
        <h2> لا يوجد افلام </h2>
      )}
      <PageNumber getpage={getpage} />
    </Row>
  );
};

export default Movieslist;
