var app = new Vue({
    el: '#root',
    data: {
      linkimg: 'vue_logo.png',
      message: 'Vue Todo List',
      textedit: '',
      inputext: '',
      todos: [
        {
          title: '',
          status:''
        }
      ],
    },
    computed:{
      todosComputed: function () {
        let todosdone = this.todos.filter((todo) => todo.status == 'done');
        let todostodo = this.todos.filter((todo) => todo.status == 'todo');
        let todosedit = this.todos.filter((todo) => todo.status == 'edit');
        return [...todostodo,...todosdone, ...todosedit]
      }
    },
    methods:{
      add: function () {
        if (this.inputext != '') {
          let obj = {
            title: this.inputext,
            status: 'todo'
          }
          this.todos.push(obj);
          this.inputext = '';
        }
      },
      check: function (todo) {
        let index = this.todos.indexOf(todo);
        this.todos[index].status = 'done';
      },
      remove: function (todo) {
        let index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
      },
      edit: function (todo) {
        let index = this.todos.indexOf(todo);
        this.todos[index].status = 'edit';
      },
      endEditing: function (todo) {
        let index = this.todos.indexOf(todo);
        this.todos[index].title = this.textedit;
        this.todos[index].status = 'todo';
        this.textedit = '';
      },
    }
});
