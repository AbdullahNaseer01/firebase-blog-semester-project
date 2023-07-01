// import React, { useEffect } from "react";
// // import FontAwesome from "react-fontawesome";
// import { FaSearch } from 'react-icons/fa';
// import { BsArrowRight } from 'react-icons/bs';
// import { Link } from "react-router-dom";
// import { excerpt } from "../utility";

// const BlogSection = ({
//   id,
//   title,
//   description,
//   category,
//   imgUrl,
//   userId,
//   author,
//   timestamp,
//   user,
//   handleDelete,
// }) => {
//   return (
//     <div>
//       <div className="row pb-4" key={id}>
//         <div className="col-md-5">
//           <div className="hover-blogs-img">
//             <div className="blogs-img">
//               <img src={imgUrl} alt={title} />
//               <div></div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-7">
//           <div className="text-start">
//             <h6 className="category catg-color">{category}</h6>
//             <span className="title py-2">{title}</span>
//             <span className="meta-info">
//               <p className="author">{author}</p> -&nbsp; 
//               {timestamp.toDate().toDateString()}
//             </span>
//           </div>
//           <div className="short-description text-start">
//             {excerpt(description, 120)}
//           </div>
//           <Link to={`/detail/${id}`}>
//             <button className="btn btn-read">Read More</button>
//           </Link>
//           {user && user.uid === userId && (
//             <div style={{ float: "right" }}>
//               <FontAwesome
//                 name="trash"
//                 style={{ margin: "15px", cursor: "pointer" }}
//                 size="2x"
//                 onClick={() => handleDelete(id)}
//               />
//               <Link to={`/update/${id}`}>
//                 <FontAwesome
//                   name="edit"
//                   style={{ cursor: "pointer" }}
//                   size="2x"
//                 />
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
  
// };

// export default BlogSection;

import React, { useEffect } from "react";
import { FaSearch,FaTrash,FaEdit } from 'react-icons/fa';
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
  // const userId = user?.uid;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 shadow-lg md:mr-2 " key={id}>
        <div>
          <div className="hover-blogs-img">
            <div className="blogs-img">
              <img src={imgUrl} alt={title} />
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-start">
            <h6 className="category catg-color">{category}</h6>
            <span className="title py-2">{title}</span>
            <span className="meta-info">
              <p className="author">{author}</p> -&nbsp; 
              {timestamp.toDate().toDateString()}
            </span>
          </div>
          <div className="short-description text-start">
            {excerpt(description, 120)}
          </div>
          <Link to={`/detail/${id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Read More
              <BsArrowRight className="inline-block ml-2" />
            </button>
          </Link>
          { user && user.uid === userId &&   (
            <div className="flex justify-center md:ml-20">
              <FaTrash
                style={{ margin: "15px", cursor: "pointer" }}
                className="text-md"
                onClick={() => handleDelete(id)}
              />
              <Link to={`/edit/${id}`}>
                <FaEdit
                  style={{ cursor: "pointer" }}
                  className="text-md mt-4"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default BlogSection;
