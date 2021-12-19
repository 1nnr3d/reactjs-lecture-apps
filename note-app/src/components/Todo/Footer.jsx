/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Footer({ todoLenght, setTodoList, selected, setSelected }) {
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todoLenght}</strong> items left
        </span>

        <ul className="filters">
          <li>
            <a className={selected === "All" ? "selected" : ""} onClick={() => setSelected("All")}>All</a>
          </li>
          <li>
            <a className={selected === "Active" ? "selected" : ""} onClick={() => setSelected("Active")}>Active</a>
          </li>
          <li>
            <a className={selected === "Completed" ? "selected" : ""} onClick={() => setSelected("Completed")}>Completed</a>
          </li>
        </ul>
        {
          todoLenght > 0 ?
            <button className="clear-completed" onClick={() => setTodoList([])}>
              Clear completed
            </button>
            : null
        }
      </footer>
    </div>
  )
}
