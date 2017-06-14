//这里使用按需配置element-ui
//第一步：引入vue包
import Vue from 'vue'
//第二步：按需引入对应的element-ui插件，这里插件名使用驼峰命名法，首字母是大写，这个名字在App.vue中使用组件时候，控制台会通过报错提示相应的需要引的组件名称
//我们在App.vue中添加一个button按钮组件，后台会提示[Vue warn]: Unknown custom element: <el-button> - did you register the component correctly? For recursive components, make sure to provide the "name" option；其中<el-button>就是提示我们需要加载Button组件，这里就可以在下面引入对应的组件了
import {Select,Option,Button} from 'element-ui'
//第三步：Vue使用对应的组件
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
//第四步：将这个文件引入到入口文件main.js文件中