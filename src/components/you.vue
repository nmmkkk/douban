<template>
    <div class="sji">
            <p class="pp">豆瓣<span>7.0</span></p>
            <a  class="xz" href="">下载豆瓣app</a>
            <span class="sp"><img src="../assets/6.png" alt=""></span>
             <i-dji></i-dji>
    </div>
</template>
<style>
.sp:hover{
    position: relative;
    width: 160px;height: 160px;
    left: 468px;top: 120px;
    display: inline-block;
    background:url('../assets/7.png') no-repeat;
    background-size: contain;

    }
.sji img{position: relative;
        top: 120px;left: 470px;
        width: 30px;
        height: 30px;border: 1px solid #48aa0d;
    border-radius: 2px; 
        }
.sji .pp{
    position: relative;
    top: 90px;left: 475px;
    margin: 7px 0;
    font-size: 25px;
    color: #111;
    line-height: 24px;
}
.sji .xz{
    position: relative;
    top: 110px;left: 462px;
    width: 114px;
    background: #00B51D;
        color: #FFF;
        text-decoration: none;
    height: 30px;
    padding: 9px 21px;
    border-radius: 2px;
    font-size: 12px;}
        
.sji{
    width: 981.6px;
    height: 304px;
    background: #edf4ed url("../assets/5.jpg") no-repeat -70%;
    background-size: contain;
    }
</style>
<script>
import iDji from '../components/dji';
export default { components:{iDji}
    
}
</script>