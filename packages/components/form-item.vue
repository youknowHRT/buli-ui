<template>
  <div class="bu-form-item">
    <label :style="{width:this.Form.labelWidth}" class="bu-form-item__label">{{label}}</label>
    <div class="bu-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuFormItem',
  data () {
    return {
    }
  },
  props: {
    label: String
  },
  inject: ['Form']
}
</script>

<style lang="scss">
 .bu-form-item{
    margin-bottom: 25px;
    .bu-form-item__label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .bu-form-item__content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidden;
    }
  }
</style>
