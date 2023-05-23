import React, { useState, useEffect } from 'react';
import '../index.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]
  );

  const addContact = (contact) => {
    const existingContact = contacts.find(
      c => c.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (existingContact) {
      alert('This contact already exists!');
      return;
    }
    setContacts((prevContacts => [...prevContacts, contact]));
  };

  const deleteContact = (id) => {
    setContacts(prevContacts => {
      prevContacts.filter((contact => contact.id !== id),
      )
    });
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div className='contacts'>
      <h1>Phone Book</h1>
      <ContactForm addContact={addContact} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Contacts</h2>
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
};  