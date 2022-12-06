<template>
 <h3>学习Vue: 模板语法</h3>
<div v-bind:id="dynamicId">{{ message }}</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      message:"学习vue111",
      dynamicId:1001
    }
  }
}
</script>
