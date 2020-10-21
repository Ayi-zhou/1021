import Vue from 'vue'
import App from './App.vue'
import router from './router'

/*导入全局样式表*/
import './assets/css/global.css'

/*导入登录页面input图标*/
import './assets/font_1073811_5vrfz6cx9t2/iconfont.css'


/*配置axios*/
import axios from 'axios'
/*在设置axios的请求根路径 */
axios.defaults.baseURL='https://www.liulongbin.top:8888/api/private/v1/';
Vue.prototype.$http=axios;
import './plugins/element.js'
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
