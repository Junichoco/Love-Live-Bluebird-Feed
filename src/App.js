import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

import Feed from "./Components/Feed";

function App() {
  const [member, setMember] = useState("");
  const [twitter, setTwitter] = useState();

  const changeFeed = (name) => {
    setTwitter();
    setMember(name);
    console.log(name);

    if(name === "Polka"){
      setTwitter(
        <div className="feed">
          <a className="twitter-timeline" data-theme="dark" href="https://twitter.com/polka_lion?ref_src=twsrc%5Etfw">Tweets by polka_lion</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      );
    }else if (name === "Mai"){
      setTwitter(
        <div className="feed">
          <a className="twitter-timeline" data-theme="dark" href="https://twitter.com/My_Mai_Eld?ref_src=twsrc%5Etfw">Tweets by My_Mai_Eld</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      );
    }else if (name === "Akira"){
      setTwitter(
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/G_Akky304250?ref_src=twsrc%5Etfw">Tweets by G_Akky304250</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      );
    }else if (name === "Hanabi"){
      setTwitter(
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/hanabistarmine?ref_src=twsrc%5Etfw">Tweets by hanabistarmine</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      );
    }else if (name === "Miracle"){
      setTwitter(
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/MiracleGoldSP?ref_src=twsrc%5Etfw">Tweets by MiracleGoldSP</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      );
    }else if (name === "Noriko"){
      setTwitter(
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/Noricco_U?ref_src=twsrc%5Etfw">Tweets by Noricco_U</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      );
    }else if (name === "Yukuri"){
      setTwitter(
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/Yukuri_talk?ref_src=twsrc%5Etfw">Tweets by Yukuri_talk</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      );
    }else if (name === "Aurora"){
      setTwitter(
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/Rollie_twinkle?ref_src=twsrc%5Etfw">Tweets by Rollie_twinkle</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      );
    }else if (name === "Midori"){
      setTwitter(
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/LittlegreenCom?ref_src=twsrc%5Etfw">Tweets by LittlegreenCom</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      );
    }else if (name === "Shion"){
      setTwitter(
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/ShaunTheBunny?ref_src=twsrc%5Etfw">Tweets by ShaunTheBunny</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      );
    }
 }

  return (
    <div class="App">
      <div class="header">
        <h1>The Ikizuraibu Feed</h1>
      </div>
      <div className="sidenav">
        <a onClick={() => changeFeed("Polka")}>Polka</a>
        <a onClick={() => changeFeed("Mai")}>Mai</a>
        <a onClick={() => changeFeed("Akira")}>Akira</a>
        <a onClick={() => changeFeed("Hanabi")}>Hanabi</a>
        <a onClick={() => changeFeed("Miracle")}>Miracle</a>
        <a onClick={() => changeFeed("Noriko")}>Noriko</a>
        <a onClick={() => changeFeed("Yukuri")}>Yukuri</a>
        <a onClick={() => changeFeed("Aurora")}>Aurora</a>
        <a onClick={() => changeFeed("Midori")}>Midori</a>
        <a onClick={() => changeFeed("Shion")}>Shion</a>
      </div>
      <p>{member}</p>

      <div className="feeds-container">
        {twitter}
      </div>
    </div>
  );
}

export default App;
