<template>
  <div>
    <h3>Todo List</h3>
    <todo-input></todo-input>
    <todo-list :todoList="todoList"></todo-list>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity';
import { defineComponent, onMounted } from 'vue';
import { Store, useStore } from "vuex";
import TodoInput from './components/TodoInput/index.vue'
import TodoList from './components/TodoList/index.vue'
import { IUseTodo, useTodo } from './hooks';

export default defineComponent({
  name: "App",
  components: { TodoInput, TodoList },
  setup() {
    const { setTodoList }: IUseTodo = useTodo()
    const store: Store<any> = useStore()
    onMounted(() => {
      setTodoList()
    })

    return {
      todoList: computed(() => store.state.list)
    }
  }
});
</script>

<style lang="scss" scoped>

</style>
