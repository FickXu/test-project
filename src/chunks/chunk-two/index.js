/* Descript: Chunks Manager
 * Date: 2017-12-22 09:51:09
 * Author：Sa
 */

/* ChunkName: Two */
const Two = {
  Test4: () => import(/* webpackChunkName: "Two" */ './test4.vue'),
  Test5: () => import(/* webpackChunkName: "Two" */ './test5.vue')
}

export default Two
