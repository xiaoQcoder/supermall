<template>
  <div class="goodsList">
    <goods-list-item v-for="(item, index) in goodsList" :goodsItem="item" :key="index"/>
  </div>
</template>

<script type="text/javascript">
import GoodsListItem from './GoodsListItem.vue'
  export default {
    name: "GoodsList",
    data() {
      return {

      }
    },
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

</style>
