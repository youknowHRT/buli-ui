<template>
    <div class="bu-radio-group">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'BuRadioGroup',
  data () {
    return {}
  },
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>
