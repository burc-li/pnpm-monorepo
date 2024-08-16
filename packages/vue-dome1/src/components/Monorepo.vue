<script setup>
import { isObject, isFunction } from '@libc/shared'
import { Button, Spin } from '@libc/ui'
import _ from "lodash"
</script>

<template>
  <main class="main-wrapper">
    <section>
      <h1>lodash公共依赖的使用</h1>
      <p>向上一级展平数组嵌套：_.flatten([1, [2, [3, [4]], 5]])</p>
      <p>返回值：{{ _.flatten([1, [2, [3, [4]], 5]]) }}</p>
    </section>
    <section>
      <h1>libc-shared公共方法的使用</h1>
      <p>libc-shared中判断是否是对象的方法</p>
      <p>{{ isObject }}</p>
      <p>libc-shared中判断是否是函数的方法</p>
      <p>{{ isFunction }}</p>
    </section>
    <section>
      <h1>libc-ui公共组件库的使用</h1>
      <Button type="primary" ghost>Primary</Button>
      <Button type="primary">Primary</Button>
      <Spin></Spin>
    </section>
  </main>
</template>

<style lang="less" scoped>
.main-wrapper{
  section{
    padding: 8px 12px;
    min-height: 160px;
    border: 2px solid #de5e60;
    border-radius: 4px;
    >h1{
      font-size: 18px;
      font-weight: bolder;
      color: #00BD7E;
      margin-bottom: 4px;
    }
    &{
      margin-bottom: 12px;
    }
    p:nth-child(3){
      margin-bottom: 6px;
    }
    :deep(.ivu-spin-main) {
      margin-top: 12px;
    }
    :deep(.ivu-btn) {
      margin-right: 12px;
    }
  }
}
</style>
