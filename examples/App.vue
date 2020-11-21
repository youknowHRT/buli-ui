<template>
  <div id="app">
    <!-- <bu-input type="text" v-model="inputValue1" clearable ></bu-input>
    <bu-input type="password" v-model="inputValue2" showPassword ></bu-input> -->
    <!-- <bu-switch v-model="switchValue" name="sven"></bu-switch> -->
    <!-- <bu-radio label='1' v-model="value">男</bu-radio>
    <bu-radio label='0' v-model="value">女</bu-radio> -->
    <!-- <bu-radio-group v-model="gender">
      <bu-radio label='1'>男</bu-radio>
      <bu-radio label='0'>女</bu-radio>
    </bu-radio-group> -->
    <!-- <bu-checkbox v-model="switchValue" label="22222"></bu-checkbox> -->
    <!-- <bu-checkbox-group v-model="arr">
      <bu-checkbox label="a"></bu-checkbox>
      <bu-checkbox label="b"></bu-checkbox>
    </bu-checkbox-group> -->
    <!-- <bu-form :model="model">
      <bu-form-item label="姓名">
        <bu-input :placeholder="model.inputValue1"></bu-input>
      </bu-form-item>
      <bu-form-item label="密码">
        <bu-input :placeholder="model.inputValue2" name="密码" type="password"></bu-input>
      </bu-form-item>
      <bu-form-item>
        <bu-button type="primary">确定</bu-button>
        <bu-button>{{model.animal}}</bu-button>
      </bu-form-item>
    </bu-form> -->
    <!-- <bu-pagination :totalPage="1" :currentPage.sync="aaa"/> -->
    <bu-button type="primary" disabled>点我</bu-button>
    <bu-button type="danger" @click="visible=true">点我</bu-button>
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
        <bu-button type='primary' @click="visible=false">确认</bu-button>
        <bu-button @click="visible=false">取消</bu-button>
      </template>
    </bu-dialog>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      model: {
        inputValue1: '111',
        inputValue2: '222',
        switchValue: true,
        gender: '1',
        animal: '蒜头王八'
      },
      arr: [],
      value: '',
      switchValue: '11111111',
      visible: false,
      aaa: 1
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
