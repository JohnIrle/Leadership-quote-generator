import { useState } from "react";
import "./App.css";

import { quotes } from "./quotes";

import { Container, Card, Button } from "react-bootstrap";

const App = () => {
  const [state, setState] = useState({
    quote: "Welcome to the Leadership quote generator.",
    auth: "Click the button to generate a quote.",
    tweet: false,
  });

  const { quote, auth, tweet } = state;

  const handleClick = () => {
    const x = Math.floor(Math.random() * auth.length) + 1;

    const split = quotes[x].split("@");

    setState({ quote: split[0], auth: "-" + split[1], tweet: true });
  };

  const handleTweet = () => {
    const text = `${quote.slice(0, 280 - (auth.length + 2))}\n${auth}`;
    const tweet = `https://x.com/intent/post?text=${encodeURIComponent(text)}`;

    window.open(tweet);
  };

  return (
    <>
      <Container className="quote-container">
        <Card className="quote-card">
          <h2 className="quote text-center">{quote}</h2>
          <h4 className="auth text-center">{auth}</h4>
          <div className="button-container">
            <Button
              className="btn btn-success quote-btn mr-1"
              type="button"
              onClick={() => handleClick()}
            >
              Give me a quote.
            </Button>

            <Button
              className={`btn btn-warning ${tweet ? "" : "disabled"}`}
              disabled={!tweet}
              onClick={() => handleTweet()}
            >
              Tweet
            </Button>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default App;
