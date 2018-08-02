var first_app = new Vue({
		el : "#first_app",
		data : {
			message: "This is first app message."
		}
	});

	var app2 = new Vue({
		el: "#app-2",
		data: {
			title: "You loaded this page on" + new Date().toLocaleString()
		}
	});

	var app3 = new Vue({
		el: "#app-3",
		data: {
			seen: true
		}
	});

	var app4 = new Vue({
		el: "#app-4",
		data: {
			todos: [
			{text: 'Dress UP'},
			{text: 'Show Up'},
			{text: 'Never Give up'}
			]
		}
	});

	var app5 = new Vue({
		el: "#app-5",
		data: {
			message: 'Hello Vue'
		},
		methods: {
			reverseFunction: function(){
				this.message = this.message.split('').reverse().join('');
			}
		},

		components: {
			todo_component:  Vue.component('todo-item', {
						template: '<li>This is a todo</li>'
					})
		}		
	});

	var app6 = new Vue({
		el: "#app-7",
		data: {
			grocery_list: [
				{id:0, text:'Vegetables'},
				{id:1, text:'Cheese'},
				{id:2, text:'Ginger'}
			]
		},

		components: {
			flexible_todo: Vue.component('todo-item2', {
								props: ['todo'],
								template: '<li>{{ todo.text }}</li>'
							})
		}
	});