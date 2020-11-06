<template>
  <div id="app">
    <!-- <bu-input type="text" v-model="inputValue1" clearable ></bu-input>
    <bu-input type="password" v-model="inputValue2" showPassword ></bu-input> -->
    <bu-switch v-model="switchValue" name="sven"></bu-switch>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      inputValue1: '111',
      inputValue2: '222',
      switchValue: true
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
