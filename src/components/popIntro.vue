<template>
  <div>
    <div class="pop-intro" id="pop-intro" v-show="isShow">
      <div class="left-box">
        <h4>{{introData[index].name}}</h4>
        <p v-for="item in introData[index].content" :key="item">{{ item }}</p>
      </div>
      <img :src="introData[index].img" class="pop-img" width="700" height="853" alt />
      <a href="javascript:void(0)" class="pop-close" @click="diaClose">&times;</a>
    </div>
    <div class="mask-layer" v-show="isShow"></div>
  </div>
</template>

<script>
export default {
  name: "popIntro",
  props: ["index", "isShow"],
  data() {
    return {
      introDataNum: 0,
      showMask: true,
      introData: [
        {
          name: "“草帽”蒙奇·D·路飞（モンキーD·ルフィ/Monkey D. Luffy）",
          content: [
            "初次登场：漫画第1话，动画第1集",
            "年龄：17岁→19岁",
            "生日：5月5日（日本男孩节） [2] ",
            "星座：金牛座",
            "身高：172cm→174cm",
            "故乡：东海-哥雅王国-风车村",
            "身份：草帽一伙船长/草帽大船团船长",
            "恶魔果实：橡胶果实",
            "霸气：霸王色霸气、武装色霸气、见闻色霸气",
            "悬赏金：3000万贝里（可可亚西村事件）→1亿贝里（阿拉巴斯坦事件）→3亿贝里（司法岛事件)→4亿贝里（顶上战争后）→5亿贝里（德雷斯罗萨后）→15亿贝里（蛋糕岛事件）",
          ],
          img: "https://wengr.com/assets/hero-img01.jpg",
        },
        {
          name: "“海贼猎人”罗罗诺亚·索隆（ロロノア・ゾロ/Roronoa Zoro）",
          content: [
            "初次登场：漫画第3话，动画第2集",
            "年龄：19岁→21岁",
            "生日：11月11日",
            "星座：天蝎座",
            "身高：178cm→181cm（两年后）",
            "故乡：东海-霜月村",
            "身份：东海赏金猎人→草帽一伙剑士",
            "霸气：武装色霸气、见闻色霸气",
            "武器：和道一文字、雪走（已断）、三代鬼彻、秋水（已归还和之国）、阎魔",
            "悬赏：6000万贝里（阿拉巴斯坦事件）→1亿2000万贝里（司法岛事件）→3亿2000万贝里（德雷斯罗萨后）",
          ],
          img: "https://wengr.com/assets/hero-img02.jpg",
        },
        {
          name: "“黑足”文斯莫克·山治（ヴィンスモーク・サンジ/Vinsmoke Sanji）",
          content: [
            "初次登场：漫画第43话，动画第20集",
            "年龄：19岁→21岁",
            "生日：3月2日",
            "星座：双鱼座",
            "身高：177cm→180cm",
            "故乡：北海-杰尔马王国",
            "身份：杰尔马66成员→海上餐厅巴拉蒂副料理长→草帽一伙厨师/草帽团三主力之一",
            "能力：脚技、刀法、烹饪、月步、战斗服",
            "霸气：见闻色霸气、武装色霸气",
            "悬赏：7700万贝里（司法岛事件）→1亿7700万贝里（德雷斯罗萨后）→3亿3000万贝里（蛋糕岛事件）",
          ],
          img: "https://wengr.com/assets/hero-img03.jpg",
        },
        {
          name: "“狙击之王”&“GOD”乌索普（ウソップ/Usopp）",
          content: [
            "初次登场：漫画第23话，动画第9集",
            "年龄：17岁→19岁",
            "生日：4月1日",
            "星座：白羊座",
            "身高：174cm→176cm",
            "故乡：东海-西罗普村",
            "身份：乌索普海贼团船长→草帽一伙狙击手",
            "绰号：狙击王、长鼻子",
            "武器：弹弓“银河小弹珠”、橡皮筋、铁锤、巨型弹弓“兜”、“狙击王”的面具 、弹弓“黑兜”、POP GREEN、弹弓“成长黑兜”+“吞食草”等",
            "霸气：见闻色霸气",
            "悬赏：3000万贝里（以“狙击王”的身份在司法岛事件中）→2亿贝里（德雷斯罗萨后）",
          ],
          img: "https://wengr.com/assets/hero-img04.jpg",
        },
        {
          name: "“小贼猫”娜美（ナミ/Nami）",
          content: [
            "初次登场：漫画第8话，动画第1集",
            "年龄：18岁→20岁",
            "生日：7月3日",
            "星座：巨蟹座",
            "身高：169cm→170cm",
            "故乡：东海-可可亚西村",
            "身份：阿龙海贼团测量员→草帽一伙航海士",
            "武器：三截式长棍→天候棒（由乌索普发明）→完全版天候棒（由乌索普改良）→魔法天候棒（由气象岛学者改良）→大成版魔法天候棒（由乌索普、弗兰奇改良）",
            "悬赏：1600万贝里（司法岛事件）→6600万贝里（德雷斯罗萨后）",
          ],
          img: "https://wengr.com/assets/hero-img05.jpg",
        },
        {
          name: "“恶魔之子”妮可·罗宾（ニコ・ロビン/Nico Robin）",
          content: [
            "初次登场：漫画第114话，动画第67集",
            "年龄：28岁→30岁",
            "生日：2月6日",
            "星座：水瓶座",
            "身高：188cm",
            "三围：B99 W59 H89",
            "故乡：西海-考古之岛奥哈拉",
            "身份：奥哈拉岛考古学家→巴洛克工作社副社长Miss. All Sunday→草帽一伙考古学家",
            "恶魔果实：花花果实",
            "悬赏：7900万贝里（奥哈拉事件）→8000万贝里（司法岛事件）→1亿3000万贝里（德雷斯罗萨后）",
          ],
          img: "https://wengr.com/assets/hero-img06.jpg",
        },
        {
          name: "“改造人（铁人）”弗兰奇（フランキー/Franky）",
          content: [
            "初次登场：漫画第329话，动画第233集",
            "年龄：34岁→36岁",
            "生日：3月9日",
            "星座：双鱼座",
            "身高：225cm→240cm",
            "故乡：南海",
            "原居住地：伟大航路-水之都",
            "身份：水之七都汤姆工作室学徒→水之都“弗兰奇之家”老大→草帽一伙船匠",
            "武器：除了后背外浑身都是武器",
            "悬赏：4400万贝里（司法岛事件）→9400万贝里（德雷斯罗萨后）",
          ],
          img: "https://wengr.com/assets/hero-img07.jpg",
        },
        {
          name:
            "“爱吃棉花糖的”托尼托尼·乔巴（トニートニー・チョッパー/Tony Tony Chopper）",
          content: [
            "初次登场：漫画第134话，动画第81集",
            "年龄：15岁→17岁",
            "生日：12月24日",
            "星座：摩羯座",
            "故乡：伟大航路-磁鼓王国（路飞赶走瓦波尔国王后改名樱花王国）",
            "身份：磁鼓王国医生→草帽一伙船医",
            "喜欢的食物：棉花糖，巧克力，所有甜的食物",
            "恶魔果实：人人果实",
            "能力：8段变形，现能控制暴走形态需食用蓝波球",
            "悬赏：50贝里（司法岛事件）→100贝里（德雷斯罗萨后）",
          ],
          img: "https://wengr.com/assets/hero-img08.jpg",
        },
        {
          name: "“鼻歌”&“灵魂之王”布鲁克（ブルック/Brook）",
          content: [
            "初次登场：漫画第442话，动画第337集",
            "年龄：88岁→90岁",
            "生日：4月3日",
            "星座：白羊座",
            "身高：266cm→277cm",
            "体重：58kg",
            "故乡：西海",
            "身份：某国护卫战团团长→伦巴海贼团代理船长&剑士&音乐家→草帽一伙音乐家&剑士",
            "恶魔果实：黄泉果实",
            "武器：拐杖剑（丧魂之剑）",
            "悬赏：3300万贝里（50年前）→8300万贝里（德雷斯罗萨后）",
          ],
          img: "https://wengr.com/assets/hero-img09.jpg",
        },
        {
          name: "“海侠”甚平（ジンベエ/Jinbei）",
          content: [
            "初次登场：漫画第528话，动画第423集",
            "年龄：44岁→46岁",
            "生日：4月2日",
            "星座：白羊座",
            "身高：301cm",
            "故乡：鱼人岛",
            "能力：鱼人柔术、鱼人空手道",
            "霸气：武装色霸气，见闻色霸气",
            "身份：尼普顿军队士兵→太阳海贼团副船长→太阳海贼团船长→草帽一伙舵手",
            "悬赏：7600万贝里（太阳海贼团时期）→2亿5000万贝里（七武海时期） →4亿3800万贝里（顶上战争后）",
          ],
          img: "https://wengr.com/assets/hero-img10.jpg",
        },
      ],
    };
  },
  methods: {
    diaClose: function () {
      this.$emit('closepop');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pop-intro {
  width: 900px;
  height: 500px;
  background-color: #fff;
  border: 3px solid #981e29;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -453px;
  margin-top: -253px;
  z-index: 99999;
}
.pop-intro .left-box {
  padding: 20px 0 0 20px;
}
.pop-intro h4 {
  font-size: 20px;
  color: #981e29;
  font-weight: bold;
  line-height: 30px;
  padding-bottom: 20px;
}
.pop-intro p {
  font-size: 16px;
  color: #000;
  width: 500px;
  line-height: 22px;
  padding-bottom: 10px;
}
.pop-intro .pop-img {
  display: block;
  position: absolute;
  width: 260px;
  height: 390px;
  left: 570px;
  top: 50%;
  margin-top: -180px;
}
.pop-intro .pop-close {
  position: absolute;
  font-size: 50px;
  color: #de744d;
  top: 0;
  right: 15px;
  line-height: 60px;
}
.mask-layer {
  background-color: rgb(0, 0, 0);
  border-top: 1px solid rgb(0, 0, 0);
  position: absolute;
  height: 100%;
  z-index: 9998;
  width: 100%;
  left: 0px;
  top: 0px;
  opacity: 0.5;
}
</style>
