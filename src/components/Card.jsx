import React from "react";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";
import { BiChat } from 'react-icons/bi';
import {BsFillHandThumbsUpFill} from 'react-icons/bs'

const Card = ({ title, description, imgUrl, id, likes, comments }) => {
//   return (
//     <div className="col-sm-6 col-lg-4 mb-5">
//       <div className="related-content card text-decoration-none overflow-hidden h-100">
//         <img className="related-img card-img-top" src={imgUrl} alt={title} />
//         <div className="related-body card-body p-4">
//           <h5 className="title text-start py-2">{title}</h5>
//           <p className="short-description text-start">
//             {excerpt(description, 25)}
//           </p>
//           <div className="flex justify-between">
//             <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
//               <span className="text-primary">Read More</span>
//             </Link>
//             <div>
//               <BsFillHandThumbsUpFill className="m-2" />
//               {likes.length}
//             <BiChat className="m-2" />
//               {comments.length}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// return (
//   <div className="col-sm-6 col-lg-4 mb-5">
//     <div className="related-content card text-decoration-none overflow-hidden h-100 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
//       <img className="related-img card-img-top h-40 object-cover" src={imgUrl} alt={title} />
//       <div className="related-body card-body p-4">
//         <h5 className="title text-start py-2 font-semibold text-lg">{title}</h5>
//         <p className="short-description text-start text-sm text-gray-600">{excerpt(description, 25)}</p>
//         <div className="flex justify-between items-center mt-4">
//           <Link
//             to={`/detail/${id}`}
//             className="text-primary font-medium hover:underline"
//             style={{ textDecoration: "none" }}
//           >
//             Read More
//           </Link>
//           <div className="flex items-center space-x-2">
//             <BsFillHandThumbsUpFill className="text-primary" />
//             <span className="text-sm text-gray-600">{likes.length}</span>
//             <BiChat className="text-primary" />
//             <span className="text-sm text-gray-600">{comments.length}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// return (
//   <div className="col-sm-6 col-lg-4 mb-5">
//     <div className="related-content card text-decoration-none overflow-hidden h-full">
//       <div className="related-img-wrapper h-64">
//         <img className="related-img h-full object-cover" src={imgUrl} alt={title} />
//       </div>
//       <div className="related-body card-body p-4">
//         <h5 className="title text-start py-2 font-semibold text-lg">{title}</h5>
//         <p className="short-description text-start text-sm text-gray-600">{excerpt(description, 25)}</p>
//         <div className="flex justify-between items-center mt-4">
//           <Link
//             to={`/detail/${id}`}
//             className="text-primary font-medium hover:underline"
//             style={{ textDecoration: "none" }}
//           >
//             Read More
//           </Link>
//           <div className="flex items-center space-x-2">
//             <BsFillHandThumbsUpFill className="text-primary" />
//             <span className="text-sm text-gray-600">{likes.length}</span>
//             <BiChat className="text-primary" />
//             <span className="text-sm text-gray-600">{comments.length}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
  

return (
  <div className="col-sm-6 col-lg-4 mb-5">
    <div className="related-content card text-decoration-none overflow-hidden h-full">
      <div className="related-img-wrapper h-64">
        <img
          className="related-img h-fit object-cover"
          src={imgUrl}
          alt={title}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="related-body card-body p-4">
        <h5 className="title text-start py-2 font-semibold text-lg">{title}</h5>
        <p className="short-description text-start text-sm text-gray-600">{excerpt(description, 25)}</p>
        <div className="flex justify-between items-center mt-4">
          <Link
            to={`/detail/${id}`}
            className="text-primary font-medium hover:underline"
            style={{ textDecoration: "none" }}
          >
            Read More
          </Link>
          <div className="flex items-center space-x-2">
            <BsFillHandThumbsUpFill className="text-primary" />
            <span className="text-sm text-gray-600">{likes.length}</span>
            <BiChat className="text-primary" />
            <span className="text-sm text-gray-600">{comments.length}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);


}

export default Card;
