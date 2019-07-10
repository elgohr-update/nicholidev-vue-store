import { Module } from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import RootState from '@vue-storefront/core/types/RootState'
import CategoryState from './CategoryState'

export const categoryNextStore: Module<CategoryState, RootState> = {
  namespaced: true,
  state: {
    categoriesMap: {},
    availableFilters: {},
    products: [],
    searchProductsStats: {}
  },
  getters,
  actions,
  mutations
}
