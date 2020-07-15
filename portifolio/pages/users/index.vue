<template>
  <div class="users-container">
    <div>
      <h1 class="users-title">
        Usuário X
      </h1>
      <ProfileFoto title="TESTEEEEEE"/>
      <Bio/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.users-container {
  margin: 0 auto;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: top;
  text-align: center;
}

.users-title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3em;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
