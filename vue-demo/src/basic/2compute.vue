<script>
export default {
  data() {
    return {
      count: 0,
      someObject: {},
    }
  },

  methods: {
    increment() {
      this.count++
    }
  },

  computed: {
    now() {
      // 依赖变量
      console.log(this.count)
      return Date.now()
    }
  },

  mounted() {
    console.log(`The initial count is ${this.count}.`)
    this.count = 2

    // js 返回代理对象，不是当前对象
    const newObject = {}
    this.someObject = newObject
    console.log(newObject)
    console.log(this.someObject)
    console.log(newObject === this.someObject)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
  <p> {{ now }} </p>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
