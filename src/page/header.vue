<template>
<div>
  <div class="head">
    <div class="wd1200">
        <span style="margin-left: 100px;font-size: 18px;font-weight: bold;color: #666666;">
            距<span id="gknd">2022</span>年高考仅剩<span style="font-size: 23px;color: red;" id="gkdjs">140</span>天
        </span>
        <div class="optbox">
            <a class="lgbox" href="/page/login"><img src="/images/icon_user.png">登录</a><a href="/page/register/register" class="rgbox">注册</a>
        </div>
        <a href="/page/help/help" class="helpbox" target="_blank"><img src="/images/icon_help.png">帮助</a>
    </div>
  </div>
    <div class="nav">
    <div class="wd1200">
        <a href="javascript:;" class="logobox"><img src="/images/icon_logo.png"></a>
        <div class="navlist">
            <router-link :to="{name:'首页',path:'/home'}" class="li"><span>首页</span></router-link>
            <div class="li zycx"><span>智能填报</span></div>
            <div class="li sylc"><span>大学选专业</span></div>
            <div class="li yxtj"><span>专业选大学</span></div>
            <div class="li xkcp"><span>新高考选科</span></div>
            <div class="li lnsj" @click="goDataCenter"><span>数据中心</span></div>
            <div class="li zycp"><span>专业定位</span></div>
            <div class="li yhzx"><span>用户中心</span></div>
            <router-link :to="{name:'在线购卡',path:'/onlineBuyCard'}" class="li"><span>在线购卡</span></router-link>
        </div>
    </div>
  </div>  
  </div>
</template>
<script>
export default{
  data(){
   return {

   }
  },
  methods:{
    goDataCenter(){
       this.$router.push({path:'/home/dataCenter',query:{time:Date.now()}});
        // const time=Date.now();
        // this.$router.push({name:'数据中心',params: { userId: time }})
    }
  }
}

</script>

<style>

/*头部*/
.head {height:38px;font-size:14px;font-weight:400;background:rgb(240, 242, 240);}
.head .wd1200{overflow:hidden;}
.head .locationbox img {vertical-align:middle;margin:-3px 5px 0px 0px;}
.head .locationbox .pname{color:#31853d;line-height: 38px;}
.head .optbox{float:right;color:#565656;line-height: 38px;}
.head .optbox .lgbox {position:relative;padding-right: 8px;display: inline-block;cursor: pointer;color: #666;}
.head .optbox img {vertical-align:middle;margin:-3px 5px 0px 0px;}
.head .optbox .lgbox::after {position:absolute;content: "";width: 1px;height: 14px;display: inline-block;right: 0px;top: 12px;background: rgb(86, 86, 86);}
.head .optbox .rgbox{padding-left:6px;display:inline-block;cursor: pointer;color:#666;}
.head .lginfo{float:right;line-height:38px;color:#565656;margin-right: 35px;}
.head .lgout{display:inline-block;cursor:pointer;color:#565656;}
.head .lgout img{vertical-align:middle;margin:-1px 5px 0px 0px;}
.head .lginfo .username{border-bottom:1px solid #565656;margin-right:15px;}
.head .lginfo .subject{color:#31853d;margin-right:15px;}
.head .lginfo .score{color:#31853d;margin-right:20px;}
.head .helpbox{float: right;color:#666666;line-height: 38px;margin-right: 20px;}
.head .helpbox img {vertical-align:middle;margin:-3px 4px 0px 0px;}
/*导航*/
.nav {height:88px;background:#31853d;}
.nav .wd1400{overflow:hidden;}
.nav .wd1200{overflow:hidden;}
.nav .logobox{float:left;}
.nav .logobox img{margin-top: 22px;}
.nav .navlist{float: left;margin-left: 20px;font-size: 0px;}
.nav .navlist .li{display:inline-block;font-size:18px;color:#fff;line-height:88px;cursor:pointer;padding:0px 9px;}
.nav .navlist a{color:#fff;}
.nav .navlist .li.lcjy{padding-right:0px;}
.nav .navlist .li span{position:relative;}
.nav .navlist .li.router-link-exact-active span::after, .nav .navlist .li:hover span::after{content:"";position:absolute;left:2px;right:2px;bottom:-8px;height:3px;background: rgb(255, 255, 255);}
</style>