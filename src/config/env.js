// 阿里矢量图标库配置
let iconfontVersion = ['567566_pwc3oottzol'];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
console.log(window.location)
let baseUrl = 'http://222.247.20.138:8001';
let codeUrl = `${baseUrl}/code`
const env = process.env
if (env.NODE_ENV === 'development') {
    baseUrl = ''; // 开发环境地址
} else if (env.NODE_ENV === 'production') {
    baseUrl = 'https://api.xhj.com/'; //生产环境地址
} else if (env.NODE_ENV === 'test') {
    baseUrl = window.location.origin; //测试环境地址
    // baseUrl = "http://192.168.1.215:8001"; //测试环境地址
}
export {
    baseUrl,
    iconfontUrl,
    iconfontVersion,
    codeUrl,
    env
}