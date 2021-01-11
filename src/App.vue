<template>
  <div id="app">
    <h1>TODO</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style lang="scss" scoped>
  @import './style/style.css';
  #app {
    background: var(--main-bg);
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    box-sizing: border-box;
  }
</style>