import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
      state: function() {
        return {
			schemas: {
				user: [
					{text: '名前', value: 'name'},
					{text: 'メールアドレス', value: 'email' },
				],
				task: [
					{text: '題名', value: 'title'},
					{text: '本文', value: 'body' },
					{text: 'ステータス', value: 'status' },
				],
			},
			data: {
				user: [],
				task: [
					{title: '掃除', body: '部屋の掃除をする', status: '完了'},
					{title: '買い物', body: '夕食のおかずを買いに行く'},
					{title: '洗濯', body: '洗濯する'},
				],
			},
			item: {},
      	}
	},
	mutations: {
		addItem: function(state, item) {
			state.data[item.key].push(item.value)
		},
		updateSchema: function(state, schemas) {
			state.schemas = schemas
		},
		initializeItemsBySchema: function(state) {
			let schemas = state.schemas
			let data = {}
			Object.entries(schemas).forEach(([key, value]) => {
				data[key] = []
			})
			state.data = data
		},
		initializeDataBySchema: function(state) {
			let schemas = state.schemas
			let items = {}
			Object.entries(schemas).forEach(([key, value]) => {
				let item = {}
				item[key] = {}
				value.forEach(e => {
					item[key][e.value] = ''
				})
				items[key] = item
			})
			state.item = items
		}
	}
 })
}

export default createStore