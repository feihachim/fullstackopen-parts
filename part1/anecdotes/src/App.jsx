import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [maxVotedQuote, setMaxVotedQuote] = useState(0);
  const [maxVotes, setMaxVotes] = useState(0);

  const handleSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
    setMaxVotes(votes.reduce((a, b) => Math.max(a, b), -Infinity));
    setMaxVotedQuote(votes.indexOf(maxVotes));
  };

  const handleVotes = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
    setMaxVotes(copyVotes.reduce((a, b) => Math.max(a, b), -Infinity));
    setMaxVotedQuote(votes.indexOf(maxVotes));
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleSelected}>next anecdote</button>
      <p>{anecdotes[maxVotedQuote]}</p>
      <p>has {votes[maxVotedQuote]} votes</p>
    </div>
  );
}

export default App;
