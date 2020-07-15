<template>
  <div>
    <h1 class="users-title">{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</h1>
    <ProfileFoto v-bind:src="user.picture.large" />
    <Bio />
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
</style>
