<template>
  <div class="user-container">
    <h1 class="users-title">{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</h1>
    <ProfileFoto v-bind:src="user.picture.large" />
    <Bio v-bind:skills="user.skills" />
  </div>
</template>

<script>
function GetRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default {
  props:{
    user: Object
  },
  data(){
    return { 
        randomUserProfileFotoUrl: `https://randomuser.me/portraits/men/${GetRandomInt(1, 50)}.jpg`
    }
  },
  methods:{ }
}
</script>

<style>
.circle-border {
  border-radius: 50%;
  width: 135px;
  height: 135px;
}

.user-container{
  max-width: 80vw;
  margin: 1.5vh 10vw;
  padding: 1.5vh 3vw;
  text-align: center;
  border-color: cornflowerblue;
  border-style: solid;
  border-width: 0.1em;
  border-radius: 1em;
}
</style>
