import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const words = [
  "these",
  "is",
  "the",
  "place",
  "race",
  "that",
  "those",
  "are",
  "far",
];
const totalLines = 100;
const allWords = [];
for (let i = 0; i < totalLines; i++) {
  let sentences = "";
  for (let j = 0; j < words.length; j++) {
    sentences += " " + words[Math.floor(Math.random() * words.length)];
  }
  sentences += ".";
  allWords.push(sentences);
}
console.log(allWords);
let count = 0;

const Assignment2 = () => {
  const [sentences] = useState(allWords);
  const [filterWords, setFilterwords] = useState("");

  const releventSentence = useMemo(() => {
    console.log(count++);
    return sentences.filter((x) => x.includes(filterWords));
  }, [sentences, filterWords]);

  return (
    <div>
      <input
        type="text"
        placeholder="enter the search text "
        value={filterWords}
        onChange={(e) => setFilterwords(e.target.value)}
      />
      <br />
      {releventSentence.map((eachSentence, index) => {
        return <div key={index}>{eachSentence}</div>;
      })}
    </div>
  );
};

export default Assignment2;
