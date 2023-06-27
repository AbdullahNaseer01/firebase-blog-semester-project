import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, handlePageChange, noOfPages }) => {
  return (
    <div>
      <div className="row mx-0">
        <div className="col-12 text-center pb-4 pt-4">
          <button
            className="btn_mange_pagging"
            disabled={currentPage === 1}
            onClick={() => handlePageChange("Prev")}
          >
            <IoIosArrowBack /> Prev
          </button>
          <span className="btn_pagging">{currentPage}</span>
          <button
            className="btn_mange_pagging"
            disabled={currentPage === noOfPages}
            onClick={() => handlePageChange("Next")}
          >
            Next <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
