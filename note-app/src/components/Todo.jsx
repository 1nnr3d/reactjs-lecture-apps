import Header from './Todo/Header';
import Body from './Todo/Body'
import Footer from './Todo/Footer'

import { useState } from 'react';

export default function Todo() {
  const [todoList, setTodoList] = useState([
    {
      id: "todo-kxdk44xm",
      text: "Learn JavaScript",
      status: true
    },
    {
      id: "todo-kxdk02fo",
      text: "Learn React",
      status: false
    },
    {
      id: "todo-kxdk0o3y",
      text: "Have a life!",
      status: false
    }
  ]);

  const [selected, setSelected] = useState("All")

  return (
    <div>
      <section className="todoapp">
        <Header todoList={todoList} setTodoList={setTodoList} />

        <Body todoList={todoList} setTodoList={setTodoList} selected={selected} />

        <Footer todoLenght={todoList.length} setTodoList={setTodoList} selected={selected} setSelected={setSelected} />
      </section>
    </div>
  )
}
