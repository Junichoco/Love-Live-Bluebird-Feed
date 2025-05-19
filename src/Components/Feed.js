import React, { Component } from "react";

class Feed extends Component {
  render(){
    const { member } = this.props;

    return(

      <div>
        <p>{member}</p>
      </div>
    )
  }
}

export default Feed
