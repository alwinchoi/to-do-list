import "../css/ToDoList.css"

import React from "react";

const ToDoList = props => {
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`

    return (
        <p className="title">To-do list - {date}</p>
    )
}

export default ToDoList;