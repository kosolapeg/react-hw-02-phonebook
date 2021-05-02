import { useState, useEffect } from 'react';

import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts';
// import Filter from './components/Filter';
import shortid from 'shortid';

const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('storedContacts');
    const parsedContacts = JSON.parse(storedContacts);
    console.log(parsedContacts);

    parsedContacts && setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('storedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newRecord = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts(prev => [newRecord, ...prev]);
  };

  const getVisibleContacts = name => {
    return contacts.filter(({ name }) => name.includes(name));
  };

  const visibleContacts = getVisibleContacts(filter);

  const changeFilter = e => {
    const filterName = e.currentTarget.value;
    setFilter(filterName);

    getVisibleContacts(filterName);
  };

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={addContact} />
        <label>
          Search by name:
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={changeFilter}
          />
        </label>
      </Section>

      <Section title="Contacts">
        <Contacts records={visibleContacts} />
      </Section>
    </>
  );
};

export default App;
