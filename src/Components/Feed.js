import React, { Component } from "react";

class Feed extends Component {
  render(){
    const { member } = this.props;
    let twitter = "monkey";

    if({member} == 'Polka'){
      twitter = "Polka";
        // <div>
        //   monkey
        //   <a className="twitter-timeline" data-theme="dark" href="https://twitter.com/polka_lion?ref_src=twsrc%5Etfw">Tweets by polka_lion</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        // </div>
    }else{
      console.log({member});
    }

    return(

      <div className="feeds-container">
        <div className="feed">
          <p>{member}</p>
          {twitter}
        </div>
      </div>
    )
  }
}

export default Feed
