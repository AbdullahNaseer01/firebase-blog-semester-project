import React, { useEffect } from "react";
import { BsHandThumbsUp, BsFillHandThumbsUpFill } from "react-icons/bs";

const Like = ({ handleLike, likes, userId }) => {
  const LikeStatus = () => {
    if (likes?.length > 0) {
      return likes.find((id) => id === userId) ? (
        <>
          <BsFillHandThumbsUpFill />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      ) : (
        <>
          <BsHandThumbsUp />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }
    return (
      <div className="flex justify-between bg-slate-300 p-2 rounded-md mr-3 ">
        <BsHandThumbsUp />
        {/* &nbsp;Like */}
      </div>
    );
  };

  return (
    <>
      <span className="float-right cursor-pointer mt-[-7px]">
        {!userId ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={null}
          >
            <LikeStatus />
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={handleLike}>
            <LikeStatus />
          </button>
        )}
      </span>
    </>
  );
};

export default Like;
