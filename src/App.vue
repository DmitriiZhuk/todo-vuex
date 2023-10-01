<template>
  <div class="container">

    <AddTodo />
    <FilterTodos/>
    <ToDos />

  </div>
</template>

<script>
import ToDos from "./components/ToDos.vue"
import AddTodo from "./components/AddTodo.vue"
import FilterTodos from "./components/FilterTodos.vue"

export default {
  name: 'App',
  components: {
    ToDos, AddTodo, FilterTodos
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&display=swap');

body {
  font-family: 'Nunito Sans', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: rgb(10, 35, 87);
}

.container {
  margin: 0 auto;
  width: 60vw;
}
</style>
