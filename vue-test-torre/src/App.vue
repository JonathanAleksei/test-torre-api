<template>
  <h1>Torre - User Skills </h1><br>
  <CustomInput v-model="username"/><br>
  <button @click="fetchUser">Show Skills</button><br>
  <h2>{{ user.name }}</h2><br>
  <img v-bind:src="user.picture" alt=""><br>
  <ul>
    <li v-for="(skill, index) in user.skills" :key="index">{{ skill.name }}</li>
  </ul>
</template>

<script>
import axios from "axios";
import CustomInput from './components/CustomInput.vue';

export default {
  components: { CustomInput },
   data(){
    return {
      user: {
        name: '',
        picture: '',
        skills: []
      },
      username : 'getuser' 
    }
   },

//Get user Axios
   methods: {
    fetchUser () {
      console.log(this.username)
      axios
        .get(`https://torre.bio/api/bios/torrenegra`)
        .then((response) => {
          console.log(response.data)
          this.user.name = response.data.person.name
          this.user.skills = response.data.strengths
          this.user.picture = response.data.person.picture
          console.log(this.user.name)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
 h1{
  color: aliceblue;
 }
</style>
