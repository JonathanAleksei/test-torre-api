<template>
  <h1>Torre - User Skills </h1><br>
  <CustomInput v-model="username"/><br>
  <button @click="fetchUser">Show Skills</button><br>
  <ul>
    <li>Skills</li>
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
