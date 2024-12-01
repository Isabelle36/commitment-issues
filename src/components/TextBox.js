import React, { useState } from "react";
import "./TextBox.css";

function TextBox() {
  const [message, setMessage] = useState(
    "The commits are so DRY that it makes Sahara jealous"
  );

  const [isCopied, setisCopied] = useState(false);

  const randomFunc = () => {
    const random = [
      "This commit is a lie",
      `I'm sorry`,
      "Code updated. Grass touched. Mental health restored.",
      `Refactored the code like it's my job, and guess what? It's now my job`,
      "I'm not sure what I did, but it works now",
      `It's not perfect, but it's cute enough to post on TikTok`,
      `Oops, did I just commit to this code? Guess we're in this together now`,
      `Added a feature no one asked for. But it's a vibe`,
      `Commitment issues? Nah, just committed to a buggy feature`,
      `Refactored this code like it's my skincare routine—better late than never`,
      `Me: Adds feature. The code: "Are you sure about that?"`,
      `I promise it works. For now`,
      `Code's so good, it makes me feel like a hacktivist`,
      `Do you KNow Skibidi Toilet Bro`,
      `Removed bugs, added more bugs... consistency is key`,
      `Turns out, the problem was me all along`,
      `Refactored the entire codebase. For no reason`,
      `I swear this will work... probably`,
      `Please don't judge my code`,
      `I wrote some code... now I wait for it to break`,
      `Code so clean, even my mom would approve`,
      `It works, but only on my laptop`,
      `This is why we can't have nice things`,
      `Will this work? Find out next time on Dragon Ball Z`,
      `I will fix this tomorrow… I swear`,
      `I'm not a magician, but I made it work… somehow`,
      `This commit is 99% caffeine`,
      `I could explain this, but it's better if I don't`,
      `Code that works until it doesn't`,
      `Added features. Removed my sanity`,
      `This fix only works on Tuesdays`,
      `It's not perfect, but it's close enough`,
      `Oops. I did it again`,
      `Rizzed up the code, no bugs left standing`,
      `Hit that gyatt code with the rizz, now it's flawless`,
      `Fixed it like a true Ohioan: with some grass, and a lot of rizz`,
      `That Ohio fix—pulling up like a rizz god`,
      `Turned the code from trash to gyatt status, no joke`,
      `Did it for the rizz, did it for Ohio, did it for the gyatt`,
      `We were doomed from the start, but this commit might just save us`,
      `Wrote some code in the dark, kissed some errors, and now it's perfect`,
      `Our love was a dead-end, but this code's still alive`,
      `Touched grass, now touching code`,
      `Spent some time with Mother Nature, now it's time to debug`,
      `Grass touched, but this code still needs some love`,
      `Grass touched, bugs squashed—balance restored`,
      `This bug didn’t stand a chance against me`,
      `I swear this code works pookie!!`,
      `Code doesn't discriminate, and neither do `,
      `Built by women, perfected by code`,
      `This commit is my last attempt to fix what's already broken`,
      `In the darkest corner of the code, I found a beautiful disaster`,
      `This commit is a promise I can't keep, but I'll try anyway.`,
      `The code is as broken as my heart, but I'll keep fixing it`,
    ];

    const randomMsg = Math.floor(Math.random() * random.length);
    const randMsg = random[randomMsg];

    setisCopied(false);

    setMessage(randMsg);
  };
  const copying = () => {
    navigator.clipboard.writeText(message);
    setisCopied(true);

    setTimeout(() => {
      setisCopied(false);
    }, 2000);
  };
  return (
    <div>
      <div className="textArea">
        <div className="txt">
          <div className="copy">
            {isCopied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clipboard-check copySuccess"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"
                />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clipboard copyStill"
                viewBox="0 0 16 16"
                onClick={copying}
              >
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
              </svg>
            )}
          </div>
          <span className="theInnnerText">{message}</span>
        </div>
        <button className="commitsGe" onClick={randomFunc}>
          Generate
        </button>
      </div>
    </div>
  );
}

export default TextBox;
