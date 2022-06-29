<template>
  <swiper>
      <swiper-item v-for="item in banners"  :key="index">
        <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      </swiper-item>
    </swiper>
</template>

<script type="text/javascript">
  import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

  export default {
    name: "homeSwiper",
    data() {
      return {

      }
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      },

    },
    components: {
      Swiper, 
      SwiperItem
    }
  }
</script>

<style lang="stylus" scoped>
</style>
