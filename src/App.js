import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { quote, auth } from "./quotes";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { quote: "", auth: "" }

    this.handleClick = this.handleClick.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
  }

  handleClick() {
    var x = Math.floor(Math.random() * auth.length) + 1;

    this.setState({ quote: quote[x], auth: auth[x] })
  }

  handleTweet() {
    let tweet;
    if (this.state.auth) {
      tweet = "https://twitter.com/intent/tweet?text=" + this.state.quote.trim(0, (280 - (this.state.auth.length + 2))) + " " + this.state.auth
    } else {
      tweet = "https://twitter.com/intent/tweet?text=Generate a quote first."
    }



    window.open(tweet);

  }



  render() {
    let quote, auth;
    if (this.state.quote) {
      quote = <h2 className="quote text-center">{this.state.quote}</h2>
      auth = <h3 className="auth text-center">{this.state.auth}</h3>
    } else {
      quote = <h2 className="quote text-center">Welcome to the Leadership quote generator.</h2>
      auth = <h3 className="auth text-center">Click the button to generate a quote.</h3>
    }
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="http://github.com/JohnIrle">John Irle</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="..">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="../#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="../#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="../#contact">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="http://johnirle.com/blog/" >Blog</a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="jumbotron">
            {quote}
            {auth}
            <div className="text-center">
              <button className="btn btn-success quote-btn" type="button" onClick={this.handleClick}>
                Give me a quote.
        </button>
              <button className="btn btn-warning" onClick={this.handleTweet}>Tweet</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
