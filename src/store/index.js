import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
	namespaced: true,
	modules: {
		todo,
		user,
	}
})