import React, { useEffect } from "react";
// import FontAwesome from "react-fontawesome";
import { FaSearch } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { excerpt } from "../utility";

const BlogSection = ({
  id,
  title,
  description,
  category,
  imgUrl,
  userId,
  author,
  timestamp,
  user,
  handleDelete,
}) => {
  // return (
  //   <div>
  //     <div className="row pb-4" key={id}>
  //       <div className="col-md-5">
  //         <div className="hover-blogs-img">
  //           <div className="blogs-img">
  //             <img src={imgUrl} alt={title} />
  //             <div></div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col-md-7">
  //         <div className="text-start">
  //           <h6 className="category catg-color">{category}</h6>
  //           <span className="title py-2">{title}</span>
  //           <span className="meta-info">
  //             <p className="author">{author}</p> -&nbsp;
  //             {timestamp.toDate().toDateString()}
  //           </span>
  //         </div>
  //         <div className="short-description text-start">
  //           {excerpt(description, 120)}
  //         </div>
  //         <Link to={`/detail/${id}`}>
  //           <button className="btn btn-read">Read More</button>
  //         </Link>
  //         {user && user.uid === userId && (
  //           <div style={{ float: "right" }}>
  //             <FontAwesome
  //               name="trash"
  //               style={{ margin: "15px", cursor: "pointer" }}
  //               size="2x"
  //               onClick={() => handleDelete(id)}
  //             />
  //             <Link to={`/update/${id}`}>
  //               <FontAwesome
  //                 name="edit"
  //                 style={{ cursor: "pointer" }}
  //                 size="2x"
  //               />
  //             </Link>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="container-fluid pb-4 pt-4 px-4">
      <div className="container px-4">
        <div className="flex flex-wrap -mx-4">
          <Trending blogs={trendBlogs} />
          <div className="w-full md:w-8/12 px-4">
            <div className="text-start py-2 mb-4 text-xl font-bold">Daily Blogs</div>
            {blogs.length === 0 && location.pathname !== "/" && (
              <>
                <h4>
                  No Blog found with search keyword:{" "}
                  <strong>{searchQuery}</strong>
                </h4>
              </>
            )}
            {blogs?.map((blog) => (
              <BlogSection
                key={blog.id}
                user={user}
                handleDelete={handleDelete}
                {...blog}
              />
            ))}
  
            {!hide && (
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={fetchMore}>
                Load More <BsArrowRight />
              </button>
            )}
          </div>
          <div className="w-full md:w-4/12 px-4">
            <Search search={search} handleChange={handleChange} />
            <div className="text-start py-2 mb-4 text-xl font-bold">Tags</div>
            <Tags tags={tags} />
            <FeatureBlogs title={"Most Popular"} blogs={blogs} />
            <Category catgBlogsCount={categoryCount} />
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default BlogSection;
