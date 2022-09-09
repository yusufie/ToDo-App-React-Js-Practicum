import React, { useState } from "react"
import { eventStore } from "../context/eventContext"

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("")
  const { modalStatusAddTodo, backdropStatus } = eventStore()

  const handleChangeValue = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const fromData = new FormData(e.target)
    const todo = fromData.get("todo")

    setText("")
    addTodo(todo)
  }

  return (
    <aside
      className={
        modalStatusAddTodo ? "modal__container" : "modal__container disabled"
      }
    >
      <h3>Write Here</h3>
      <form className="modal__form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="todo"
          name="todo"
          value={text}
          onChange={handleChangeValue}
          minLength="3"
        />
        <div className="modal__buttons">
          <button
            type="button"
            onClick={() => {
              eventStore.setState({ modalStatusAddTodo: !modalStatusAddTodo })
              eventStore.setState({ backdropStatus: !backdropStatus })
              setText()
            }}
            className="btn btn--danger"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn--success">
            Confirm
          </button>
        </div>
      </form>
    </aside>
  )
}

export default AddTodo
