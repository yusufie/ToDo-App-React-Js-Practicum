import React, { useEffect, useState } from "react"
import { eventStore } from "../context/eventContext"
import complete from "../assets/images/check-solid.svg"

const Todo = ({ text, deleteTask, editTask, completed, checkTask }) => {
  const [checked, setChecked] = useState(completed)
  const { modalStatusAddTodo, modalStatusUpdateTodo } = eventStore()

  useEffect(() => {
    setChecked(completed)
  }, [completed])

  return (
    <article
      className={
        modalStatusUpdateTodo || modalStatusAddTodo
          ? "todo__card z-index"
          : "todo__card"
      }
    >
      <p className={checked ? "todo__completed" : ""}>{text}</p>
      <hr />
      <div className="todo__buttons">
        <span className={checked ? "" : "visible"}>
          <img src={complete} alt="complete"></img>
        </span>
        <input
          type="checkbox"
          className={
            modalStatusUpdateTodo || modalStatusAddTodo ? "z-index" : ""
          }
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
          onClick={checkTask}
        />
        <button onClick={editTask} className="edit__button"></button>
        <button onClick={deleteTask} className="delete__button"></button>
      </div>
    </article>
  )
}

export default Todo
