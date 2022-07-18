import "../css/ToDoList.css"

import React, { useState, useEffect, useRef } from "react";

const ToDoList = props => {
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`

    //componentDidUpdate
    useEffect(() => {

    }, [props])

    const openModal = () => {
        props.onSelect(true)
    }

    return (
        <div>
            <div className="heading">
                <p className="title">To-do list - {date}
                    <span className="add-button">
                        <button style={{ type: "button" }} className="btn btn-light" onClick={() => openModal()}>+</button>
                    </span>
                </p>
                {props.children}
            </div>
        </div>
    )
}

export default ToDoList;