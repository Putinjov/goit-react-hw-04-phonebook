import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactItem = ({ contact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <li className='contacts-item'>
      {contact.name}: {contact.number}
      <Button size='small' variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={handleDelete}>Delete</Button>
    </li>
  );
};

export default ContactItem;
