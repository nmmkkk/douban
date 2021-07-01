<template>
    <div id="aa">
        <div id="ddlogo"></div>
        <div id="bbss">
            <form action="https://www.douban.com/search" method="get">
      <span class="inp">
<input type="text"  placeholder="书籍、电影、音乐、小组、小站、成员">
          </span>
    <span class="bn">
        <input type="submit" value="搜索">
        </span>
    </form>
        </div>
        <div id="lie">
            <ul>
                <li  class="book" ><RouterLink to='/mid'>dushu</RouterLink></li>
                <li><a   class="movie"><RouterLink to='/movie'>dushu</RouterLink></a></li>
                <li><a   class="music"><RouterLink to='/music'>dushu</RouterLink></a></li>
                <li><a   class="city" href="https://book.douban.com">jjllkkkk</a></li>
                <li><a   class="team" href="https://book.douban.com">豆瓣电影</a></li>
                <li><a   class="read" href="https://book.douban.com">豆瓣电影</a></li>
                <li><a   class="fm" href="https://book.douban.com">豆瓣电影</a></li>
                <li><a   class="dp" href="https://book.douban.com">豆瓣电影</a></li>
            </ul>
        </div>
    </div>
   
</template>
<style>
#lie ul{list-style: none;}
#lie {
    display: inline-block;
    margin-top: 6px;
    margin-left: 60px;}
.book{
   /* width: 40px;
    height: 20px;
    overflow: hidden;
    margin: 0;
    line-height: 20em;
    outline: none;
    background-position: 0 0;
    vertical-align: middle;
        display: inline-block;
    background-size: contain; */
    
    background: transparent url('../assets/4.png') no-repeat 0% }
    .movie{
    background: transparent url('../assets/4.png') no-repeat 14% }
    .music{background: transparent url('../assets/4.png') no-repeat 28% }
    .city{background: transparent url('../assets/4.png') no-repeat 42% }
    .team{background: transparent url('../assets/4.png') no-repeat 56% }
    .read{background: transparent url('../assets/4.png') no-repeat 70% }
    .fm{background: transparent url('../assets/4.png') no-repeat 85% }
    .dp{background: transparent url('../assets/4.png') no-repeat 100% }
  #lie ul>li {display: inline-block}
#aa {width: 1080px;
    margin: 0 auto 25px;}
#ddlogo {
    background: url('../assets/2.png') no-repeat ;
    display: inline-block;
    line-height: 24px;
    height: 24px;
    margin-top: 4px;
    margin-right: 24px;
    width: 73px;
    vertical-align: middle;
    background-size: contain;
    text-indent: -999em;
}
#bbss {
    display: inline-block;
    position: relative;
     vertical-align: middle;
    width: 270px;
    height: 30px;
    border: 1px solid #c3c3c3;
   }
    

.inp input {
   
    border: none;
    width: 240px;
    font-size: 13px;
    height: 20px;
    padding: 5px;
}
input::-webkit-input-placeholder {color: #c3c3c3;}

.bn {position: absolute;
    right: 0;
    top: 0;
    background: url('../assets/3.png')  50% 50% no-repeat;}
.bn input {
    border: none;
    margin-right: 3px;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    font-size: 0;
    color: transparent;
    background: transparent;
}
</style>