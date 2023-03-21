import { useState, useEffect } from "react";
import { Filter, PersonForm, Persons, Notification } from "./components";
import personsService from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(null);

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    personsService
      .getListByWord(e.target.value)
      .then((listPersons) => setPersons(listPersons))
      .catch((error) => console.log(error.message));
  };

  const getPersonsList = () => {
    personsService
      .getAll()
      .then((initialPersons) => setPersons(initialPersons))
      .catch((error) => console.log(error.message));
  };

  const addPerson = (e) => {
    e.preventDefault();
    if (!newName || !newNumber) {
      alert("Name and number must not be empty");
      return;
    }
    let foundPerson = persons.find((element) => element.name === newName);
    if (foundPerson) {
      if (newNumber) {
        let isUpdated = window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        );
        if (isUpdated) {
          personsService
            .updateOne({ ...foundPerson, number: newNumber })
            .then((response) => {
              setMessage(`Updated ${newName}`);
              setIsSuccess(true);
              setTimeout(() => {
                setMessage(null);
              }, 5000);
              getPersonsList();
            })
            .catch((error) => console.log(error.message));
        }
      }
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    personsService
      .createOne(newPerson)
      .then((person) => {
        setMessage(`Added ${newName}`);
        setIsSuccess(true);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        getPersonsList();
      })
      .catch((error) => console.log(error.message));
  };

  const handleDelete = (item) => {
    let isDeleted = window.confirm(`Delete ${item.name}?`);

    if (isDeleted) {
      personsService
        .deleteOne(item)
        .then((person) => {
          setMessage(`Deleted ${item.name}`);
          setIsSuccess(true);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          getPersonsList();
        })
        .catch((error) => {
          setMessage(
            `Information of ${item.name} has already been removed from the server`
          );
          setIsSuccess(false);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          console.log(error.message);
        });
    }
  };

  useEffect(getPersonsList, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} status={isSuccess} />
      <Filter handleFilter={handleFilter} />
      <h3>add a new</h3>
      <PersonForm
        addPerson={addPerson}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
