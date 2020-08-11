import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { quotes } from "./quotes";
import NavBar from "./components/NavBar";

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
        let tweet =
            "https://twitter.com/intent/tweet?text=" +
            quote.trim(0, 280 - (auth.length + 2)) +
            " " +
            auth;

        window.open(tweet);
    };

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h2 className="quote text-center">{quote}</h2>
                    <h4 className="auth text-center">{auth}</h4>
                    <div className="text-center">
                        <button
                            className="btn btn-success quote-btn mr-1"
                            type="button"
                            onClick={() => handleClick()}
                        >
                            Give me a quote.
                        </button>

                        <button
                            className={`btn btn-warning ${
                                tweet ? "" : "disabled"
                            }`}
                            disabled={!tweet}
                            onClick={() => handleTweet()}
                        >
                            Tweet
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
