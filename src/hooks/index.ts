import { Store, useStore } from "vuex";
import { SET_TODO, SET_TODO_LIST } from "@/store/actionType";
import { ITodo, TODO_STATUS } from "@/typings";

interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: () => void;
    setStatus: () => void;
    setDoing: () => void;
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
        console.log('storestatelist', store.state.list)
    }


    function removeTodo() {

    }

    function setStatus() {

    }

    function setDoing() {

    }


    return {
        setTodo, setTodoList, removeTodo, setStatus, setDoing
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