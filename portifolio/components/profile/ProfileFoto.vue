<template>
  <div>
    {{ title }}
    <div>
      <img class="circle-border" v-bind:src="randomUserProfileFotoUrl">
    </div>
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
    title: String
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

.circle-border{
    border-radius: 50%;
    width: 135px;
    height: 135px;
}
</style>
