import { useTodoList } from './index';
import { it, expect, describe, beforeEach } from 'vitest'
import { setActivePinia, createPinia, storeToRefs } from 'pinia'

describe('test todo list', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('add todo item function', () => {
    const {addItem, getTodoList} = useTodoList();
    const item = addItem('test')
    const todoList = getTodoList();
    expect(todoList).toContain(item);
  })
  it('add todo item function add empty', () => {
    const {addItem, getTodoList} = useTodoList();
    addItem('')
    const todoList = getTodoList();
    expect(todoList.length).toBe(0);
  })
  it('remove item function', () => {
    const {addItem, removeItem} = useTodoList();
    const {todoList} = storeToRefs(useTodoList())
    const item = addItem('test')
    expect(todoList.value).toContain(item);
    removeItem(item!.id)
    expect(todoList.value).not.toContain(item);
  })
  it('reserver item function', () => {
    const {addItem, getTodoList} = useTodoList();
    addItem('reserver:cxy')
    const todoList = getTodoList();
    expect(todoList[0].label).toBe('yxc');
  })
  it('to top item function', () => {
    const {addItem, getTodoList} = useTodoList();
    addItem('test')
    addItem('test1')
    addItem('test2')
    const topId = addItem('top:cxy')
    const todoList = getTodoList();
    expect(todoList[0].id).toBe(topId!.id);
  })
})