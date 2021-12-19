import { useState } from 'react';
import uniqid from 'uniqid';

export default function Header({ todoList, setTodoList }) {

  const [form, setForm] = useState(
    {
      id: uniqid.process("todo-"), // Benzersiz bir ID oluşturma
      text: "",
      status: false
    }
  )

  /* Form üzerinde submit olayı gerçekleştiğinde çalışacak function */
  const onSubmitTodo = (e) => {
    e.preventDefault(); // Submit olayı gerçekleştiğinde sayfanın yeniden yüklenmesini engellemesi

    setTodoList([...todoList, form]); // Yapılacaklar listesine yeni not eklenmesi

    setForm({ ...form, id: uniqid.process("todo-"), text: "" }) // Form yapısının temizlenmesi
  }

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmitTodo}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })} /> {/* Form objemize yazı eklenmesi */}
        </form>
      </header>
    </div>
  )
}
