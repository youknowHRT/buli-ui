<template>
  <div class="bu-pagination">
    <template v-for="page in pages">
      {{ page }}
    </template>
  </div>
</template>

<script>
export default {
  name: 'BuPagination',
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    pages () {
      const pages = [1, this.totalPage,
        this.currentPage, this.currentPage - 2,
        this.currentPage - 1, this.currentPage + 1, this.currentPage + 2]
      const u = this.unique(pages.sort((a, b) => a - b))
      const u2 = u.reduce((prev, current, index, arr) => {
        if (u[index + 1] !== undefined && u[index + 1] - u[index] > 1) {
          prev.push(current)
          prev.push('...')
        } else {
          prev.push(current)
        }
        return prev
      }, [])
      return u2
    }
  },
  methods: {
    unique (arr) {
      const obj = {}
      arr.map((num) => {
        obj[num] = true
      })
      return Object.keys(obj).map((k) => parseInt(k, 10))
    }
  }
}
</script>

<style>
</style>
