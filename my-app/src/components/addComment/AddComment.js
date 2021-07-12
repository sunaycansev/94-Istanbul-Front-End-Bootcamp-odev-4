import React from "react";
import ReactStars from "react-rating-stars-component";

export default function AddComment(props) {
  return (
    <div className="comment-form">
      <h3>Yorum Ekle</h3>
      <textarea
        placeholder="Yorumunuz.."
        rows="5"
        cols="28"
        value={props.value}
        onChange={props.onInputChange}
      />
      <br />
      <ReactStars
        count={5}
        onChange={props.ratingChanged}
        value={props.vote}
        size={30}
        activeCoor="#fd700"
      />
    </div>
  );
}
