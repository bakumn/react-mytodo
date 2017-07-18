import { EventEmitter } from "events";
import axios from "axios";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [];
    }

    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id: id, text: text, complete: false,
        });

        this.emit("change");
    }

    getAll() {
        axios("http://localhost:6060/ingredients").then((res) => {
            console.log("got the data!", res.data);
            dispatcher.dispatch({type: "RECEIVE_TODOS", todos:res.data});
        });
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
