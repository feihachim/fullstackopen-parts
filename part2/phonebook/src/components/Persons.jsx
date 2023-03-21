const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.length === 0 ? (
        <p>No results</p>
      ) : (
        persons.map((item) => (
          <p key={item.name}>
            {item.name} {item.number}{" "}
            <button
              onClick={() => {
                handleDelete(item);
              }}
            >
              delete
            </button>
          </p>
        ))
      )}
    </div>
  );
};

export default Persons;
