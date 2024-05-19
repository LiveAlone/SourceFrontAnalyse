<script>
export default {
  data() {
    return {
      isActive: true,
      error: null,
      awesome: true,
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  },
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  },
  methods: {
    action() {
      console.log('action')
      this.awesome = false
    }
  },
}
</script>

<template>
  <button @click="action">action</button>
  <div class="static" :class="classObject">this is active div</div>

  <hr>
  <h1 v-if="awesome">Vue is awesome!</h1><h1 v-else>Oh no 😢</h1>

  <hr>
  <li v-for="(item, index) in items">
    Parent - {{ index }} - {{ item.message }}
  </li>
  <li v-for="({ message }, index) in items">
    {{ message }} {{ index }}
  </li>

  <li v-for="(value, key, index) in myObject">
    {{ index }}. {{ key }}: {{ value }}
  </li>

  <span v-for="n in 10">{{ n }}</span>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
