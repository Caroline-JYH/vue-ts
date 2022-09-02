/*
 * @Author: Caroline-JYH 745059996@qq.com
 * @Date: 2022-09-01 10:50:32
 * @LastEditors: Caroline-JYH 745059996@qq.com
 * @LastEditTime: 2022-09-02 10:50:05
 * @FilePath: \vue-ts\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
