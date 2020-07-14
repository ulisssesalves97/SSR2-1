<template>
  <div class="Card">
    <p v-for="habilidade in habilidades" class="item">
      {{ habilidade }}
    </p>
  </div>
</template>
<style>
.item {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: darkorchid;
  text-align: center;
  padding: 70px;
  margin-top: 10px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}
</style>
<script>
export default {
  name: 'Card',
  data() {
    return {
      habilidades: ['React', 'Ulisses'],
    }
  },
}
</script>
