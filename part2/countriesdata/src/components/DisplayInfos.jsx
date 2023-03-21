const DisplayInfos = ({ countries, setWord }) => {
  return (
    <ul>
      {countries.map((item, index) => (
        <li key={`${item.name.common}-${index}`}>
          {item.name.common}{" "}
          <button
            onClick={() => {
              setWord(item.name.common);
            }}
          >
            show
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DisplayInfos;
