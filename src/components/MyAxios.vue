<template>
    <div>
<p>axios请求</p>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name:"MyAxios",
        data(){
            return{

            }
        },
        mounted(){
            axios({
                method:"get",
                url:"https://www.neu.edu.cn"
            }).then(res =>{
                console.log("请求完成");
                console.log(res.data);
            })

            // 或者更便捷的写法
            axios.get("https://www.neu.edu.cn")
            .then(res => {
                console.log(res.data);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>