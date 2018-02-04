<template>
  <div class="mySwiper" style="position: relative;">
    <swiper :options="swiperOption"  ref="mySwiper">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="item in items">
        <img :src="item" style="height: 4.8rem;width: 100%;">

      </swiper-slide>
      <!-- 这是轮播的小圆点 -->
    </swiper>
    <div class="swiper-pagination" slot="" style="position: absolute;bottom: .2rem;"></div>

  </div>
</template>



<script>
  import { baseUrl ,userId}  from '../../api/config.js'
  import axios  from '../../commonJs/http'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        items: [ '/static/img/pro_1.439a222.jpg', '/static/img/pro_1.439a222.jpg', '/static/img/pro_1.439a222.jpg ' ],
        swiperOption: {
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          pagination: {
            el:'.swiper-pagination'
          },
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          slidesPerView: 'auto',
          centeredSlides: true,
          paginationClickable: true,
          spaceBetween: 30,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = swiper.realIndex+1;
            this.index = swiper.realIndex;
          }
        }
      }
    },
    //定义这个sweiper对象
    computed: {
      axios.get(baseUrl+ 'get_jishu_four')
      .then(function (res) {
        console.log(res)
      })
      .catch(function (error) {
        console.log(error)
      })



      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted () {
      //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
      this.swiper.slideTo(0, 0, false);
    }

  }
</script>
<style scoped>
  .swiper-pagination{
    width: .8rem;
    display: flex;
    left: calc(50% - .4rem);
    justify-content: space-between;
  }

</style>

