import { useState } from "react";

const Button = (props) => {
  const handleClick = () => {
    props.setValue(props.value + 1);
  };

  return <button onClick={handleClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  return (
    <div>
      <h2>statistics</h2>

      {props.good === 0 && props.neutral === 0 && props.bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine
              text="all"
              value={props.good + props.neutral + props.bad}
            />
            <StatisticLine
              text="average"
              value={
                (props.good - props.bad) /
                (props.good + props.neutral + props.bad)
              }
            />
            <StatisticLine
              text="positive"
              value={
                (props.good * 100) / (props.good + props.neutral + props.bad)
              }
            />
          </tbody>
        </table>
      )}
    </div>
  );
};

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (value, setValue) => {
    setValue(value + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button text="good" value={good} setValue={setGood} />
        <Button text="neutral" value={neutral} setValue={setNeutral} />
        <Button text="bad" value={bad} setValue={setBad} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
