<template>
  <div class="bu-pagination">
    <span
      ><i class="bu-icon-arrow-left" @click="clickToPage(currentPage - 1)"></i
    ></span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="ss" :key="page">{{ page }}</span>
      </template>
      <template v-else-if="page === '...'">
        <span :key="page.index"><i class="bu-icon-more"></i></span>
      </template>
      <template v-else>
        <span :key="page" @click="clickToPage(page)">{{ page }}</span>
      </template>
    </template>
    <span
      ><i class="bu-icon-arrow-right" @click="clickToPage(currentPage + 1)"></i
    ></span>
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
      // 数组有两种状态，一种是currentPage=4之前的，一种是currentPage=4之后的，要
      const oldone = [1, this.totalPage,
        this.currentPage, this.currentPage - 2,
        this.currentPage - 1, this.currentPage + 1, this.currentPage + 2]
      const newone = oldone.concat(1, 0, [2, 3, 4, 5, 6])
      const pages = this.currentPage <= 4 ? newone : oldone
      const u = this.unique(pages.sort((a, b) => a - b)).filter((ele) => ele >= 1 && ele <= this.totalPage)
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
      return Object.keys(obj).map((ele) => parseInt(ele, 10))
    },
    clickToPage (page) {
      if (typeof page === 'number' && page >= 1 && page <= this.totalPage) {
        this.$emit('update:currentPage', page)
      }
    }
  }
}
</script>

<style>
.ss {
  color: red;
}
</style>
