<template>
  <main class="">
    <h1 class="text-5xl font-bold p-10 flex justify-center">
      ToDoアプリ
    </h1>
    <div class="flex justify-center ">
      <ul class="w-[60vw]">
        <li v-for="todo in todoStore.todoList" :key="todo.id" class="p-2 flex m-2">
          <p class="border-2 border-black rounded-xl text-4xl w-7/12 h-20 flex justify-center items-center">
            {{ todo.name }}
          </p>
          <div class="w-[300px] flex justify-center items-center">
            <input type="checkbox" v-model="todo.isDone" class=" checkbox w-1/2">
            <label for="checkbox" class="text-3xl w-1/2">
              {{ todo.isDone ? "完了" : "未完了" }}
            </label>
          </div>
          <div class="flex items-center w-[100px]">
            <button @click="deleteTodo(todo.id)" class=" rounded-xl text-xl text-white bg-red-600 w-full h-16">
              削除
            </button>
          </div>
        </li>
        <li class="p-2 flex m-2">
          <input v-model="newTodo"
            class=" border-2 border-black  rounded-xl text-4xl bg-slate-200 w-7/12 h-20 flex  text-center">
          <div class="w-[300px] "></div>
          <div class="flex items-center w-[100px]">
            <button @click="addTodo" class=" rounded-xl text-xl text-white bg-blue-800 w-full h-16">
              追加
            </button>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/store/todo'

const todoStore = useTodoStore()

const newTodo = ref<string>('')

const addTodo = () => {
  if (newTodo.value === '') {
    alert("タスクを入力してください。")
  } else {
    todoStore.add(newTodo.value)
    newTodo.value = ''
  }
}

const deleteTodo = (id: string) => {
  todoStore.delete(id)
}

</script>