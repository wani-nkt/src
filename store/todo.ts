import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

interface Todo {
    id: string,
    name: string,
    isDone: boolean,
}

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todoList: [] as Todo[]
    }),
    actions: {
        add(todoName: string) {
            const id = uuidv4()
            this.todoList.push({
                id: id,
                name: todoName,
                isDone: false
            })
        },
        delete(id: string) {
            const index = this.todoList.findIndex(todo => todo.id == id)
            this.todoList.splice(index, 1)
        }
    }
})