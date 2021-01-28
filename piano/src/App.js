import { Component } from "react";

export default class LikeDislike extends Component {
  state = {
    likeClicked: false,
    likeCount: 0,
    dislikeCount: 0,
    dislikeClicked: false,
  };

  render() {
    return (
      <>
        <div>
          <button
            onClick={() => {
              if (!this.state.likeClicked) {
                if (this.state.dislikeClicked) {
                  this.setState({
                    likeCount: this.state.likeCount + 1,
                    likeClicked: true,
                    dislikeClicked: false,
                    dislikeCount: this.state.dislikeCount - 1,
                  });
                } else {
                  this.setState({
                    likeCount: this.state.likeCount + 1,
                    likeClicked: true,
                    dislikeClicked: false,
                  });
                }
              } else {
                this.setState({
                  likeClicked: false,
                  likeCount: this.state.likeCount - 1,
                });
              }
            }}
            className={this.state.likeClicked ? "liked" : "like-button"}
          >
            Like | {this.state.likeCount}
          </button>
          <button
            onClick={() => {
              if (this.state.dislikeClicked === false) {
                if (this.state.likeClicked) {
                  this.setState({
                    dislikeCount: this.state.dislikeCount + 1,
                    dislikeClicked: true,
                    likeClicked: false,
                    likeCount: this.state.likeCount - 1,
                  });
                } else {
                  this.setState({
                    dislikeCount: this.state.dislikeCount + 1,
                    dislikeClicked: true,
                    likeClicked: false,
                  });
                }
              } else {
                this.setState({
                  dislikeClicked: false,
                  dislikeCount: this.state.dislikeCount - 1,
                });
              }
            }}
            className={
              this.state.dislikeClicked ? "disliked" : "dislike-button"
            }
          >
            Dislike | {this.state.dislikeCount}
          </button>
        </div>
        <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
      </>
    );
  }
}
