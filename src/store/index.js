import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        item: "Todo 1",
      },
      {
        id: 2,
        item: "Todo 2",
      },
    ],
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
  },

  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      commit("setTodos", response.data);
    },
    async addTodo({ commit }, title) {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        { title, completed: false }
      );
      commit("newTodo", response.data);
    },

    async deleteTodo({ commit }, id) {
      await axios.delete("https://jsonplaceholder.typicode.com/todos/" + id);
      commit("removeTodo", id);
    },

    async filterTodo({ commit }, qty) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${qty}`
      );
      commit("setTodos", response.data);
    },
  },

  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) =>
      (state.todos = state.todos.filter((todo) => todo.id !== id)),
  },
  modules: {},
});
