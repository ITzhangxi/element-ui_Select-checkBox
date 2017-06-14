<template>
  <!--切记，template标签的亲子标签只能有一个，所以一般我是使用本组件为id的div标签-->
  <div id="App">
    <h1>重置、获取值</h1>
    <el-select v-model="value5" multiple placeholder="请选择">
      <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
      </el-option>
    </el-select>
    <!--增加获取Select值的点击事件-->
    <el-button type="primary" @click="get()">获取Select选择器的值</el-button>
    <!--增加重置Select值的点击事件-->
    <el-button type="primary" @click="reset()">重置Select选择器</el-button>
    <hr>
    <h1>设置默认值</h1>


    <el-select v-model="value1" multiple placeholder="请选择">
      <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
    export default {
        data() {
            return {
//                获取输入框的值
//                第一步：将value值改为与label值相同
//                第二步：value5的值就是输入框我们需要的值
                value5: [],
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
//              将value1值添加一个值时，输入框就是此默认值了
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
        },
        methods:{
            get(){
                console.log(this.value5);
            },
            reset(){
//                将数组value5设置为空数组即可
                this.value5 = []
            }
        }
    }
</script>
