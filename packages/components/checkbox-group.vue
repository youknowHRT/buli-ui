<template>
    <div class="bu-checkbox-group">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'BuCheckboxGroup',
  data () {
    return {
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>
