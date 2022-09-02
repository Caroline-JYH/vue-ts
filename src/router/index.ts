/*
 * @Author: Caroline-JYH 745059996@qq.com
 * @Date: 2022-09-02 10:43:44
 * @LastEditors: Caroline-JYH 745059996@qq.com
 * @LastEditTime: 2022-09-02 11:21:55
 * @FilePath: \vue-ts\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
