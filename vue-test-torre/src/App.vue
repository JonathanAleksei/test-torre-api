<template>
  <h1>Torre - User Skills </h1><br>
  <button @click="fetchUser">Show Skills</button><br>
  <ul>
    <li>Skills</li>
  </ul>
</template>

<script>
export default {
  methods: {
    fetchUser () {
      console.log("Skills")
    }
  }
}
</script>

<style scoped>
 h1{
  color: aliceblue;
 }
</style>
