import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="App">
      <div class="header">
        <h1>The Ikizuraibu Feed</h1>
      </div>
      <div className="sidenav">
        <a>Polka</a>
        <a>Mai</a>
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
    </div>
  );
}

export default App;
