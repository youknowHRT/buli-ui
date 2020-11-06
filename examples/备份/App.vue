<template>
  <div id="app">
    <bu-button type='primary' disabled>爱你</bu-button>
    <bu-button type='primary' @click="visible=true" icon="bu-icon-search">dialog</bu-button>
    <hr>
    <bu-dialog  :visible.sync="visible">
      <template v-slot:title>
        <span>
          请选择小精灵
        </span>
      </template>
      <template>
        <ul>
          <li>蒜头王八</li>
          <li>喷火蜥蜴</li>
          <li>滋水王八</li>
          <li>黄皮耗子</li>
        </ul>
      </template>
      <template v-slot:footer>
        <bu-button type='primary'>确认</bu-button>
        <bu-button>取消</bu-button>
      </template>
    </bu-dialog>
    <hr>
    <bu-input></bu-input>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      visible: false
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
