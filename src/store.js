import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count:0,
  myRight: '-100%',
};

const mutations = {
	updatamyRight (state,myRight) {
	   state.myRight = myRight
	},
	increment(state){
		state.count++
	}
};

const store = new Vuex.Store({
  state: state,
  mutations: mutations
});

export default store