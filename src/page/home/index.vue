<template>
  <basicContainer>
    <div class="loginPage">
      <div class="loginbox">
          <div class="title">用户登录</div>
          <form class="form-horizontal" action="/login/doLogin" method="post" id="loginForm" novalidate="novalidate">
              <div class="content">
                  <div class="inputbox">
                      <img src="/images/icon_phone.png" class="userimg" style="width: 13px;height: 18px">
                      <input id="username" name="username" type="text" placeholder="请输入注册的手机号码" class="txt usertxt valid" aria-required="true" aria-invalid="false">
                  </div>
                  <div class="inputbox">
                      <img src="/images/icon_password.png" class="pwdimg">
                      <input id="password" name="password" type="password" placeholder="请输入注册时自己设置的密码" class="txt pwdtxt valid" aria-required="true" aria-invalid="false">
                  </div>

                  <input type="button" value="登录" class="lgbtn">
                  <a href="/page/register/register" class="zcbtn">注册</a>
                  <div class="optbox">
                      <input type="checkbox" class="rembercheck" name="rembercheck" id="rembercheck" value="1"> <label for="rembercheck">记住我</label>
                      <div class="opt">
                          <a href="/page/register/forgetPwd" class="forgetpwd">忘记密码</a>
                        <!--  <a href="/page/register/register" class="register">注册</a>-->
                      </div>
                  </div>

              </div>
          </form>
      </div>
    </div>
  </basicContainer>
</template>
<script>
export default{
   data(){
     return {
     };
   },
   methods:{

   }
}
</script>
<style scoped>
.loginPage{
  height:600px;
}
/*登录框*/
.loginbox {position: absolute;right:10%;top:158px;width:386px;height:435px;box-shadow: rgba(46, 185, 66, 0.4) 1px 1px 6px 0px;z-index:3;background:rgb(255, 255, 255);border-radius:8px;}
.loginbox .title {font-size:18px;font-weight: bold;color:#31853d;height:64px;line-height:64px;padding-left:28px;border-bottom:1px solid rgb(231, 231, 231);}
.loginbox .inputbox {width:328px;height:43px;margin-left:28px;margin-top:21px;border:1px solid #e7e7e7;border-radius:2px;}
.loginbox .inputbox img{margin:12px 0px 0px 10px;}
.loginbox .inputbox .txt{width:285px;padding-left:5px;color:#aaa;font-size:14px;border:none;}
.loginbox .inputbox .txt.pwdtxt{margin-top:-6px;vertical-align:middle;}
.loginbox .lgbtn {width:282px;height:47px;color:#fff;font-size:16px;text-align:center;display:block;cursor:pointer;background:#31853d;border-radius:2px;margin:21px auto 0px;}
.loginbox .zcbtn {width:282px;height:37px;color:#fff;font-size:16px;text-align:center;display:block;cursor:pointer;background: #517c5e;border-radius:2px;margin:11px auto 0px;line-height: 37px;}

.loginbox .lgbtn:hover{opacity:0.9;filter:alpha(opacity=90);}
.loginbox .optbox {color:#565656;padding:16px 28px 0px;overflow:hidden;}
.loginbox .optbox .rembercheck {width:16px;height:16px;vertical-align:middle;cursor:pointer;border:1px solid #cccccc;border-image:initial;border-radius:3px;margin:-2px 0px 0px;}
.loginbox .optbox label{cursor:pointer;}
.loginbox .opt{float:right;margin-top:3px;cursor:pointer;}
.loginbox .opt a{color:#888888;}
.loginbox .forgetpwd{position:relative;padding-right:8px;}
.loginbox .sfbox{padding:28px 28px 0px;}
.loginbox .sfbox .name{color:rgb(136, 136, 136);display:inline-block;}
.loginbox .sfbox a{display:inline-block;width:44px;height:44px;vertical-align:middle;}
.loginbox .sfbox .qq{margin-left:5px;}
</style>