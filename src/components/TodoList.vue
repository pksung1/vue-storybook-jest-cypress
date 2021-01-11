<template>
  <div class="todo-list">
    <TodoItem v-for="item in items" v-bind="item" :key="item.id"/>
  </div>
</template>
<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoList',
  components: {TodoItem},
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
<style lang="scss" scoped>
  .todo-list {
    max-width: 980px;
    max-height: 600px;
    overflow: auto;
    width: 100%;
  }
</style>