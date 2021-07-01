<template>
    <div class="sk">
        <div class="st">
                <h2 class="section-title"><a href="https://movie.douban.com">电影</a></h2>
            <ul>
                 <li><a href="https://movie.douban.com/nowplaying/">影讯&amp;购票</a></li>
             
                 <li class="site-nav-bt">
                     <a href="https://movie.douban.com/explore">选电影</a>
                     <img style="top: -5px; position: relative;" src="">
                 </li>
             
                 <li><a href="https://movie.douban.com/tv/">电视剧</a></li>
                 <li><a href="https://movie.douban.com/chart">排行榜</a></li>
                 <li><a href="https://movie.douban.com/tag/">分类</a></li>
                 <li><a href="https://movie.douban.com/review/best/">影评</a></li>
                 <li class="site-nav-bt"><a href="https://movie.douban.com/trailers">预告片</a></li>
                 <li><a href="https://movie.douban.com/askmatrix/hot_questions/all">问答</a></li>
      
      </ul></div>
    <div class="mian"><h2>
        正在热映
            &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
            <span class="pl">&nbsp;(
                    <a href="https://movie.douban.com/showtimes/" target="_self">更多</a>
                ) </span>
    </h2>
    <ul>
        <li v-for="(item,index) in list" :key="index">
    <div class="pic">
        <a href="https://movie.douban.com/subject/27046740/"><img :src='item.img' ></a>
    </div>
    <div class="title">
      <a href="https://movie.douban.com/subject/27046740/">{{item.name}}</a>
    </div>
    <div class="rating">
        <span class="allstar35"></span><i>{{item.shu}}</i>
    </div>
    <a href="https://movie.douban.com/subject/27046740/cinema/" class="bn-link bn-ticket">选座购票</a>
    </li>
    </ul>
    </div>

    <div class="je"><h2>
        近期热门
            &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
            <span class="pl">&nbsp;(
                
                    <a href="https://movie.douban.com/chart" target="_self">更多</a>
                ) </span>
    </h2>
    <ol>
    <li>
    <a href="https://movie.douban.com/subject/34845781/">鬼灭之刃 剧场版 无限列车篇</a>
    </li>
    <li>
    <a href="https://movie.douban.com/subject/30323120/">酒精计划</a>
    </li>
    <li>
    <a href="https://movie.douban.com/subject/35417202/">地球改变之年</a>
    </li>
    <li>
    <a href="https://movie.douban.com/subject/34865507/">小人物</a>
    </li>
    <li>
    <a href="https://movie.douban.com/subject/30458949/">无依之地</a>
    </li>
    <li>
    <a href="https://movie.douban.com/subject/30229667/">智能大反攻</a>
    </li>
    <li>
    <a href="https://movie.douban.com/subject/35076714/">扎克·施奈德版正义联盟</a>
    </li>
    <li>
    <a href="https://movie.douban.com/subject/2131664/">真人快打</a>
    </li>
    <li>
    <a href="https://movie.douban.com/subject/34779692/">新神榜：哪吒重生</a>
    </li>
    <li>
    <a href="https://movie.douban.com/subject/26949852/">徐福</a>
    </li>
  </ol>
    </div>
    </div>
</template>
<style>
.sk{width: 961.6px;margin-left: 20px;margin-top: 30px;}
.st h2 a{font: 24px Arial, Helvetica, sans-serif;
    color: #27a;text-decoration: none;margin-left: 1px;
    }
.st{margin-right: 20px;width: 100px;height: 296px;display: inline-block;}
.st ul{padding: 0;margin: 0;list-style: none;}
.st ul li{margin-top: 5px;}
.st ul a{text-decoration: none;color: #27a;}
.mian{display: inline-block;width: 522px;height: 535px;}
h2{font: 15px Arial, Helvetica, sans-serif;
    color: #072;
    margin: 0 0 5px 0;
    line-height: 150%;}
.mian img{width: 100px;}
.mian li{display: inline-block;width: 24.8%;
    vertical-align: top;
    text-align: center;
    font-size: 12px;margin-bottom: 20px;}
.mian li a{text-decoration: none;}
.je{display: inline-block;}
.je a{text-decoration: none;}
.je li{margin-top: 10px;font: 14px Helvetica,Arial,sans-serif;
    line-height: 1.4;color: #666;}

</style>
<script>
export default {
     data(){return{list:[
         {img:'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2640045162.webp',name:'人之怒',shu:'7.0'},
         {img:'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2654915204.webp',name:'选用',shu:'7.7'},
         {img:'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2651254245.webp',name:'稍后',shu:'5.6'},
         {img:'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2651254245.webp',name:'三国',shu:'4.4'},
         {img:'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2651254245.webp',name:'你的婚礼',shu:'8.0'},
         {img:'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2656407373.webp',name:'追汉级',shu:'9.0'},
         {img:'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2653946775.webp',name:'来了之级',shu:'7.6'},
         {img:'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2654767767.webp',name:'科科之怒',shu:'5.0'},
     ]}}
}
</script>
