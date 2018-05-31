/* Descript: Chunks Manager
 * Date: 2017-12-22 09:51:09
 * Author：Sa
 */

/* ChunkName: One */
const One = {
  Test1: () => import(/* webpackChunkName: "One" */ './test1.vue'),
  Test2: () => import(/* webpackChunkName: "One" */ './test2.vue'),
  Test3: () => import(/* webpackChunkName: "One" */ './test3.vue')
}

export default One
