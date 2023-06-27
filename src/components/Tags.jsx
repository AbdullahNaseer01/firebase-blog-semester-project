import React from "react";
import { Link } from "react-router-dom";

const Tags = ({ tags }) => {
  return (
    <div>
      <div className="tags">
        {tags?.map((tag, index) => (
          <p className="tag" key={index}>
            <Link
              to={`/tag/${tag}`}
              className="text-black underline"
            >
              {tag}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tags;
