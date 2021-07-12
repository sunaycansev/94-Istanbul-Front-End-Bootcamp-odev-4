import React from "react";
import ReactStars from "react-rating-stars-component";

export default function CommentList(props) {
  return (
    <div
      className="comment-list"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "40vw",
      }}
    >
      {props.comments.map((comment, i) => (
        <div className="review-section" key={i}>
          <p className="comment-element">{comment.text}</p>

          <ReactStars
            className="comment-vote"
            count={5}
            size={24}
            activeCoor="#ffd700"
            value={comment.vote}
            edit={false}
          />
          <hr style={{ width: "20vw" }} />
        </div>
      ))}
    </div>
  );
}
