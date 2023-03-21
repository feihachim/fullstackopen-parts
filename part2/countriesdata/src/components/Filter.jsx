const Filter = ({ handleWord }) => {
  return (
    <div>
      find countries <input onChange={handleWord} />
    </div>
  );
};

export default Filter;
