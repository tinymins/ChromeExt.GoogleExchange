/**
 * This file is part of vue-boilerplate.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import { isDevelop } from '@/utils/environment';
// globle and common
// import * as getters   from './getters'
// import * as actions   from './actions'
// import * as mutations from '@/store/mutations';
import commonModule from '@/store/modules/common';
import userModule from '@/store/modules/user';
import currencyModule from '@/store/modules/currency';

Vue.use(Vuex);
const store = new Vuex.Store({
  strict: isDevelop(),
  // state,
  // getters,
  // actions,
  // mutations,
});

store.registerModule('common', commonModule);
store.registerModule('user', userModule);
store.registerModule('currency', currencyModule);

export default store;
