import React, { useEffect } from "react";
// import { useTooltip } from "react-use-tooltip";

const Like = ({ handleLike, likes, userId }) => {
  useEffect(() => {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach((element) => {
      useTooltip(element);
    });
  }, []);

  const LikeStatus = () => {
    if (likes?.length > 0) {
      return likes.find((id) => id === userId) ? (
        <>
          <i className="bi bi-hand-thumbs-up-fill" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      ) : (
        <>
          <i className="bi bi-hand-thumbs-up" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }
    return (
      <>
        <i className="bi bi-hand-thumbs-up" />
        &nbsp;Like
      </>
    );
  };

  return (
    <>
      <span
        className="float-right cursor-pointer mt-[-7px]"
        onClick={!userId ? null : handleLike}
      >
        {!userId ? (
          <button
            type="button"
            className="btn btn-primary"
            data-tooltip="Please Login to like post"
          >
            <LikeStatus />
          </button>
        ) : (
          <button type="button" className="btn btn-primary">
            <LikeStatus />
          </button>
        )}
      </span>
    </>
  );
};

export default Like;
