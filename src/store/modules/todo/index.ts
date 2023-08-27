import { defineStore } from "pinia";
import { ref } from "vue";
import { TodoItem } from "./model";

export const useTodoList = defineStore('todo-list', () => {
  const todoList = ref<TodoItem[]>([])
  let id = 0;

  // TODO 输入内容
  function addItem(label:string) {
    /** 检查是否有输入 */
    if(!label) {
      return
    }
    id++;
    const item = {
      id,
      label
    }
    if(label.startsWith('reserver:')) {
      item.label = reserverItem(label);
    } else if(label.startsWith('top:')) {
      item.label = toTop(label);
      todoList.value.unshift(item)
      return item;
    } 
    todoList.value.push(item)
    return item;
  }

  function getTodoList() {
    return todoList.value;
  }

  function removeItem(id:number) {
    const result = todoList.value.filter(item => item.id !== id);
    console.log('result', result);
    todoList.value = result
  }

  function reserverItem(label: string) {
    const showLabel = label.split('reserver:')[1];
    return showLabel.split('').reverse().join('');
  }

  function toTop(label:string) {
    const showLabel = label.split('top:')[1];
    return showLabel;
  }

  return {
    addItem,
    getTodoList,
    removeItem,
    todoList
  }
})