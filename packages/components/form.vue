<template>
    <div class="bu-form">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'BuForm',
  data () {
    return {
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: ''
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>
