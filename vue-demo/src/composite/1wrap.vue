<script setup>
import {ref, onMounted, reactive} from 'vue'

// const count = ref(9)

const state = reactive({ count: 0 })

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function increment() {
  // count.value++
  obj.value.nested.count++
  state.count++
}

onMounted(() => {
  // 组合方式 this 获取失败, this undefined
  console.log(`this is type is ${typeof this}`)
  // console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ obj.nested.count }}</button>
  <button @click="increment">Count is: {{ state.count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
