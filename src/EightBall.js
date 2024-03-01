import React, { useState } from "react";
import "./EightBall.css";
const messageList = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];
const EightBall = (props) => {
  const getRandomMsg = () => {
    const randomIdx = Math.floor(Math.random() * messageList.length);
    console.log(randomIdx);
    const randMsg = messageList[randomIdx];
    setMessage(randMsg);
    if (randMsg.color == "green") {
      setGreenCount(greenCount + 1);
    }
    if (randMsg.color == "red") {
      setRedCount(redCount + 1);
    }
    if (randMsg.color == "goldenrod") {
      setYellowCount(yellowCount + 1);
    }
  };
  const [message, setMessage] = useState({
    msg: "Think of a question",
    color: "black",
  });

  const [redCount, setRedCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);

  return (
    <div className="EightBallGame">
      <button
        className="EightBallBtn"
        style={{ backgroundColor: message.color }}
        onClick={() => getRandomMsg()}
      >
        {message.msg}
      </button>
      <button
        onClick={() => {
          setMessage({ msg: "Think of a question", color: "black" });
          setRedCount(0);
          setGreenCount(0);
          setYellowCount(0);
        }}
      >
        Restart
      </button>
      <h2>Green: {greenCount}</h2>
      <h2>Red: {redCount}</h2>
      <h2>Yellow: {yellowCount}</h2>
    </div>
  );
};

export default EightBall;
