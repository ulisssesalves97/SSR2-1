<template>
  <div id="hello">
    {{ message }}
    <div>
      <p>Meu primeiro if em vue</p>
      <div v-if="clicks > 0">Você clicou {{clicks}} vezes.</div>
      <div v-else>Nenhum clique ainda: {{clicks}} cliques.</div>
    </div>
    <button v-on:click="ContarCliques()"> Clique aqui </button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: 'Hello Vue',
      clicks: 0
    }
  },
  methods:{
    ContarCliques(){
      this.clicks = this.clicks == 0? 2 : Math.pow(this.clicks, 2);
    }
  }

}
</script>
