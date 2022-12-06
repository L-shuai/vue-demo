<template>
    <div>
        <!-- <h3>我是单文件组件</h3>
        <h2>prop传递数据</h2>
        <p>title = {{ title }}</p>
        <p>age = {{age}}</p>
        <ul>
            <li v-for="(item,index) in  names" :key="index">{{item}}</li>
        </ul> -->

        <h1>自定义事件传递数据</h1>
        <button @click="sendClickHandle">点击传递数据</button>
    </div>
</template>

<script>
    export default {
        name:"MyComponent",//导出组件的名称
        //组件间传递数据
        // props:{
        //     title:{
        //         type:String,
        //         default:""
        //     },
        //     age:{
        //         type:Number,
        //         default:0
        //     },
        //     names:{
        //         type:Array,
        //         //数组混合对象必须使用函数返回
        //         default:function(){
        //             return []
        //         }
        //     }
        // }

        data(){
            return{
                message:"我是MyComponent数据"
            }
        },
        methods:{
            sendClickHandle(){
                //参数1：字符串，理论上是随便的，但需要有意义   
                //参数2：传递的数据
                this.$emit("onEvent",this.message)
            }
        },
        //生命周期函数
        beforeCreate(){
            console.log("beforeCreate:组件创建之前");
        },
        created(){
            console.log("created:组件创建完成");
        },
        beforeMount(){
            console.log("beforeMount：渲染之前");
        },
        mounted(){
            console.log("mounted:组件渲染完成");
            //可以把网络请求放在这里，因为此刻已渲染完毕
            //用的最多
        },
        beforeUpdate(){
            console.log("beforeUpdate:组件更新之前");
        },
        updated(){
            console.log("updated:组件更新之后");
        },
        beforeUnmount(){
            console.log("beforeUnmount:组件卸载之前");
            //卸载之前把消耗性能的处理都干掉
            //比如一些计时器，计数器
        },
        unmounted(){
            console.log("unmounted:组件卸载之后");
        }
    }
</script>

<!-- scoped，表明该样式只在当前vue文件生效 -->
<style lang="css" scoped>

*{
    color: rebeccapurple;
}
</style>