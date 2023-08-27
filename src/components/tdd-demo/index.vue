<template>
  <div>
    <n-input v-model:value="item" @keydown.enter="handleAdd" />
    <ul>
      <li v-for="item in getTodoList()" :key="item.id">
        {{item.label}}<n-button @click="handleRemove(item)">删除</n-button>
      </li>
      
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodoList } from '../../store';
import { TodoItem } from '../../store/modules/todo/model';
import { useMessage } from 'naive-ui';

const {addItem, getTodoList, removeItem} = useTodoList();
const message = useMessage()
const item = ref<string>()
/** 有问题的添加 */
function handleAdd() {
  if(!addItem(item.value as string)) {
    message.error('请输入内容')
  }
  item.value = ''
}
/** 删除 */
function handleRemove(item?: TodoItem) {
  if(item) {
    removeItem(item.id);
  }
}

</script>

<style></style>
