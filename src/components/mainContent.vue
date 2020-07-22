<template>
  <div class="wrapper">
    <div class="header-box" id="header-box">
      <div class="container-box">
        <a :href="bannerUrl" target="_blank"><img :src="bannerImg" class="banner-img" width="980" height="203" /></a>
      </div>
    </div>
    <div class="page-box01" id="page-box01">
      <div class="container-box">
        <h3 class="title-box" v-text="pageData01.title"></h3>
        <p v-for="item in pageData01.intro" :key="item">{{item}}</p>
      </div>
    </div>
    <div class="page-box02" id="page-box02">
      <div class="container-box">
      <h3 class="title-box" v-text="pageData02.title"></h3>
      <ul class="hero-list">
        <li v-for="item in pageData02.heroList" :key="item.heroName">
          <img :src="item.heroImg" width="170" height="255" alt="" />
          <h4>{{item.heroName}}</h4>
          <p>{{item.occupation}}</p>
        </li>
      </ul>
      </div>
    </div>
    <div class="page-box03" id="page-box03">
      <div class="container-box">
      <h3 class="title-box" v-text="pageData03.title"></h3>
      <div class="tab-box">
        <a href="javascript:void(0)" v-for="(item, index) in pageData03.tabList" :key="item.name" :class="{active:index === pageData03.activeIndex}" @click="tabEvent(index)">{{item.name}}</a>
      </div>
      <div class="film-content">
        <div class="film-part" v-for="(item, index) in pageData03.filmList" :key="item.name"  :class="{active:index===pageData03.activeIndex}">
          <a :href="item.url" :title="item.name" target="_blank"><img :src="item.img" width="260" height="360" :alt="item.name" /><i class="i-mask"></i><i class="i-play"></i></a>
        </div>
      </div>
      </div>
    </div>
    <div class="page-box04" id="page-box04">
      <div class="container-box">
      <h3 class="title-box" v-text="pageData04.title"></h3>
      <div class="roll-box">
        <swiper ref="mySwiper" :options="swiperOption" id="mySwiper">
        　　<swiper-slide v-for="item in pageData04.rollList" :key="item.name">
        　　　　<img :src="item.img" width="440" height="330" alt="" />
        　　</swiper-slide>
        　　<div class="swiper-pagination" slot="pagination" id="swiper-pagination"></div>
        </swiper>
      
      </div>
    </div>
  </div>
  <div class="fixedBar" id="fixedBar">
    <a href="javascript:void(0)">故事概况</a>
    <a href="javascript:void(0)">草帽海贼成员</a>
    <a href="javascript:void(0)">海贼王剧场版</a>
    <a href="javascript:void(0)">兄弟的羁绊</a>
    <a href="javascript:void(0)">返回顶部</a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'mainContent',
  data () {
    return {
     bannerUrl:'https://www.iqiyi.com/lib/m_200067914.html?src=search',
     bannerImg:'https://wengr.com/assets/banner-img.jpg',
     pageData01:{
       title:'一、故事概况',
       intro:['拥有财富、名声、权力，这世界上的一切的男人“海贼王”哥尔·D·罗杰，在zhi被行刑受死之前说了一句话，让全世界的人都涌向了大海。“想要我的宝藏吗？如果想要的话，那就到海上去找吧，我全部都放在那里。”，世界开始迎接“大海贼时代”的来临。','时值“大海贼时代”，为了寻找传说中海贼王罗杰所留下的大秘宝“ONE PIECE”，无数海贼扬起旗帜，互相争斗。','有一个梦想成为海盗的少年叫路飞，他因误食“恶魔果实”而成为了橡皮人，在获得超人能力的同时付出了一辈子无法游泳的代价。十年后，路飞为实现与因救他而断臂的香克斯的约定而出海，他在旅途中不断寻找志同道合的伙伴，开始了以成为海贼王为目标的伟大的冒险旅程。']
     },
     pageData02:{
       title:'二、草帽海贼团成员大集合',
       heroList:[{
         heroImg:'https://wengr.com/assets/hero-img01.jpg',
         heroName:'蒙奇·D·路飞',
         occupation:'船长'
       },{
         heroImg:'https://wengr.com/assets/hero-img02.jpg',
         heroName:'罗罗诺亚·索隆',
         occupation:'剑士'
       },{
         heroImg:'https://wengr.com/assets/hero-img03.jpg',
         heroName:'文斯莫克·山治',
         occupation:'厨师'
       },{
         heroImg:'https://wengr.com/assets/hero-img04.jpg',
         heroName:'乌索普',
         occupation:'狙击手'
       },{
         heroImg:'https://wengr.com/assets/hero-img05.jpg',
         heroName:'娜美',
         occupation:'航海士'
       },{
         heroImg:'https://wengr.com/assets/hero-img06.jpg',
         heroName:'妮可·罗宾',
         occupation:'考古学家'
       },{
         heroImg:'https://wengr.com/assets/hero-img07.jpg',
         heroName:'弗兰奇',
         occupation:'船匠'
       },{
         heroImg:'https://wengr.com/assets/hero-img08.jpg',
         heroName:'托尼托尼·乔巴',
         occupation:'船医'
       },{
         heroImg:'https://wengr.com/assets/hero-img09.jpg',
         heroName:'布鲁克',
         occupation:'音乐家'
       },{
         heroImg:'https://wengr.com/assets/hero-img10.jpg',
         heroName:'“海侠”甚平',
         occupation:'舵手'
       }]
     },
     pageData03:{
       title:'三、海贼冒险剧场版',
       activeIndex:0,
       tabList:[{
         name:'剧场一'
         },{
         name:'剧场二'
         },{
         name:'剧场三'
         },{
         name:'剧场四'
         },{
         name:'剧场五'
         }],
       filmList:[{
         url:'https://www.iqiyi.com/v_19rro4gwqo.html',
         img:'https://wengr.com/assets/film-img01.jpg',
         name:'路飞篇：手掌岛的冒险'
       },{
         url:'https://www.iqiyi.com/v_19rro4glmc.html',
         img:'https://wengr.com/assets/film-img02.jpg',
         name:'梅利篇：另一名同伴的故事'
       },{
         url:'http://www.iqiyi.com/v_19rro4ggp4.html',
         img:'https://wengr.com/assets/film-img03.jpg',
         name:'FILM Z'
       },{
         url:'https://www.iqiyi.com/v_19rro4ghbc.html',
         img:'https://wengr.com/assets/film-img04.jpg',
         name:'强者天下'
       },{
         url:'https://www.iqiyi.com/v_19rro4hb8o.html',
         img:'https://wengr.com/assets/film-img05.jpg',
         name:'乔巴身世之谜：冬季绽放、奇迹的樱花'
       }]
     },
     pageData04:{
       title:'四、兄弟的羁绊',
       rollList:[{
         img:'https://wengr.com/assets/roll-img01.jpg',
         name:'轮播图1'
       },{
         img:'https://wengr.com/assets/roll-img02.jpg',
         name:'轮播图2'
       },{
         img:'https://wengr.com/assets/roll-img03.jpg',
         name:'轮播图3'
       },{
         img:'https://wengr.com/assets/roll-img04.jpg',
         name:'轮播图4'
       },{
         img:'https://wengr.com/assets/roll-img05.jpg',
         name:'轮播图5'
       },{
         img:'https://wengr.com/assets/roll-img06.jpg',
         name:'轮播图6'
       },{
         img:'https://wengr.com/assets/roll-img07.jpg',
         name:'轮播图7'
       }]
     },
     swiperOption: {
       autoplay:true,
       loop:true,
            pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          slidesPerView : 2
          }
    }
  },
  methods:{
    tabEvent(index){
      this.pageData03.activeIndex = index;
    }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted(){
        var sideNav=new Scroller({
          navId:"fixedBar",//浮动导航的ID
          navs:"a", //导航链接, 可以用标签名或者class名，例如：li或者snav
          conts:["page-box01","page-box02","page-box03","page-box04","header-box"], //内容板块ID
          cls:"active", //导航选中class
          drag:false //是否能拖动
      });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-box{width: 980px;margin: 0 auto;position: relative;}
.header-box a{display:block;width: 980px;height: 203px;position: relative;overflow: hidden;}
.header-box .banner-img{display: block;margin: 0 auto;width: 980px;height: 203px;transform: scale(1,1);transition: transform 0.5s;}
.header-box a:hover .banner-img{transform: scale(1.05,1.05);}

.title-box{font-size: 30px;color: #981e29;line-height: 40px;font-weight: bold;padding: 30px 0 15px;}
.page-box01 p{font-size:18px;color: #0c060a;text-indent: 2em;line-height: 24px;padding-bottom: 5px;}
.page-box02 .hero-list{width: 100%;font-size:0;text-align: center;}
.page-box02 .hero-list li{display: inline-block;vertical-align: top;width: 196px;height: 335px;}
.page-box02 .hero-list li img{display: block;width: 170px;height: 255px;margin: 0 auto;position: relative;top: 0;transition: all 0.2s;}
.page-box02 .hero-list li:hover img{box-shadow: 0 0 10px rgba(0,0,0,0.8);top: -10px;}
.page-box02 .hero-list li h4{font-size: 20px;color: #981e29;line-height: 24px;text-align: center;padding-top: 10px;font-weight: bold;}
.page-box02 .hero-list li p{font-size: 18px;color: #0c060a;line-height: 22px;text-align: center;}
.page-box03 .tab-box{width: 100%;font-size:0;text-align: center;}
.page-box03 .tab-box a{display:inline-block;vertical-align: top;width: 170px;height:30px;font-size: 20px;color: #fff;background-color: #de744d;text-align: center;line-height: 30px;margin: 0 13px;transition: background-color 0.3s;}
.page-box03 .tab-box a.active{background-color: #981e29;}
.page-box03 .film-content{width: 100%;padding-top: 30px;}
.page-box03 .film-content .film-part{display: none;}
.page-box03 .film-content .film-part.active{display: block;}
.page-box03 .film-content a{display: block;width: 400px;margin: 0 auto;position:relative;overflow:hidden;}
.page-box03 .film-content img{display: block;width: 100%;height: auto;}
.page-box03 .film-content .i-mask{display: block;width: 100%;height: 100%;position: absolute;left: 0;top: 0;background-color: rgba(0,0,0,0.1);opacity: 0;visibility: hidden;transition: all 0.1s;}
.page-box03 .film-content .i-play{display: block;width: 70px;height: 70px;background:url(https://wengr.com/assets/i-play.png) no-repeat;position:absolute;top: 50%;left: 50%;margin-top: -35px;margin-left: -35px;z-index: 2;opacity: 0;visibility: hidden;transform: scale(5,5);transition: all 0.35s;}
.page-box03 .film-content a:hover .i-mask{opacity: 1;visibility: visible;}
.page-box03 .film-content a:hover .i-play{opacity: 1;visibility: visible;transform: scale(1,1);}
.page-box04{padding-bottom: 100px;}
.page-box04 .roll-box{width: 940px;height: 330px;margin: 0 auto;position:relative;}
.page-box04 .roll-box .swiper-container{width: 940px;height: 380px;position:relative;overflow: hidden;}
.page-box04 .roll-box img{display: block;margin: 0 auto;}
.roll-box .swiper-container >>>span.swiper-pagination-bullet.swiper-pagination-bullet-active{background: #981e29;}
.fixedBar{width: 120px;height: 200px;position: fixed;right: 10px;top: 150px;}
.fixedBar a{display: block;width: 100%;height: 40px;background-color: #de744d;color: #fff;font-size: 16px;text-align: center;line-height: 40px;margin-bottom: 10px;}
.fixedBar a:hover{background-color: #981e29;}
</style>
