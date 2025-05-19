import React, { Component } from "react";

class Feed extends Component {
  render(){
    const {} = this.props;

    return(

      <div id="setlist-scroll">
        {playedSongs.map((song, index) => {
          return(
            <div>
              <p>{index + 1}. {song}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Feed
