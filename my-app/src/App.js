import React, { Component } from "react";
import CommentList from "./components/comment/CommentList";
import AddComment from "./components/addComment/AddComment";
import AddCommentBtn from "./components/addComment/AddCommentBtn";

class App extends Component {
  state = {
    comments: [],
    commentValue: "",
    vote: 0,
  };
  ratingChanged = (newRating) => {
    this.setState({
      vote: newRating,
    });
  };
  onInput = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };
  submitComment = () => {
    if (this.state.commentValue === "") {
      alert("Yorum Alanı boş bırakılamaz");
      return;
    }
    if (this.state.commentValue.length < 3) {
      alert("Yorumunuz Çok kısa");
      return;
    }
    if (this.state.vote < 1) {
      alert("Yorum yapmadan önce oy vermelisiniz.");
      return;
    }
    const newState = this.state;
    newState.comments.push({
      text: this.state.commentValue,
      vote: this.state.vote,
    });
    newState.commentValue = "";
    newState.vote = 0;
    this.setState({
      ...newState,
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "#DB8F5C" }}>Yorumlar</h1>
        {this.state.comments.length === 0 && (
          <div>
            <h1 style={{ textAlign: "center", color: "#BDA8BA" }}>
              Hiç Yorum Yok
            </h1>
          </div>
        )}
        <CommentList comments={this.state.comments} />
        <AddComment
          value={this.state.commentValue}
          vote={this.state.vote}
          onInputChange={this.onInput}
          ratingChanged={this.ratingChanged}
        />
        <AddCommentBtn submitComment={this.submitComment} />
      </div>
    );
  }
}

export default App;
