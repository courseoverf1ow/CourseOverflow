import React from "react";
import styles from "./CardFooter.module.css";
import {
  FaThumbsUp,
  FaRegThumbsUp,
  FaThumbsDown,
  FaRegThumbsDown,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";

const CardFooter = (props) => {
  const bookmarkClickHandler = () => {
    console.log("Bookmark clicked!");
  };
  const likeClickHandler = () => {
    console.log("Like clicked!");
  };
  const dislikeClickHandler = () => {
    console.log("Dislike clicked!");
  };
  return (
    <div className={styles.cardFooter}>
      <div className={styles.likesDislikes}>
        {props.isLiked ? (
          <FaThumbsUp
            className="m-1 bg-transparent"
            onClick={likeClickHandler}
          />
        ) : (
          <FaRegThumbsUp
            className="m-1 bg-transparent"
            onClick={likeClickHandler}
          />
        )}
        {props.likesCount}
        {props.isDisliked ? (
          <FaThumbsDown
            className="m-1 ml-3 bg-transparent"
            onClick={dislikeClickHandler}
          />
        ) : (
          <FaRegThumbsDown
            className="m-1 ml-3 bg-transparent"
            onClick={dislikeClickHandler}
          />
        )}
        {props.dislikesCount}
      </div>
      <button className={styles.bookmarks}>
        {props.isBookmarked ? (
          <FaBookmark
            className="mt-1 bg-transparent"
            onClick={bookmarkClickHandler}
          />
        ) : (
          <FaRegBookmark
            className="mt-1 bg-transparent"
            onClick={bookmarkClickHandler}
          />
        )}
      </button>
    </div>
  );
};

export default CardFooter;
