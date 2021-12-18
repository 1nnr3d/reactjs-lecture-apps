import React, { useState } from 'react'

export default function Form({ addContact, contactList }) {

  const [form, setForm] = useState({ fullname: "", phone: "" }); //Form State

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // Form Change
  }

  const onSubmitForm = (e) => {
    e.preventDefault(); // Disable Reload Function

    if (form.fullname === '' || form.phone === "") { // Return false if inputs are empty.
      return false
    }

    addContact([...contactList, form]) // AddContact Function

    setForm({ fullname: "", phone: "" }) // Clear Form inputs
  }

  return (
    <div className="container">
      <form className="form" onSubmit={onSubmitForm}>
        <div>
          <input className="form-control mb-2" type="text" name="fullname" value={form.fullname} placeholder="Full Name" onChange={onChangeInput} />
        </div>
        <div>
          <input className="form-control" type="text" name="phone" value={form.phone} placeholder="Phone" onChange={onChangeInput} />
        </div>

        <button className="btn btn-dark mt-2" type="submit">Add Contact</button>
      </form>
    </div>
  )
}
