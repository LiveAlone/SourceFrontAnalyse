<script setup>
import { ref } from 'vue'
import axios from 'axios'

const resp = ref('null')

function request() {
  axios
    .get('/api/address')
    .then(function (response) {
      // handle success
      console.log(response.status)
      console.log(response.data)
      resp.value = response.data
    })
    .catch(function (error) {
      // handle error
      console.log(error)
      resp.value = error
    })
    .finally(function () {
      console.log('finish')
    })
}
</script>

<template>
  <p>{{ resp }}</p>
  <el-button type="info" @click="request">请求</el-button>
</template>

<style scoped></style>
