<template>
  <label class="bu-radio" :class="{'is-checked':label===model}">
    <!-- 小圆 -->
    <span class="bu-radio__input">
      <span class="bu-radio__inner"></span>
      <input class="bu-radio__original" type="radio"
        :value="label"
        :name="name"
        v-model='model'
      >
    </span>
    <span class="bu-radio__label">
      <slot></slot>
      <!-- 如果没有插槽，就显示label -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'BuRadio',
  data () {
    return {
    }
  },
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isgroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        this.isgroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isgroup () {
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [Number, String, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  created () {
    console.log(this.RadioGroup)
  }
}
</script>

<style lang="scss">
.bu-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .bu-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .bu-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .bu-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .bu-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.bu-radio.is-checked {
  .bu-radio__input {
    .bu-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .bu-radio__laber {
    color: #409eff;
  }
}
</style>
