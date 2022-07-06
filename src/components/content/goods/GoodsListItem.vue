<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collection-favour">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "GoodsListItem",
    data() {
      return {

      }
    },
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom:40px;
    position: relative;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    height: 100%;
  }

  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    font-size: 12px;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collection-favour {
    position: relative;
  }
  .goods-info .collection-favour::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
