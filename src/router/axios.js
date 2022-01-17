import axios from 'axios'
import { baseUrl } from "@/config/env.js";
import { getToken } from '@/utils/auth';
import { serialize } from "@/util/util";

axios.defaults.baseURL = baseUrl;
//默认超时时间
axios.defaults.timeout = 180000;
//返回其他状态码
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500;
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
// NProgress 配置
NProgress.configure({
  showSpinner: false
});
let timer;
//http request拦截
axios.interceptors.request.use(
  config => {
    //开启 progress bar
    NProgress.start();
    const meta = config.meta || {};
    const isToken = meta.isToken === false;

    if (getToken() && getOtherToken() !== "rerw") {
      config.headers["Authorization"] = `Basic ${Base64.encode(
        `${website.clientId}:${website.clientSecret}`
      )}`;
      //让每个请求携带token
      if (!isToken) {
        config.headers[website.tokenHeader] = "bearer " + getToken();
      }

      if (store && store.getters && store.getters.userInfo) {

        let userInfo = store.getters.userInfo
        let stamp = Date.now()
        let valideCode = '0000'//process.env.VUE_APP_PWD

        config.headers["stamp"] = stamp;
        config.headers["jti"] = userInfo['jti']
        config.headers['valideToken'] = md5(`${userInfo['user_id']}${stamp}${valideCode}${userInfo['jti']}`)
      }
    } else if (getOtherToken()) {
      if (config.url.indexOf("user-details") > -1) {
        config.headers["Authorization"] = "bearer " + getOtherToken();
      } else {
        config.headers["Authorization"] = `Basic ${Base64.encode(
          `${website.clientId}:${website.clientSecret}`
        )}`;
        //让每个请求携带token
        if (!isToken) {
          config.headers[website.tokenHeader] = "bearer " + getOtherToken();
        }
      }
    } else {
      config.headers["Authorization"] = `Basic ${Base64.encode(
        `${website.clientId}:${website.clientSecret}`
      )}`;
    }
    //headers中配置text请求
    if (config.text === true) {
      config.headers["Content-Type"] = "text/plain";
    }
    //headers中配置serialize为true开启序列化
    if (config.method === "post" && meta.isSerialize === true) {
      config.data = serialize(config.data);
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
//http response 拦截
axios.interceptors.response.use(
  res => {
    //关闭 progress bar
    NProgress.done();
    //获取状态码
    const status = res.data.code || res.status;
    const statusWhiteList = website.statusWhiteList || [];
    const message = res.data.msg || res.data.error_description || "未知错误";
    //如果在白名单里则自行catch逻辑处理
    if (statusWhiteList.includes(status)) return Promise.reject(res);
    //如果是401则跳转到登录页面
    if (status === 401)
      store.dispatch("FedLogOut").then(() => router.push({ path: "/login" }));
    // 如果请求为非200否者默认统一处理
    if (status !== 200) {
      Message({
        message: message,
        type: "error"
      });
      return Promise.reject(new Error(message));
    }
    return res;
  },
  error => {
    NProgress.done();
    return Promise.reject(new Error(error));
  }
);

export default axios;
