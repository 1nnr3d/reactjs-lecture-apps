import React, { useState } from 'react';

export default function List({ contactList }) {

  const [filteredContact, setFilter] = useState("");

  const filtered = contactList.filter(person => {
    return Object.keys(person).some(key => {
      return person[key]
        .toString()
        .toLowerCase()
        .includes(filteredContact.toLocaleLowerCase());
    })
  })

  return (
    <div>
      <input
        className="form-control"
        value={filteredContact}
        placeholder="Filter Contact"
        onChange={e => setFilter(e.target.value)} />
      <ul className="list-group text-start mt-4">
        {
          filtered.map((person, index) => (
            <li className="list-group-item" key={index}>
              Fullname: {person.fullname}<br />
              Phone number: {person.phone}
            </li>
          ))
        }
      </ul>
      <br />
    </div>
  )
}
