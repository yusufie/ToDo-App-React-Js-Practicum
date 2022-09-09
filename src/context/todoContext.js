import create from "zustand"

const initialState = {
  todos: [],
  todoID: null,
  isLoading: false,
  error: null,
}
const todoMethods = (set, get) => {
  const getData = async ({ path, method, body }) => {
    const url = "https://631327b3b466aa9b0393e72f.mockapi.io/"
    set({ isLoading: true })

    try {
      const response = await fetch(`${url}${path}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        ...(body ? { body: JSON.stringify(body) } : {}),
      })
      set({ isLoading: false })
      set({ error: null })

      return response.json()
    } catch (error) {
      set({ isLoading: false })
      set({ error })
    }
  }

  return {
    getTodos: async () => {
      await getData({
        path: "/todos",
        method: "GET",
      }).then((todos) => {
        set({ todos })
      })
    },
    addNewTodo: async (newTodo) => {
      await getData({
        path: "/todos",
        method: "POST",
        body: newTodo,
      }).then(() => {
        get().getTodos()
      })
    },
    deleteTodo: async (todoID) => {
      await getData({
        path: `/todos/${todoID}`,
        method: "DELETE",
      }).then(() => {
        get().getTodos()
      })
    },
    completeTodo: async (todoID, completed) => {
      await getData({
        path: `/todos/${todoID}`,
        method: "PUT",
        body: { isCompleted: !completed },
      }).then(() => {})
    },
    editTodo: async (text) => {
      await getData({
        path: `/todos/${get().todoID}`,
        method: "PUT",
        body: { content: text },
      }).then(() => {
        get().getTodos()
      })
    },
  }
}

export const todoStore = create((set, get) => ({
  ...initialState,
  ...todoMethods(set, get),
}))
