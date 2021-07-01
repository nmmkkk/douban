<template>
    <div class="dj">
        <div class="ml">
            <ul class="tab-start">
      <li @click="changeSty" :class="{'on':mm}">短信登入/注册</li>
      <li  @click="changeStyle()" :class="{'on':nn}">密码登录</li>
    </ul>
        </div>
        <div>
            <div class="zixi">
                <span v-show="mm">请仔细阅读</span>
                <a href="https://accounts.douban.com/passport/agreement">{{zha}}</a><p></p>
            </div>
            <div class="sjh">
               <span v-show="mm"> +86</span>
            <input type="text" :placeholder='jj'>
            </div>
            <div class="yzm">
            <input type="text" :placeholder='ff'>
          <span v-show="mm">获取验证码</span>
            </div>
            <div class="dr">登入豆瓣</div>
        </div>
        <div class="zbd"><p>{{zh}}</p></div>
        <div class="dsf">
第三方登录：<a href="" title="用微信登录"></a><a href=""></a>
        </div>
        
        </div>
</template>
<script>
export default {
    data(){return{
        mm:true,nn:false,
        zhao:'短信登入/注册',mima:"手机号",zha:'豆瓣使用协议、豆瓣个人信息保护政策',
        zh:'收不到验证码',jj:'手机号',ff:'验证码'
        
        }},
    methods:{
        changeSty(){this.nn=0,this.mm=1,
        // zhao='手机号',mima='密码登录',
        this.zha='豆瓣使用协议、豆瓣个人信息保护政策',this.zh='收不到验证码',this.jj='手机号',this.ff='验证码'},
        changeStyle(){this.nn=1,this.mm=0,
        // zhao='手机号/邮箱',mima='密码',
        this.zha='找回密码',this.zh='海外登录',this.jj='手机号/邮箱',this.ff='密码'}
        }
}
</script>
<style>
.dsf a{background: url('../assets/8.svg');height: 22px;
    width: 22px;
    margin: 0 0 0 12px;display: inline-block;
    vertical-align: middle;background-position: 50% 50%;
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: 100% 100%;
    }
.dsf{width: 280px;height: 32.8px;color: #9b9b9b;font-size: 10px;border-top: 1px solid #ddd;padding-top: 10px;}
.zbd p{color: #41ac52;float: right;}
.zbd{width: 280px;height: 40.8px;}
.dr{width: 280px;height: 33.2px;border-radius: 4px;line-height: 2.6;color: #fff;
text-align: center;background: #41ac52; }
.yzm{
    width: 280px;height: 33.2px;background:#fff;margin-bottom: 10px;
border-radius: 2px;line-height: 2.6;color: #41ac52;}
.yzm input{border: none;}
.sjh{
    width: 280px;height: 33.2px;background:#fff;
    margin-bottom: 10px;border-radius: 2px;line-height: 2;color: #000;
    font-weight: 600;font-size: 15px;}
.sjh input{margin-left: 10px;border: none;}

.zixi a{text-decoration: none;color: #41ac52;}
.zixi{margin-bottom: 10px;
    font-size: 12px;color: #9b9b9b;width: 280px;height: 19.2px;}
.ml{margin-top: 30px;}
.dj ul{list-style: none;padding: 0px;text-align:center;
    font-size: 13px;color: #9b9b9b;}
.dj ul>li{display: inline-block;width: 140px;height: 26px;line-height: 2;cursor: pointer;}
.on{border-bottom: 1px solid #494949;display: block;color: #333;
    font-weight: 600;}
.dj{
    margin-top: -30px;
    margin-right: 30px;
    width: 300px;height: 300px;
    float:right;

    }
    
</style>