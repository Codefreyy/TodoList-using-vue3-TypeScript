<template>
    <div>
        <todo-item v-for="item of todoList" :key="item.id" :item='item' @removeTodo='removeTodo' @setStatus='setStatus'
            @setDoing='setDoing'>
        </todo-item>
    </div>
</template>
<script>
import { defineComponent, onMounted, PropType } from 'vue';
import { ITodo } from "@/typings";
import { IUseTodo, useTodo } from '@/hooks'
import TodoItem from './Item.vue'
export default defineComponent({
    name: 'TodoList',
    props: {
        todoList: Array
    },
    components: {
        TodoItem
    },
    setup(props, { emit }) {
        const {
            removeTodo,
            setStatus,
            setDoing
        } = useTodo()

        return {
            removeTodo,
            setStatus,
            setDoing
        }
    }
})
</script>


<style lang="scss" scoped>

</style>