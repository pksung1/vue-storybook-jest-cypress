import TodoItem from './TodoItem.vue'

export default {
    title: 'TodoItem',
    component: TodoItem
}

const Template = (args, {argTypes}) => ({
    components: {TodoItem},
    props: Object.keys(argTypes),
    template: '<TodoItem v-bind="$props"/>'
})

export const Default = Template.bind({})
Default.args = {}