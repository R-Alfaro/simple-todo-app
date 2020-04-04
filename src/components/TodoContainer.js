import React from "react"
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
// import uuid from "react-uuid";
import axios from "axios";
import "../App.css";


class TodoContainer extends React.Component {
    // state = {
    //     todos: [
    //         {
    //             id: uuid(),
    //             title: "Setup development environment",
    //             completed: true
    //         },
    //         {
    //             id: uuid(),
    //             title: "Develop website and add content",
    //             completed: false
    //         },
    //         {
    //             id: uuid(),
    //             title: "Deploy to live server",
    //             completed: false
    //         }
    //     ]
    // };

    // https://jsonplaceholder.typicode.com/todos

    state = {
        todos: [],
    }

    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            }),
        })
    }

    delTodo = id => {
        axios
            .delete(`https://my-json-server.typicode.com/r-alfaro/db/todos/${id}`)
            .then(reponse =>
                this.setState({
                    todos: [
                        ...this.state.todos.filter(todo => {
                            return todo.id !== id
                        }),
                    ],
                })
            )
    }

    addTodoItem = title => {
        axios
            .post("https://my-json-server.typicode.com/r-alfaro/db/todos/", {
                title: title,
                completed: false,
            })
            .then(response =>
                this.setState({
                    todos: [...this.state.todos, response.data],
                })
            )
    }

    componentDidMount() {
        //axios.get("https://jsonplaceholder.typicode.com/todos", {
        axios.get("https://my-json-server.typicode.com/r-alfaro/db/todos/", {
            params: {
                _limit: 999
            }
        })
            .then(response => this.setState({ todos: response.data })
            );
    }

    render() {
        return (
            <div className="container">
                <Header headerSpan={this.state.show} />

                <InputTodo addTodoProps={this.addTodoItem} />

                <TodosList
                    todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.delTodo} />
            </div>
        )
    }
}

export default TodoContainer