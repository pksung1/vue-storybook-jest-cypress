import TodoList from './TodoList.vue'

export default {
    title: 'TodoList',
    component: TodoList
}

const Template = (args, {argTypes}) => ({
    components: {TodoList},
    props: Object.keys(argTypes),
    template: '<TodoList v-bind="$props"/>'
})

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      id: 1,
      text: 'TodoItem1',
      checked: false,
      pinned: false
    }
  ]
}

export const ManyItems = Template.bind({})
ManyItems.args = {
  items: [
    {
      id: 1,
      text: 'TodoItem1',
      checked: false,
      pinned: false
    },
    {
      id: 2,
      text: 'TodoItem2',
      checked: false,
      pinned: false
    },
    {
      id: 3,
      text: 'TodoItem3',
      checked: false,
      pinned: false
    },
    {
      id: 4,
      text: 'TodoItem4',
      checked: false,
      pinned: false
    },
    {
      id: 5,
      text: 'TodoItem5',
      checked: false,
      pinned: false
    },
    {
      id: 6,
      text: 'TodoItem6',
      checked: false,
      pinned: false
    }
  ]

}