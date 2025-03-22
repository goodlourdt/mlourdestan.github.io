import React, { useEffect, useState } from 'react';
import './App.css';

const TypingHeader = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text[i]);
        i++;
      } else {
        setShowCaret(false);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="header">
      {displayText}
      {showCaret && <span className="caret">|</span>}
    </h1>
  );
};

const App = () => {
  return (
    <div className="container">
      <TypingHeader text="hello there, i'm lou."/>

      <div className="content">
        <p>i am an insurance practitioner.</p>
        <p>but aside from that there are so many other things that i like to do as well.</p>
        <p>well, i like coffee too.</p>
      </div>

      <div className="photos">
        <div className="photo"></div>
        <div className="photo"></div>
        <div className="photo"></div>
      </div>

      <div className="links">
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <a href="#">Tiktok</a>
      </div>
    </div>
  );
};

export default App;
