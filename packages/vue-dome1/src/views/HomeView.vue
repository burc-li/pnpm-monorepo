<script setup>
import { isObject, isFunction } from '@libc/shared'
</script>

<template>
  <main class="main-wrapper">
    <section>
      <h1>libc-shared公共方法的使用</h1>
      <p>libc-shared中判断是否是对象的方法</p>
      <p>{{ isObject }}</p>
      <p>libc-shared中判断是否是函数的方法</p>
      <p>{{ isFunction }}</p>
    </section>
    <section>
      <h1>libc-ui公共组件库的使用</h1>
    </section>
  </main>
</template>

<style lang="less" scoped>
.main-wrapper{
  section{
    padding: 4px 10px;
    min-height: 150px;
    border: 2px solid #de5e60;
    border-radius: 4px;
    >h1{
      font-size: 18px;
      font-weight: bolder;
      color: #00BD7E;
      margin-bottom: 4px;
    }
    &:first-child{
      margin-bottom: 12px;
    }
    p:nth-child(3){
      margin-bottom: 6px;
    }
  }
}
</style>
