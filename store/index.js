import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
      state: function() {
        return {
          schemas: {
						task: [
							{text: '題名', value: 'title'},
							{text: '本文', value: 'body' },
							{text: 'ステータス', value: 'status' },
						],
					},
        	data: {
						task: [
							{title: '掃除', body: '部屋の掃除をする', status: '完了'},
							{title: '買い物', body: '夕食のおかずを買いに行く'},
							{title: '洗濯', body: '洗濯する'},
						],
					},
					item: {
						task: {
							title: '',
							body: '',
							status: '',
						}
					}
      	}
			},
			mutations: {
				addItem: function(state, item) {
					state.data[item.key].push(item.value)
				},
			}
    })
}

export default createStore