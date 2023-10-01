
<template >
    <div>
        <h2>Добавить дело</h2>
        <div class="add">
            <form @submit.prevent="addTodo(title)">
                <input type="text" v-model="title" placeholder="  Новое дело">
                <input type="submit" value="Добавить">
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "AddTodo",
    data() {
        return {
            title:''
        }
    },
    methods: {
        ...mapActions(['addTodo'])
    },
}
</script>
<style scoped>
form {
    display: flex;
    gap: 10px
}

input[type="text"] {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1rem;
    flex: 10;
    padding: 10px;
    border: 1px solid rgb(114, 157, 250);
    border-radius: 10px;
}

input[type="submit"] {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1rem;
    flex: 2;
    padding: 10px;
    border: 1px solid rgb(74, 82, 99);
    border-radius: 10px;
}
</style>