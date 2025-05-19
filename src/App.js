import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

// import Feed from "./Components/Feed";

function App() {
  const [member, SetMember] = useState("");

  return (
    <div class="App">
      <div class="header">
        <h1>The Ikizuraibu Feed</h1>
      </div>
      <div className="sidenav">
        <a>Polka</a>
        <a>Mai</a>
        <a>Akira</a>
        <a>Hanabi</a>
        <a>Miracle</a>
        <a>Noriko</a>
        <a>Yukuri</a>
        <a>Aurora</a>
        <a>Midori</a>
        <a>Shion</a>
      </div>
      <div className="feeds-container">
        <div className="feed">
          <a className="twitter-timeline" data-theme="dark" href="https://twitter.com/polka_lion?ref_src=twsrc%5Etfw">Tweets by polka_lion</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
      <div className="feeds-container d-none">
        <div className="feed">
          <a className="twitter-timeline" data-theme="dark" href="https://twitter.com/My_Mai_Eld?ref_src=twsrc%5Etfw">Tweets by My_Mai_Eld</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
      <div className="feeds-container d-none">
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/G_Akky304250?ref_src=twsrc%5Etfw">Tweets by G_Akky304250</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
      <div className="feeds-container d-none">
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/hanabistarmine?ref_src=twsrc%5Etfw">Tweets by hanabistarmine</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
      <div className="feeds-container d-none">
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/MiracleGoldSP?ref_src=twsrc%5Etfw">Tweets by MiracleGoldSP</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
      <div className="feeds-container d-none">
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/Noricco_U?ref_src=twsrc%5Etfw">Tweets by Noricco_U</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
      <div className="feeds-container d-none">
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/Yukuri_talk?ref_src=twsrc%5Etfw">Tweets by Yukuri_talk</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
      <div className="feeds-container d-none">
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/Rollie_twinkle?ref_src=twsrc%5Etfw">Tweets by Rollie_twinkle</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
      <div className="feeds-container d-none">
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/LittlegreenCom?ref_src=twsrc%5Etfw">Tweets by LittlegreenCom</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
      <div className="feeds-container d-none">
        <div className="feed">
          <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/ShaunTheBunny?ref_src=twsrc%5Etfw">Tweets by ShaunTheBunny</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
    </div>
  );
}

export default App;
