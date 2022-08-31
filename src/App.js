import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const getRandomQuote = async () => {
  const response = await fetch("https://api.quotable.io/random", {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

function App() {
  const [color, setColor] = useState("");
  const [quote, setQuote] = useState({});
  useEffect(() => {
    getRandomQuote().then(setQuote);
    const ind = Math.floor(Math.random() * 12);
    setColor(colors[ind]);
  }, []);

  const handleClick = () => {
    getRandomQuote().then(setQuote);
    const ind = Math.floor(Math.random() * 12);
    setColor(colors[ind]);
  };

  return (
    <Container
      className="min-vh-100 min-vw-100 d-flex flex-column justify-content-center align-items-center "
      style={{
        backgroundColor: color,
        transition: "background-color 1s ease 0.5s",
      }}
    >
      <Container
        id="quote-box"
        className=" d-flex flex-column  align-items-center w-25 justify-content-between p-3"
        style={{ backgroundColor: "#fff", height: "25rem" }}
      >
        <p
          id="text"
          className="text-center align-self-center"
          style={{
            fontSize: "24px",
            color,
            transition: "color 1s ease 0.5s",
          }}
        >
          {quote.content}
        </p>
        <p
          id="author"
          className="text-end align-self-end"
          style={{
            fontSize: "12px",
            color,
            transition: "color 1s ease 0.5s",
          }}
        >
          -{quote.author}
        </p>
        <Container className=" d-flex flex-row-reverse  justify-content-between my-3">
          <Button
            id="new-qoute"
            className="shadow-none"
            onClick={handleClick}
            style={{
              backgroundColor: color,
              border: color,
              transition: "background-color 1s ease 0.5s",
            }}
          >
            New qoute
          </Button>
          <Button
            className="shadow-none"
            id="tweet-quote"
            as="a"
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
              encodeURIComponent(quote.content + " " + quote.author)
            }
            target="_blank"
            style={{
              backgroundColor: color,
              border: color,
              transition: "background-color 1s ease 0.5s",
            }}
          >
            tweet
          </Button>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
