// 引入的不再是vue构造函数了，引入的是一个名为createApp的工厂构造函数
import { createApp } from "vue";
import App from "./App.vue";

// 创建应用实例对象——app(类似于之前vue2中的vm，但app比vm更“轻”)
const app = createApp(App);

// 挂载
app.mount("#app");

/**
 * 取消挂载
 *  setTimeout(()=>{
  app.unmount("#app");
}, 1000) */

/* const vm = new Vue({
  render:h => h(App)
})
vm.$mount("#app") */
