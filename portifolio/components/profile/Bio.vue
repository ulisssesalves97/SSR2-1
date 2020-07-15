<template>
  <div id="bio">
    <div class="bio-container">
      <div v-bind:class="{ ocultar: bio != 'resumo' }" v-on:click="MostrarCompleto()">
        {{ resumo }}
        <button class="bio-botao">Ver mais</button>
      </div>
      <div v-bind:class="{ ocultar: bio != 'completo' }" v-on:click="MostrarResumo()">
        {{ completo }}
        <button class="bio-botao">Ver menos</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        bio: 'resumo',
        resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...',
        completo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  },
  methods:{ 
      MostrarCompleto(){
          this.bio = 'completo'
      },
      MostrarResumo(){
          this.bio = 'resumo'
      }
   }
}
</script>

<style>
.ocultar {
  display: none;
}
.bio-botao:hover {
  border-style: dotted;
  cursor: pointer;
}
.bio-container {
  max-width: 70vw;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 200;
  font-size: 1em;
  color: black;
  letter-spacing: 1px;
  text-align: justify;
  padding: 1em;
  border-width: 0.5em;
  border-style: solid;
  border-image: 
    linear-gradient(
      to bottom, 
      slateblue, 
      rgba(0, 0, 0, 0)
    ) 1 100%;
}
</style>
