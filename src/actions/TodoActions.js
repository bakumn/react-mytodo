import dispatcher from "../dispatcher";
import axios from "axios";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodos() {
    dispatcher.dispatch({type: "FETCH_TODOS"});
    axios("http://localhost:6060/ingredients").then((res) => {
        console.log("got the data!", res.data);
        dispatcher.dispatch({type: "RECEIVE_TODOS", todos:res.data});
    });
}
