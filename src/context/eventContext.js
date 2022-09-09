import create from "zustand"

const initialState = {
  darkmode: false,
  modalStatusUpdateTodo: false,
  modalStatusAddTodo: false,
  backdropStatus: false,
}

export const eventStore = create(() => ({
  ...initialState,
}))
