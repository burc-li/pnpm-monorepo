<script setup>
</script>

<template>
  <main class="main-wrapper">
    <section>
      <p>libc-shared公共方法的使用</p>
    </section>
    <section>
      <p>libc-ui公共组件库的使用</p>
    </section>
  </main>
</template>

<style lang="less" scoped>
.main-wrapper{
  section{
    padding: 4px 10px;
    min-height: 120px;
    border: 2px solid #de5e60;
    border-radius: 4px;
    >p{
      font-size: 16px;
      font-weight: bolder;
      color: #00BD7E;
    }
    &:first-child{
      margin-bottom: 12px;
    }
  }
}
</style>
