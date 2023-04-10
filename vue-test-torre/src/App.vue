<template>
  <h1>Torre - User Skills </h1><br>
  <CustomInput v-model="username"/><br>
  <button @click="fetchUser">Show Skills</button><br>
  <ul>
    <li>Skills</li>
  </ul>
</template>

<script>
import CustomInput from './components/CustomInput.vue';

export default {
  components: { CustomInput },
   data(){
    return {
      username : 'getuser'
    }
   },

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
