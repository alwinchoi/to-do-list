import '../css/table.css'

import { useState } from 'react';

const fillIn = ['Task', 'Color', 'Frequency', 'Start Date', 'End Date', 'Type']

const Table = props => {
    let [newTask, setNewTask] = useState({})
    let [textColor, setTextColor] = useState('')

    const getTask = () => {
        let information = document.querySelectorAll('input')
        let test = []
        information.forEach((entry, i) => {
            console.log(entry.id)
            if (!entry.value) {
                console.log(entry.id)
                test.push(entry.id)
            }
        })
        if (textColor === '') {
            test.push('Color')
        }
        if (test.length) {
            alert(test + " are empty")
        }
        else {
            let newTask = {}
            information.forEach((entry, i) => {
                if (!(entry.id in newTask)) {
                    newTask[entry.id] = entry.value
                }
            })
            newTask['Color'] = textColor
            console.log(newTask)
            setNewTask(newTask)
        }
    }

    const changeTextColor = color => {
        // console.log(color)
        setTextColor(color)
    }

    const returnInput = rowName => {
        if (rowName.includes('Date')) {
            return <input id={rowName} type="date" style={{ height: '54px', width: '375px' }} />
        }
        else if (rowName.includes('Color')) {
            let colours = ['blue', 'red', 'orange', 'green', 'black']
            return (
                <div className="button-list">
                    {
                        colours.map((entry, i) => {
                            return <button type="button" key={i} className="table-button" style={{ backgroundColor: `${entry}` }} onClick={() => changeTextColor(entry)}> </button>
                        })
                    }
                </div >
            )
        }
        else if (rowName.includes('Task')) {
            return <input id={rowName} type="text" style={{ color: `${textColor}` }} />
        }
        return <input id={rowName} type="text" />
    }

    return (
        < div >
            <table className='table table-dark'>
                <tbody>
                    {
                        fillIn.map((entry, i) => {
                            return (
                                <tr key={i}>
                                    <th scope='col'> {entry} </th>
                                    <td>
                                        {returnInput(entry)}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={() => getTask()}> Done </button>
        </div >
    )
}

export default Table;