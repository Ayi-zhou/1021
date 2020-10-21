<!--结构  行为   样式-->
<template>
  <div>
    <el-button type="info" @click="loginOut">退出</el-button>
  </div>
</template>
<script>
  export default {
    methods: {
      loginOut(){
        window.sessionStorage.clear();
        this.$router.push('/login');
        this.$message.success('退出成功');

      }
    }
  }
</script>
<style lang="less" scoped>
</style>
