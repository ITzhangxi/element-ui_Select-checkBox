# element-ui[Selectu选择器]('http://element.eleme.io/#/zh-CN/component/select')

## 下载本文件
> * $ git clone ....
> * $ npm install
> * $ npm dev

## 重置Select选择器复选框
> * 将数组value5设置为空数组即可
```
 // 增加重置Select值的点击事件
 <template>
    <el-button type="primary" @click="reset()">重置Select选择器</el-button>
 <\template>
 <script>
    export default {
        methods:{
            reset(){
            // 将数组value5设置为空数组即可
            this.value5 = []
            }
        }
    }
 <script>
```


##获取Select选择器内的value值
> * 第一步：将value值改为与label值相同
> * 第二步：value5的值就是输入框我们需要的值

```
// 文档代码
<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value3: ''
      }
    }
  }
</script>

// 更改后
<script>
    export default {
        data() {
            return {
                options: [{
                    value: '黄金糕',
                    label: '黄金糕'
                }, {
                    value: '双皮奶',
                    label: '双皮奶'
                }, {
                    value: '蚵仔煎',
                    label: '蚵仔煎'
                }, {
                    value: '龙须面',
                    label: '龙须面'
                }, {
                    value: '北京烤鸭',
                    label: '北京烤鸭'
                }],
                value5: []
            }
        }
    }
</script>
```
## 设置默认值
> * 将value1值添加一个值时，输入框就是此默认值了
```

// 将value1值添加一个值时，输入框就是此默认值了
    value1: ['黄金糕'],
     defaultData: [{
         value: '黄金糕',
         label: '黄金糕'
     }, {
         value: '双皮奶',
         label: '双皮奶'
     }, {
         value: '蚵仔煎',
         label: '蚵仔煎'
     }, {
         value: '龙须面',
         label: '龙须面'
     }, {
         value: '北京烤鸭',
         label: '北京烤鸭'
     }],

 }
```
