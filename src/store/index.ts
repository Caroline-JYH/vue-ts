/*
 * @Author: Caroline-JYH 745059996@qq.com
 * @Date: 2022-09-02 10:50:49
 * @LastEditors: Caroline-JYH 745059996@qq.com
 * @LastEditTime: 2022-09-02 11:17:35
 * @FilePath: \vue-ts\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
const useStore = defineStore('main', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  },
  actions: {
    increment () {
      this.count++
    }
  }
})
export default useStore
