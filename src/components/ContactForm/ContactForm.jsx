import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button } from '@mui/material';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '' || number === '') {
      alert('Please enter a name and phone number.');
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number
    };
    addContact(contact);
    setName('');
    setNumber('');
  };

  return (
    <form className='contacts-form'
      onSubmit={handleSubmit}>
      <input className='contacts-input'
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input className='contacts-input'
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <Button variant="contained" color="success" type="submit">Add Contact</Button>
    </form>
  );
};

export default ContactForm;
