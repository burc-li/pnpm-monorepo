<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  init()
})

function init(){
  tinymce.init({
    selector: '#mytextarea',
  });
}

</script>

<template>
  <h1>TinyMCE快速开始示例</h1>
  <form method="post">
    <textarea id="mytextarea">Hello, World!</textarea>
  </form>
</template>

<style scoped>

</style>
