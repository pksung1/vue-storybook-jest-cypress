import App from './App.vue'

export default {
  title: 'page/App',
  component: App
}

const Template = (args, {argTypes}) => ({
  components: {App},
  props: Object.keys(argTypes),
  template: '<App />'
})

export const Default = Template.bind({})
Default.args = {}

export const Darkmode = Template.bind({})
Darkmode.args = {}