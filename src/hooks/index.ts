import { Store, useStore } from "vuex";
import {
    SET_TODO,
    SET_TODO_LIST,
    REMOVE_TODO,
    SET_TODO_STATUS,
    SET_DOING
} from "@/store/actionType";
import { ITodo, TODO_STATUS } from "@/typings";

interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void;
}
function useTodo(): IUseTodo {
    const store: Store<any> = useStore()
    const { setLocalList, getLocalList } = useLocalStorage()
    const todoList: ITodo[] = getLocalList()
    function setTodo(value: string): void {

        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO, todo)
        setLocalList(store.state.list)
    }

    function setTodoList() {
        store.dispatch(SET_TODO_LIST, todoList)
    }


    function removeTodo(id: number): void {
        store.dispatch(REMOVE_TODO, id)
        setLocalList(store.state.list)
    }

    function setStatus(id: number) {
        store.dispatch(SET_TODO_STATUS, id)
        setLocalList(store.state.list)


    }

    function setDoing(id: number) {
        store.dispatch(SET_DOING, id)
        setLocalList(store.state.list)

    }


    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}

interface IUseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (todoList: ITodo[]) => void
}
function useLocalStorage(): IUseLocalStorage {
    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem('todoList') || '[]')
    }

    function setLocalList(todoList: ITodo[]): void {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }
    return {
        getLocalList,
        setLocalList
    }
}

export { useTodo, useLocalStorage, IUseTodo }