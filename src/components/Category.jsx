import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from 'react-icons/fi';

const Category = ({ catgBlogsCount }) => {
  return (
    <div className="widget ml-auto ">
      <div className="blog-heading text-start py-2 mb-4 text-2xl font-bold">Category</div>
      <div className="link-widget">
        <ul>
          {catgBlogsCount?.map((item, index) => (
            <li key={index}>
              <Link
                to={`/category/${item.category}`}
                className="block py-2 hover:text-blue-500"
                style={{ textDecoration: "none", color: "#777" }}
              >
                {item.category}
                <span>({item.count})</span>
                <FiChevronRight className="inline-block ml-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
