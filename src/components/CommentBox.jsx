// import React from "react";
// import { useNavigate } from "react-router-dom";

// const CommentBox = ({ userId, userComment, setUserComment, handleComment }) => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <form className="row blog-form">
//         <div className="col-12 py-3">
//           <textarea
//             rows="4"
//             value={userComment}
//             onChange={(e) => setUserComment(e.target.value)}
//             className="form-textarea description"
//           />
//         </div>
//       </form>
//       {!userId ? (
//         <>
//           <h5>Please login or Create an account to post comment</h5>
//           <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/auth")}>
//             Login
//           </button>
//         </>
//       ) : (
//         <>
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             type="submit"
//             onClick={handleComment}
//           >
//             Post Comment
//           </button>
//         </>
//       )}
//     </>
//   );
// };

// export default CommentBox;

import React from "react";
import { useNavigate } from "react-router-dom";

const CommentBox = ({ userId, userComment, setUserComment, handleComment }) => {
  const navigate = useNavigate();

  return (
    <>
      <form className="row blog-form">
        <div className="col-12 py-3">
          <textarea
            rows="4"
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            className="form-textarea description border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
      </form>
      {!userId ? (
        <>
          <h5 className="text-center">Please login or create an account to post a comment</h5>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 mx-auto block"
            onClick={() => navigate("/auth")}
          >
            Login
          </button>
        </>
      ) : (
        <>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mx-auto block"
            type="submit"
            onClick={handleComment}
          >
            Post Comment
          </button>
        </>
      )}
    </>
  );
};

export default CommentBox;
