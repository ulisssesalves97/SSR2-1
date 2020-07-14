<template>
  <div>
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
    padding: 0.7em;
    border-style: solid;
    border-color:slateblue;
    border-width: 0.5em;
    border-radius: 50%;
    width: 135px;
    height: 135px;
}
</style>
