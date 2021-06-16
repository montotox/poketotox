import React from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./Pagination.scss";

export default function Pagination(props) {
  const { onClickLeft, onClickRight, page, total } = props;
  return (
    <div className="pagination">
      {page === 1 ? (
        <div />
      ) : (
        <button className="pagination__btn">
          <FaArrowCircleLeft
            className="pagination__btn-arrow"
            onClick={onClickLeft}
          />
        </button>
      )}
      <div>
        {page} de {total}
      </div>
      {page === total ? (
        <div />
      ) : (
        <button className="pagination__btn">
          <FaArrowAltCircleRight
            className="pagination__btn-arrow"
            onClick={onClickRight}
          />
        </button>
      )}
    </div>
  );
}
