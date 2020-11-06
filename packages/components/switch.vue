<template>
  <div
    class="bu-switch"
    :class="{'is-checked': this.value }"
    @click="handleClick"
  >
    <input
      class="bu-switch__input"
      type="checkbox"
      :name="name"
      ref="input"
    >
    <span class="bu-switch__core" ref="core">
      <span class="bu-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BuSwitch',
  data () {
    return {
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setBackgroundColor()
      this.$refs.input.checked = this.value
    },
    setBackgroundColor () {
      if (this.activeColor || this.inactiveColor) {
        const newcolor = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.backgroundColor = newcolor
        this.$refs.core.style.borderColor = newcolor
      }
    }
  },
  mounted () {
    this.setBackgroundColor()
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss">
.bu-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .bu-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .bu-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .bu-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.bu-switch.is-checked {
  .bu-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .bu-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
