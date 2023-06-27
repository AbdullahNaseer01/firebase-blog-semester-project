import React from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center mt-5">
      <FaSpinner className="animate-spin text-primary" />
      <span className="ml-2">Loading...</span>
    </div>
  );
};

export default Spinner;
