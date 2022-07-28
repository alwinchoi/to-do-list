import '../css/table.css'

import { useState } from 'react';

const fillIn = ['Task', 'Color', 'Frequency', 'Start Date', 'End Date', 'Type']

const Table = props => {
    let [newTask, setNewTask] = useState({})
    let [textColor, setTextColor] = useState('')

    const getTask = () => {
        let information = document.querySelectorAll('input')
        let startDate, endDate = 0
        let test = []
        information.forEach((entry, i) => {
            if (!entry.value) {
                console.log(entry.id)
                test.push(entry.id)
            }
            if (entry.id === 'Start Date') {
                startDate = Date.parse(entry.value)
            }
            if (entry.id === 'End Date') {
                endDate = Date.parse(entry.value)
            }
        })
        if (textColor === '') {
            test.push('Color')
        }
        if (test.length) {
            if (test.length > 1) {
                alert(test + " are empty")
            }
            alert(test + " is empty")
        }
        else if (endDate - startDate < 0) {
            alert('End Date is ealier than Start Date!')
        }
        else {
            let newTask = {}
            information.forEach((entry, i) => {
                if (!(entry.id in newTask)) {
                    newTask[entry.id] = entry.value
                }
            })
            newTask['Color'] = textColor
            setNewTask(newTask)
        }
        // console.log(JSON.stringify(newTask))
    }

    const changeTextColor = color => {
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
        else if (rowName.includes('Frequency')) {
            return (
                <div>
                    <input id={rowName} type="text" list="cars" />
                    <datalist id="cars">
                        <option>1 day</option>
                        <option>7 days</option>
                        <option>30 days</option>
                    </datalist>
                </div>
            )
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