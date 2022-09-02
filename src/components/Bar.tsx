/*
 * @Author: Caroline-JYH 745059996@qq.com
 * @Date: 2022-09-02 10:00:05
 * @LastEditors: Caroline-JYH 745059996@qq.com
 * @LastEditTime: 2022-09-02 10:21:49
 * @FilePath: \vue-ts\src\components\Bar.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from 'vue'
interface PropsType {
    msg: string
}

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup () {
    return (props:PropsType) => <h2>{props.msg}</h2>
  }
})
