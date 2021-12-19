export default function Body({ todoList, setTodoList, selected }) {

  /* Seçilen kategorilere göre yapılacaklar listesinin filtrelenmesi */
  const filtered = todoList.filter(todo => {
    return selected === "All" ? todo
      : selected === "Active" ? todo.status !== true
        : selected === "Completed" ? todo.status === true
          : todo
  });

  /* Yapılacaklar listesinden task silme */
  const onDeleteTodo = (todoID) => {
    const newTodoList = todoList.filter(todo => todo.id !== todoID);
    setTodoList(newTodoList);
  }

  /* Yapılacaklar listesine işaretlenmiş olanların seçilmesi ve ayarlanması */
  const onCheckedTodo = (todoID) => {
    const newTodoList = todoList.map(todo => todo.id === todoID ? { ...todo, status: true } : todo);
    setTodoList(newTodoList);
  }

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">
          Mark all as complete
        </label>

        <ul className="todo-list">
          {
            filtered.map((todo) => ( // Yapılacaklar listesinin listelenmesi
              <li
                className={todo.status === true ? "completed" : ""}
                key={todo.id}
                id={todo.id}>
                <div className="view">
                  <input className="toggle" type="checkbox" onChange={() => onCheckedTodo(todo.id)} />
                  <label>{todo.text}</label>
                  <button className="destroy" onClick={() => onDeleteTodo(todo.id)}></button>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  )
}
