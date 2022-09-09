import React, { useEffect, Fragment } from "react"
import { todoStore } from "../../context/todoContext"
import { eventStore } from "../../context/eventContext"

import { Todo, UpdateTodo, AddTodo } from "../../components"

const Home = () => {
  const {
    getTodos,
    isLoading,
    error,
    addNewTodo,
    deleteTodo,
    editTodo,
    todos,
    completeTodo,
  } = todoStore()

  const { backdropStatus, modalStatusUpdateTodo, modalStatusAddTodo } =
    eventStore()

  useEffect(() => {
    getTodos()
  }, [])

  const updateTodo = (todo) => {
    eventStore.setState({ modalStatusUpdateTodo: !modalStatusUpdateTodo })
    eventStore.setState({ backdropStatus: !backdropStatus })
    editTodo(todo)
  }

  const addTodo = (todo) => {
    eventStore.setState({ modalStatusAddTodo: !modalStatusAddTodo })
    eventStore.setState({ backdropStatus: !backdropStatus })
    const newTodo = {
      content: todo,
      isCompleted: false,
      id: todos.length + 1 + todo.length,
    }
    addNewTodo(newTodo)
  }

  return (
    <Fragment>
      <UpdateTodo updateTodo={updateTodo} />
      <AddTodo addTodo={addTodo} />
      <section>
        <div className={isLoading ? "loading__container" : ""}>
          {isLoading && <div className="loading">Loading...</div>}
          {error && (
            <div className="error">
              <h2>{error}</h2>
            </div>
          )}
        </div>

        <div
          className={isLoading ? "todo__container visible" : "todo__container"}
        >
          {todos.map((todo, index) => (
            <Todo
              key={index}
              id={todo.id}
              text={todo.content}
              completed={todo.isCompleted}
              checkTask={() => completeTodo(todo.id, todo.isCompleted)}
              editTask={() => {
                todoStore.setState({ todoID: todo.id })
                eventStore.setState({
                  modalStatusUpdateTodo: !modalStatusUpdateTodo,
                })
                eventStore.setState({ backdropStatus: !backdropStatus })
              }}
              deleteTask={() => deleteTodo(todo.id)}
            />
          ))}
        </div>
        <div className="addtodo__container">
          <button
            className="btn"
            onClick={() => {
              eventStore.setState({ modalStatusAddTodo: !modalStatusAddTodo })
              eventStore.setState({ backdropStatus: !backdropStatus })
            }}
          >
            Add Todo
          </button>
        </div>
      </section>
    </Fragment>
  )
}

export default Home
