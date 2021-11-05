import React, { useState } from 'react'
import { TodoItem } from './TodoItem'


export const Todos = (props) => {



    let Todos = props.todos


    let typeArr = [];
    Todos.map((todo) => {
        if (todo.status === 'TO Start') {
            typeArr.push(todo)
        }
    })

    const [status, setStatus] = useState(typeArr)
    const [statustype, setStatustype] = useState('TO Start')

    let type
    let displayStart = () => {
        let arr = []

        Todos.map((e) => {
            if (e.status === 'TO Start') {
                arr.push(e)

            }

        })

        type = 'TO Start'
        setStatus(arr)
        setStatustype(type)
    }

    let displayProg = () => {
        let arr = []

        Todos.map((e) => {
            if (e.status === 'In Progress') {
                arr.push(e)

            }

        })

        type = 'In Progress'
        setStatus(arr)
        setStatustype(type)
    }


    let displayFinished = () => {
        let arr = []

        Todos.map((e) => {
            if (e.status === 'Finished') {
                arr.push(e)

            }

        })
        type = 'Finished'
        setStatus(arr)
        setStatustype(type)
    }


    let tabeltag = {
        border: '1px solid black',
        width: '69vw',
        margin: 'auto',
        padding: '5px',
        marginTop: '20px',
        marginBottom: '100px',
        maxHeight: '20em',
        overflow: 'scroll',

    }

    let DescSec = {
        width: '500px',
    }

    let titlesec = {
        width: '200px',
        position: 'relative',
        textAlign: 'center'
    }

    let headitems = {
        padding: '10px',
        textAlign: 'center',
    }


    let btn1 = {
        backgroundColor: '#212529',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '20px',
        fontFamily: 'cursive',
        padding: '5px',
        margin: '5px 10px'
    }

    let btn2 = {
        backgroundColor: '#f9c003',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        fontSize: '20px',
        fontFamily: 'cursive',
        padding: '5px',
        margin: '5px 10px'
    }

    let btn3 = {
        backgroundColor: '#04bb0c',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '20px',
        fontFamily: 'cursive',
        padding: '5px',
        margin: '5px 10px'
    }


    // --------------------------------------------
    let listItem = {
        fontFamily: 'cursive',
        marginTop: '10px',
        marginBottom: '10px',
        borderBottom: '1px solid black',
        padding: '10px'
    }


    let descSecy = {
        width: '500px',
        height: 'auto',
        marginRight: '20px',
        padding: '5px',
        borderRight: '1px solid black',
    }

    let tableitems = {
        borderRight: '1px solid black',
        textAlign: 'center'
    }

    let fmark = {
        backgroundColor: '#04bb0c',
        float: 'right',
        padding: '3px',
        borderRadius: '50%',
        borderBottomRightRadius: '50%',
        borderTopRightRadius: 2,
        width: '30px',
        fontSize: '15px',
        color: 'white',

    }

    let deletebtn = {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '23px',
        padding: '5px'
    }

    let declarebtn = {
        backgroundColor: '#04bb0c',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '15px',
        padding: '5px',
    }
    let btnscontainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        padding: '10px'
    }


    return (
        <>
            <div className='' style={{ minHeight: '45em', marginTop: '100px', marginBottom: '100px', height: 'auto' }}>
                <h3 className='text-center my-3'>List</h3>
                <div style={{ margin: '10px auto', padding: '10px', width: 'max-content' }}>


                    <button style={btn1} onClick={displayStart}>TO Start</button>

                    <button style={btn2} onClick={displayProg}>In Process</button>


                    <button style={btn3} onClick={displayFinished}>Finished</button>


                </div>
                <div style={{ margin: '10px auto', padding: '10px', width: 'max-content' }}>Displaying List with Status : <span style={{ fontWeight: 'bold' }}>{statustype}</span>
                </div>
                <table style={tabeltag}>
                    <tr style={{ height: '70px', border: '1px solid black' }}>
                        <th style={headitems}>Sr.no</th>
                        <th style={headitems, titlesec}>Title</th>
                        <th style={DescSec, headitems}>Description</th>
                        <th style={headitems}>Status</th>
                        <th style={headitems}>Start Date</th>
                        <th style={headitems}>Deadline</th>
                        <th style={headitems}>Operation</th>
                    </tr>
                    {
                        status.length === 0 ?
                            "No todos to Display"
                            :
                            status.map((todo, index) => {

                                return (
                                    <>
                                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onEdit={props.onEdit} index={index + 1} />

                                    </>

                                )

                            })


                    }
                </table>
            </div>

        </>
    )
}

