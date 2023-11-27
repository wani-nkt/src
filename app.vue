<template>
  <main class="">
    <h1 class="text-3xl font-bold p-5 flex justify-center">
      ToDoアプリ
    </h1>
    <section class="">
      <h2 class="flex justify-center">Todo List</h2>
      <div class="flex justify-center">
        <ul>
          <li v-for="todo in todoStore.todoList" :key="todo.id">
            <input type="checkbox" v-model="todo.isDone" @change="completeTodo(todo.id)">
            {{ todo.name }}
            <button @click="deleteTodo(todo.id)">削除</button>
          </li>
          <li>
            <input v-model="newTodo" class=" border border-black">
            <button @click="addTodo">追加</button>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/store/todo'

const todoStore = useTodoStore()

const newTodo = ref<string>('')

const addTodo = () => {
  if (newTodo.value === '') {
    // Todo: alertを出す
  } else {
    todoStore.add(newTodo.value)
    newTodo.value = ''
  }
}

const completeTodo = (id: string) => {
  todoStore.complete(id)
}

const deleteTodo = (id: string) => {
  todoStore.delete(id)
}


</script>