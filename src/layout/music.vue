<template>
    <div>
        <div class="sg">
            <div class="sidenav">
    <h2 class="sect"><a href="https://music.douban.com">音乐</a></h2>
    
  
  <div class="side-links nav-anon">
      <ul>
                          
                 <li><a href="https://music.douban.com/artists/">音乐人</a></li>
             
                 <li><a href="https://www.douban.com/wetware/">潮潮豆瓣音乐周</a></li>
             
                 <li><a href="https://music.douban.com/artists/royalty/">金羊毛计划</a></li>
             
                 <li><a href="https://music.douban.com/topics/">专题</a></li>
             
                 <li><a href="https://music.douban.com/chart">排行榜</a></li>
             
                 <li><a href="https://music.douban.com/tag/">分类浏览</a></li>
             
                 <li><a href="https://music.douban.com/review/latest/">乐评</a></li>
             
                 <li><a href="https://douban.fm/?from_=music_nav">豆瓣FM</a></li>
             
                 <li><a href="https://douban.fm/explore/songlists/">歌单</a></li>
             
                 <li><a href="https://artist.douban.com/abilu/">阿比鹿音乐奖</a></li>
      
      </ul>
  </div>

    


    <div class="apps-list">
    <ul>
        <li>
            <a href="https://douban.fm/app?from_=shire_anonymous_home" class="lnk-icon">
                <i class="app-icon app-icon-fm"></i>
            </a>
            <a href="https://douban.fm/app?from_=shire_anonymous_home">豆瓣FM</a>
        </li>
        <li>
            <a href="https://artist.douban.com/app" class="lnk-icon">
                <i class="app-icon app-icon-artists"></i>
            </a>
            <a href="https://artist.douban.com/app">豆瓣音乐人</a>
        </li>
    </ul>
    </div>

  </div>
        </div>
        <div class="mmian"><h2>
      豆瓣新碟榜

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

        <div></div>
    </div>
</template>
<style>
.sg h2 a{font: 24px Arial, Helvetica, sans-serif;
    color: #27a;text-decoration: none;margin-left: 1px;}
.sg ul li{margin-top: 5px;text-decoration: none;}
.sg ul a{text-decoration: none;color: #27a;}
.sg ul{padding: 0;margin: 0;list-style: none;}
.sg{margin-right: 20px;width: 100px;height: 296px;display: inline-block;}
.mmian{display: inline-block;width: 522px;height: 535px;}
.mmian h2 span a{text-decoration: none;}
.mmian li{display: inline-block;width: 24.8%;
    vertical-align: top;
    text-align: center;
    font-size: 12px;margin-bottom: 20px;}
</style>
<script>
export default {
     data(){return{list:[
         {img:'https://img2.doubanio.com/view/subject/s/public/s33928293.jpg',name:'人之怒',shu:'7.0'},
         {img:'https://img1.doubanio.com/view/subject/s/public/s33926077.jpg',name:'选用',shu:'7.7'},
         {img:'https://img1.doubanio.com/view/subject/s/public/s33911287.jpg',name:'稍后',shu:'5.6'},
         {img:'https://img1.doubanio.com/view/subject/s/public/s33927159.jpg',name:'三国',shu:'4.4'},
         {img:'https://img1.doubanio.com/view/subject/s/public/s33924727.jpg',name:'你的婚礼',shu:'8.0'},
         {img:'https://img9.doubanio.com/view/subject/s/public/s33918936.jpg',name:'追汉级',shu:'9.0'},
         {img:'https://img9.doubanio.com/view/subject/s/public/s33927164.jpg',name:'来了之级',shu:'7.6'},
         {img:'https://img2.doubanio.com/view/subject/s/public/s33919991.jpg',name:'科科之怒',shu:'5.0'},
     ]}}
}
</script>