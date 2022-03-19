// 检索当前文件下的所有组件并注册 组件名为逐渐的name名
const files = require.context('./', false, /.vue$/)
const modules = []
files.keys().forEach((key) => {
  modules.push(files(key).default)
})

// 检索所有js文件对js文件进行注册
const jsFiles = require.context('./', true, /.js$/)
const jsModules = []
jsFiles.keys().forEach((key) => {
  if (key === './index.js') return
  jsModules.push(jsFiles(key).default)
})

export default {
  install: function (Vue) {
    modules.forEach((item) => {
      Vue.component(item.name, item)
    })

    jsModules.forEach((item) => {
      Vue.use(item)
    })
  }
}
