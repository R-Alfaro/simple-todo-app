import React from "react"

class TodoItem extends React.Component {

    // componentWillUnmount() {
    //     alert("Item about to be deleted!");
    // }

    render() {

        const completedStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        const { completed, id, title } = this.props.todo

        return (
            <li className="todo-item">
                <input type="checkbox" checked={completed} onChange={() => this.props.handleChangeProps(id)} />

                <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>

                <span style={this.props.todo.completed ? completedStyle : null}>{title}</span>
            </li>
        )
    }
}

export default TodoItem