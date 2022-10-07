<template>
    <div class="item-wrap">
        <div>
            <input type="checkbox" :checked="item.status === FINISHED" @click="setStatus(item.id)">
        </div>
        <span :class="item.status === FINISHED ? 'line-through' : ''" class="content">
            {{item.content}}
        </span>
        <div class="button-wrap">
            <button @click="removeTodo(item.id)">删除</button>
            <button v-if="item.status !== FINISHED" @click="setDoing(item.id)"
                :class="item.status === DOING ? 'doing' : 'willdo'">{{item.status === DOING ? '正在做...': '马上做'}}</button>
        </div>

    </div>
</template>
<script lang=ts>
import { defineComponent, PropType } from 'vue';
import { ITodo, TODO_STATUS } from '@/typings'

interface IStatusState {
    DOING: TODO_STATUS;
    FINISHED: TODO_STATUS;
    WILLDO: TODO_STATUS
}
export default defineComponent({
    name: 'TodoItem',
    props: {
        item: Object as PropType<ITodo>
    },
    setup(props, { emit }) {
        const statusState: IStatusState = {
            DOING: TODO_STATUS.DOING,
            FINISHED: TODO_STATUS.FINISHED,
            WILLDO: TODO_STATUS.WILLDO
        }

        const removeTodo = (id: number): void => {
            emit('removeTodo', id)
        }

        const setStatus = (id: number): void => {
            emit('setStatus', id)
        }

        const setDoing = (id: number): void => {
            emit('setDoing', id)
        }

        return {
            ...statusState,
            removeTodo,
            setStatus,
            setDoing
        }
    }
})
</script>

<style lang="scss" scoped>
.line-through {
    text-decoration: line-through;
}

.doing {
    background-color: #cdcdcd;
    color: rgb(43, 40, 40)
}

.willdo {
    background-color: orange;
    color: #FFF
}

.item-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    padding: 15px 0;
    border-bottom: 1px solid #ddd;

    .content {
        font-size: 14px;
        min-width: 20px;

    }

    .button-wrap {
        display: flex;
        flex-direction: row;
        gap: 10px;

        button {
            height: 30px;
            line-height: 14px;
            font-size: 14px;
            border: none;
            border-radius: 4px;
        }
    }
}
</style>