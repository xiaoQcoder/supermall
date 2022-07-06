<template>
  <div class="tab-control">
    <div class="tab-control-item" 
         v-for="(item, index) in titles"
         :class="{active: currentIndex === index}" 
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
    },
    components: {
    }
  }
</script>

<style scoped>
  .tab-control {
    z-index: 1;
    display: flex;
    position: sticky;
    top: 44px;
  }
  .tab-control-item {
    flex: 1;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
