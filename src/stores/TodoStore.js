import { EventEmitter } from "events";
import axios from "axios";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.setState( {todos:[]});
        let _self = this;
        axios("http://localhost:6060/ingredients").then((res) => {
            _self.setState({todos: res.data});
            console.log(res.data);
        });
    }

    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id: id, text: text, complete: false,
        });

        this.emit("change");
    }

    getAll() {
        return this.todos;
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_TODO":
                this.createTodo(action.text);
                break;
            case "RECEIVE_TODOS":
                this.todos = action.todos;
                this.emit("change");
                break;
            default:
                break;
        }
    }

}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
