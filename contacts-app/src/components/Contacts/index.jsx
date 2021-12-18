import React, { useState } from 'react'

import Form from './Form';
import List from './List'

export default function Main() {

  const [contacts, setContacts] = useState([{
    fullname: "John Doe",
    phone: "+55000000000"
  }]);

  return (
    <div className="position-absolute top-50 start-50 translate-middle card rounded-3 border border-3 border-ligth px-5 py-5 bg-light">
      <div className="row mt-5">
        <div className="col-6">
          <h1>Contact Add</h1>
          <br />
          <Form addContact={setContacts} contactList={contacts} />
        </div>
        <div className="col-6">
          <h1>Contacts List</h1>
          <br />
          <List contactList={contacts} />
        </div>
      </div>
    </div>
  )
}
