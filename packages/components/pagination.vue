<template>
  <div class="bu-pagination" v-show="hideIfOnePage">
    <span class="nav" :class="{ disabled: currentPage === 1 }"
      ><icon
        class="bu-icon-arrow-left"
        @click="clickToPage(currentPage - 1)"
      ></icon
    ></span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="current" :key="page">{{ page }}</span>
      </template>
      <template v-else-if="page === '...'">
        <span :key="page.index" class="bu-separator"><icon class="bu-icon-more"></icon></span>
      </template>
      <template v-else>
        <span :key="page" @click="clickToPage(page)" class="normalPage">{{
          page
        }}</span>
      </template>
    </template>
    <span class="nav" :class="{ disabled: currentPage === totalPage }"
      ><icon
        class="bu-icon-arrow-right"
        @click="clickToPage(currentPage + 1)"
      ></icon
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
      default: false
    }
  },
  computed: {
    pages () {
      // 数组有两种状态，一种是currentPage=4之前的，一种是currentPage=4之后的，还有currentPage=totalPage-3的状态
      // 这是通用状态
      const general = [1, this.totalPage,
        this.currentPage, this.currentPage - 2,
        this.currentPage - 1, this.currentPage + 1, this.currentPage + 2]
      // page前部状态
      const frontPart = general.concat([2, 3, 4, 5, 6])
      // page后部状态
      const endPart = general.concat([this.totalPage - 1, this.totalPage - 2, this.totalPage - 3, this.totalPage - 4, this.totalPage - 5])
      const pages = this.currentPage <= 4 ? frontPart : (this.currentPage >= this.totalPage - 3 ? endPart : general)
      // 排序+过滤非正页码
      const u = this.unique(pages.sort((a, b) => a - b)).filter((ele) => ele >= 1 && ele <= this.totalPage)
      // 添加分隔符
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

<style lang="scss">
.bu-pagination {
  display: flex;
  user-select: none;
  span {
    display: flex;
    justify-content: center;
    align-content: center;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    font-weight: 700;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
    margin: 0 2px;
    cursor: pointer;
    icon {
      line-height: 28px;
    }
  }
  .normalPage:hover {
    color: #409eff;
  }
  .current {
    background-color: #409eff;
    color: #fff;
    cursor: default;
  }
  .bu-separator{
    cursor: default;
  }
  .nav:hover{
    color:  #409eff;
  }
  .disabled {
    cursor: not-allowed;
    &:hover{
      color:  #606266;
    }
  }
}
</style>
