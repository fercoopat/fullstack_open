import { useEffect, useState } from 'react';
import personService from './services/persons';
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const notify = (text, type = 'success') => {
    setNotification({ text, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      const replace = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`,
      );

      if (!replace) {
        return;
      }

      const changedPerson = { ...existingPerson, number: newNumber };

      personService
        .update(existingPerson.id, changedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id === existingPerson.id ? returnedPerson : person,
            ),
          );
          setNewName('');
          setNewNumber('');
          notify(`Updated ${returnedPerson.name}`);
        })
        .catch(() => {
          setPersons(
            persons.filter((person) => person.id !== existingPerson.id),
          );
          notify(
            `Information of ${existingPerson.name} has already been removed from server`,
            'error',
          );
        });

      return;
    }

    const personObject = { name: newName, number: newNumber };

    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName('');
      setNewNumber('');
      notify(`Added ${returnedPerson.name}`);
    });
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          notify(`Deleted ${name}`);
        })
        .catch(() => {
          setPersons(persons.filter((person) => person.id !== id));
          notify(
            `Information of ${name} has already been removed from server`,
            'error',
          );
        });
    }
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification notification={notification} />

      <Filter value={filter} onChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm
        onSubmit={handleSubmit}
        name={newName}
        onNameChange={handleNameChange}
        number={newNumber}
        onNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons persons={personsToShow} onDelete={handleDelete} />
    </div>
  );
};

export default App;
