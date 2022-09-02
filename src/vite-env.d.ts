/*
 * @Author: Caroline-JYH 745059996@qq.com
 * @Date: 2022-09-01 10:50:32
 * @LastEditors: Caroline-JYH 745059996@qq.com
 * @LastEditTime: 2022-09-02 09:06:12
 * @FilePath: \vue-ts\src\vite-env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>
  export default component
}
