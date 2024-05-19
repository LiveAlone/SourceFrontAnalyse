<script>
export default {
  data() {
    return {
      count: 0,
      msg: 'yqj',
      rawHtml: '<span style="color: red">This should be red.</span>',
      dynamicId: 'dynamicId',
      isButtonDisabled: true,
      seen: false,
      dyLabel: 'class'
    }
  },

  methods: {
    increment() {
      this.count++
      this.isButtonDisabled = this.count % 2 === 0
      this.seen = this.count % 2 === 1
      this.dyLabel = 'id'
    }
  },

  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
  <p> count 100 is {{ count * 100 }} </p>
  <p>message is {{ msg }}</p>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <div v-bind:id="`id-${count}`">dynamicId</div>
  <button :disabled="isButtonDisabled">Button</button>

  <p v-if="seen">Now you see me</p>

  <div :[dyLabel]="`id-${count}`">dynamic label</div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
