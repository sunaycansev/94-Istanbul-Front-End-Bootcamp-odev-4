import React from "react";

function AddCommentBtn(props) {
  return (
    <div className="btn-container">
      <button className="add-comment-btn" onClick={props.submitComment}>
        Yorum Ekle
      </button>
    </div>
  );
}

export default AddCommentBtn;
