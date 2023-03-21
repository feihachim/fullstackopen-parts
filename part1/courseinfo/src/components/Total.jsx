const Total = ({ course }) => {
  let initialValue = 0;
  let sum = course.parts.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.exercises;
  }, initialValue);

  return <h3>total of {sum} exercises</h3>;
};

export default Total;
