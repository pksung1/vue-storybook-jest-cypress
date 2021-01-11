<template>
  <div class="todo-item">
    <div class="content">
      <div class="chkbox" :class="{active: checked}"></div>
      <span class="text">{{text}}</span>
    </div>
    <div class="pinned" :class="{active: pinned}"></div>
  </div>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    text: {
      type: String,
      default: 'text'
    },
    checked: {
      type: Boolean,
      default: false
    },
    pinned: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './style.scss';
  .todo-item {
    background-color: $yellow;
    padding: 25px 3%;
    display: flex;
    align-items: center;
    &:first-child {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
    &:last-child {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }
    .content {
      display: flex;
      align-items: center;
      flex: 1;
      .chkbox {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        border: 1px solid #ccc;
        &.active {
          background: $blue;
        }
      }
      .text {
        display: block;
        text-overflow: ellipsis;
        font-size: 16px;
        line-height: 18px;
        flex: 1;
        width: 0px;
        padding-right: 30px;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .pinned {
      width: 20px;
      height: 20px;
      border: 1px solid #ccc;
      &.active {
        background-color: $pupple;
      }
    }
  }
</style>