import React from "react";
import { useNavigate } from "react-router-dom";

const FeatureBlogs = ({ blogs, title }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="blog-heading text-start pt-3 py-2 mb-4 text-2xl font-bold">{title}</div>
      {blogs?.map((item) => (
        <div
          className="flex pb-3 cursor-pointer"
          key={item.id}
          onClick={() => navigate(`/detail/${item.id}`)}
        >
          <div className="flex-shrink-0">
            <img
              src={item.imgUrl}
              alt={item.title}
              className="most-popular-img"
            />
          </div>
          <div className="flex-grow pl-3">
            <div className="text-start most-popular-font">{item.title}</div>
            <div className="text-start most-popular-font-meta">
              {item.timestamp.toDate().toDateString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureBlogs;
