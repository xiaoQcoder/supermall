<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行', '新款', '精选']"
                 @tabClick="tabClick"/>
    <goods-list :goodsList="showGoods" />
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  // 公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  // 方法 
  import {getHomeMultidata, getHomeData} from 'network/home'


  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goodsList: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        currentType: 'pop'
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    created() {
      // 1.请求多个数据
      this.getMultidata()

      // 2.请求商品数据
      this.getHomeProducts('pop')
      this.getHomeProducts('new')
      this.getHomeProducts('sell')
      
    },
    methods: {
      // 事件监听
      tabClick(index) {
        // console.log(index);
        /* switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        } */
        this.currentType = index == 0?'pop' : index == 1?'new' : 'sell'
      },

      // 网络请求
      getMultidata() {
        getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
      },
      getHomeProducts(type) {
        const page = this.goodsList[type].page + 1
        getHomeData(type, page).then(res => {
          console.log(res);
          this.goodsList[type].list.push(...res.data.list)
        })
      }
    },
    computed: {
      showGoods() {
        return this.goodsList[this.currentType].list
      }
      
    }
  
  }
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 2000px;
}
.home-nav {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  background-color: var(--color-tint);
}
</style>
