<template>
    <div>
        <h3>Фильтр дел:</h3>
        <select v-model="filterItem" @change="filterTodo(filterItem)">
            <option value="200">200 дел</option>
            <option value="100">100 дел</option>
            <option value="50">50 дел</option>
            <option value="20">20 дел</option>
            <option value="10">10 дел</option>
            <option value="5">5 дел</option>
        </select>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'FilterTodos',
    methods: mapActions(['filterTodo']),

    data() {
        return {
            filterItem: null
        }
    },

}
</script>
<style>
select {
    width: 8vw;
    height: 3vh;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1rem;
    border-radius: 4px;
}
</style>