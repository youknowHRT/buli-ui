<template>
  <label class="bu-checkbox" :class="{'is-checked':isChecked}">
    <span class="bu-checkbox__input">
      <span class="bu-checkbox__inner"></span>
      <input type="checkbox" class="bu-checkbox__original"
      :name="name"
      v-model='model'
      :value='label'
      >
    </span>
    <span class="bu-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'BuCheckbox',
  data () {
    return {
    }
  },
  computed: {
    model: {
      get () {
        return this.isgroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        this.isgroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isgroup () {
      return !!this.CheckboxGroup
    },
    isChecked () {
      return this.isgroup ? this.model.includes(this.label) : this.model
    }
  },
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.bu-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .bu-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .bu-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0) ;
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .bu-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .bu-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.bu-checkbox.is-checked{
  .bu-checkbox__input{
    .bu-checkbox__inner{
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  // .bu-checkbox__label{
  //   color: #409eff;
  // }
}
</style>
