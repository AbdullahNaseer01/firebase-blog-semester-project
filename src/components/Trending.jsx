import React from "react";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Trending = ({ blogs }) => {
  return (
    <>
      <div>
        <div className="blog-heading text-start py-2 mb-4">Trending</div>
      </div>
      <div className="owl-carousel owl-theme">
        {blogs?.map((item) => (
          <div className="item px-2" key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <div className="relative">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-4">
                  <span className="text-white">{item.title}</span>
                  <div className="text-white text-sm">
                    {item.author} - {item.timestamp.toDate().toDateString()}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trending;
