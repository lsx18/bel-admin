/**
 * 学员课程 - 学员管理
 * @author zml
 * @version 2017-06-22
 */
import { Http } from '@/utils'
import { STUDENT } from '../mutationTypes'

export default {
  state: {
    // 学员列表
    list: {
      data: [],
    },

    // 学员签约产品列表
    product_list: {
      data: [],
    },
  },

  mutations: {
    // 学员列表
    [STUDENT.STUDENT.INIT](state, list) {
      state.list = list
    },
    // 删除学员
    [STUDENT.STUDENT.DELETE](state, id) {
      state.list.data = state.list.data
        .filter(item => item.id !== id)
    },

    // 学员签约产品列表
    [STUDENT.STUDENT.PRODUCT.INIT](state, product_list) {
      state.product_list = product_list
    },
  },

  actions: {
    // 学员列表接口
    [STUDENT.STUDENT.INIT]({ commit }, query = '') {
      return Http.get(`/student${query}`)
        .then((res) => {
          commit(STUDENT.STUDENT.INIT, res)
        })
    },
    // 删除学员接口
    [STUDENT.STUDENT.DELETE]({ commit }, id) {
      return Http.delete(`/student/${id}`)
        .then(() => {
          commit(STUDENT.STUDENT.DELETE, id)
        })
    },

    // 学员签约产品列表接口(传入学生id和query)
    [STUDENT.STUDENT.PRODUCT.INIT]({ commit }, { id, query = '' }) {
      return Http.get(`/student/stock/${id}${query}`)
        .then((res) => {
          commit(STUDENT.STUDENT.PRODUCT.INIT, res)
        })
    },
  },

}

